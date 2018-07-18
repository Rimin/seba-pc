<template>
  <div class="select-material-box">
    <h1 class="title-1">
      <i class="title-icon"></i>
      {{lang === 'en-US'?shoe[curPart].enName:shoe[curPart].zhName}}
    </h1>
    <div v-show="partType === 1">
      <div class="tip-1">{{$t('m.SelectMaterial')}}</div>
      <div class="cloth-material" ref="cloth-material-box" @click="selectTexture">
        <div v-for="(item,i) in texture" 
          :key="i"
          :style="'width:'+ clothItemWidth +'px;'"
          :texture-id="item.id"
          :class="'material '+ (curTexture === item.id?'active':'')"
        >
          <img :src="item.imgUrl" alt="">
        </div>
      </div>
      <div class="tip-2" v-show="curTexture !== 0">{{$t('m.SelectColor')}}</div>
      <div class="tip-3" v-show="curTexture === 0">{{$t('m.PleaseSelectColor')}}</div>
      <div class="cloth-color-box" @click="selectColor">
        <div v-for="(list,i) in allClothes" 
          :key="i"
          v-show="curTexture + '' === i"
          :texture-id="i"
        >
          <div :class="'color-icon '+ (cloth.id === curColorId?'active':'')"
            v-for="(cloth,j) in list"
            :key="j"
            :color-id="cloth.id"
          >
            <img :src="cloth.imgUrl" alt="">
          </div>
        </div>
      </div>
    </div>
    <div v-show="partType === 2">
      <div class="tip-2">{{$t('m.SelectColor')}}</div>
      <div class="cloth-color-box" @click="selectColor">
        <div v-for="(list,i) in allGlue"
          :key="i"
          :glue-detail="i"
          v-show="glueDetail + '' === i"
        >
          <div :class="'color-icon '+ (glue.id === curColorId?'active':'')"
            v-for="(glue,j) in list"
            :key="j"
            :color-id="glue.id"
          >
            <img :src="glue.imgUrl" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTexture, getClothes, getClothById } from '../../config/cloth'
import { getGlues, getGlueById, getGlueByPartsType } from '../../config/glue'

const BASE_URL = '../../../static/selectMaterial'
class Texture{
  constructor(e){
    this.id = e.id
    this.imgUrl = BASE_URL + '/cloth-type/material_' + e.id + '.png'
  }
}
class Cloth{
  constructor(e){
    this.id = e.id
    this.imgUrl = BASE_URL + '/cloth-color/'+ e.id + '.png'
  }
}
class Glue{
  constructor(e){
    this.id = e.id
    this.imgUrl = BASE_URL + '/glue-color/' + e.id + '.png'
  }
}
export default {
  data(){
    return {
      texture: [], // 所有面料纹理
      clothItemWidth: 0,
      clothBoxWidth: 0,
      clothBoxDom: null,
      curTexture: 0, // 当前纹理
      allClothes: {}, // 所有面料颜色 {1:[],2:[],...}
      curColorId: 0, // 当前面料或胶件的颜色
      partType: 1, // 当前部件类型

      allGlue: {}, // 所有胶件材料
      glueDetail: 1 // 当前胶件类型
    }
  },
  computed: {
    shoe(){
      return this.$bus.shoe
    },
    curPart(){
      return this.$bus.curSelectPart
    },
    lang(){
      return this.$i18n.locale
    },
  },
  watch: {
    curPart(v){
      this.setPartData(v)
    },
    shoe(){
      this.setPartData(this.curPart)
    }
  },  
  created(){
    var t = this
    t.texture = getTexture().slice(1).map((e)=>{ // 拿到所有布料类型
    t.allClothes[e.id + ''] = [] // 初始化 allClothes = {1:[],2:[],...}
      return new Texture(e)
    })
    getClothes().slice(1).forEach((e)=>{
      t.allClothes[e.texture.id+''].push(new Cloth(e))
    })
    getGlues().forEach((e)=>{
      var key = e.partType.detail + '';
      if(!t.allGlue[key]) t.allGlue[key] = []
      t.allGlue[key].push(new Glue(e))
    })
    t.setPartData(t.curPart)
  },
  mounted(){
    var t = this
    setTimeout(()=>{
      t.init()
    },200)
  },
  methods: {
    init(){ // 初始化 DOM
      var t = this
      if(!t.clothBoxDom) t.clothBoxDom = t.$refs['cloth-material-box']
      t.clothBoxWidth = t.clothBoxDom.clientWidth
      var count = t.texture.length
      t.clothItemWidth = (t.clothBoxWidth / count) | 0
    },
    selectTexture(e){
      var t = this
      // console.log(e)
      var path = e.path
      for(var i=0; i<path.length; i++){
        var item = path[i]
        if(/material/g.test(item.className)){
          var attr = item.getAttribute('texture-id') - '';
          if(attr&&attr!==t.curTexture){
            return t.curTexture = attr
          }else {
            return t.curTexture = 0
          }
        }
      }
    },
    selectColor(e){
      var t = this
      // console.log(e)
      var path = e.path
      for(var i=0; i<path.length; i++){
        var item = path[i]
        if(/color-icon/g.test(item.className)){
          var attr = item.getAttribute('color-id') - '';
          // console.log(attr)
          if(attr&&attr!==t.curColorId){
            t.curColorId = attr
          }else {
            t.curColorId = 0
          }
          break;
        }
      }
      t.update()
    },
    getPartType(partId){
      return this.shoe[partId].partType.type
    },
    getGlueDetail(partId){
      if(this.partType === 2) return this.shoe[partId].partType.detail
      return this.glueDetail
    },
    update(){ // 更新全局数据
      this.$bus.shoe[this.curPart].material = this.curColorId
      this.$bus.material = this.curColorId
      console.log(this.$bus.shoe)
    },
    setPartData(v){ // 根据全局$bus对象初始化部件数据
      var shoe = this.shoe
      this.partType = this.getPartType(v) // 获取该部件是面料还是胶件
      if(this.partType === 1) { // 若为面料
        var cloth = getClothById(shoe[v].material)
        this.curTexture = cloth.texture.id // 获取面料纹理
        this.curColorId = cloth.id // 获取面料颜色
      }
      if(this.partType === 2) { // 若为胶件
        this.glueDetail = this.getGlueDetail(v) // 区分胶件类型
        if(shoe[v].material > 0){
          this.curColorId = getGlueById(shoe[v].material).id // 获取胶件颜色
        }else { // 寻找胶件的默认值
          this.curColorId = getGlueByPartsType(shoe[v].partType.id)[0].id
          console.log(this.curColorId)
        }
      }
    }
  }
}
</script>


<style lang="less" scoped>
@BaseUrl: '../../../static/selectMaterial';
.select-material-box {
  width: 100%;
  height: 100%;
  position: relative;
}

.title-1 {
  margin: 5px 0;
  font-size: 24px;
  font-weight: 100;
  color: black;
}

.title-icon {
  height: 20px;
  width: 9px;
  margin-right: 12px;
  display: inline-block;
  background: url("@{BaseUrl}/title_icon.png") 50% 50% no-repeat;
}

.tip-1 {
  color: black;
  font-size: 13px;
  font-weight: thin;
  margin: 10px 0 5px 23px; 
}

.cloth-material {
  margin-left: 20px;
  &>.material {
    height: 30px;
    border-radius: 4px;
    overflow: hidden;
    display: inline-block;
    cursor: pointer;
    &:hover {
      background: url("@{BaseUrl}/cloth-type/material_active.png");
      background-size: 100% 100%;
    }
    &.active {
      background: url("@{BaseUrl}/cloth-type/material_active.png");
      background-size: 100% 100%;
    }
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
    display: block;
  }
}

.cloth-color-box {
  min-height: 30px;
  margin-left: 23px;
}

.tip-2 {
  margin: 5px 0 5px 23px;
  color: rgb(95, 93, 93);
  font-size: 13px;
  font-weight: thin;
}

.tip-3 {
  margin: 5px 0 5px 23px;
  color: red;
  font-size: 13px;
  font-weight: thin;
}

.color-icon {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 4px 4px 4px 0;
  cursor: pointer;
  &.active {
    background: url("@{BaseUrl}/cloth-color/active.png");
    background-size: 100% 100%;
  }
}
</style>


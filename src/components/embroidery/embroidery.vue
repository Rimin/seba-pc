<template>
  <div class="embroidery-box">
    <h1 class="title-1">
      <i class="title-icon"></i>
      {{$t('m.Customised_Logo.Title')}}
    </h1>
    <div class="embroidery-edit" ref="embroidery-edit">
      <div class="embroidery-part" @click="selectEPart">
        <div :class="'div-part '+ (curPartIndex === i?'active':'')" 
          v-for="(item,i) in eParts"
          :key="i"
          :epart-index="i"
          :style="'width:'+ partBtnWidth +'px;'"
        >{{lang==='en-US'?shoe[item.partId].enName:shoe[item.partId].zhName}}</div>
      </div>
      <div class="input-box">
        <span v-show="textIn.length === 0">{{$t('m.Customised_Logo.Please_Input')}}</span>
        <input type="text" v-model="textIn" :class="'text-'+curFF">
      </div>
      <div class="select-type">
        <select class="select-font-family" v-model="curFF">
          <option v-for="(f,j) in allFF"
            :key="j"
            :value="f"
          >{{f}}</option>
        </select>
        <div class="upload-photo">上传图片</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getEmbroideryByShoeStyleId, getFontFamily } from '../../config/embroidery'
// class EPart{ 
//   constructor(e){
//     this.partId = e.partId
//     this.shoeStyle = e.shoeStyle
//     this.fontFamily = e.fontFamily
//     this.fontColor = e.fontColor
//     this.photo = e.photo
//   }
// }
export default {
  data(){
    return {
      boxWidth: 0, // 容器宽度
      partBtnWidth: 0, // 刺绣按钮宽度
      boxDom: null, // 内容器dom
      eParts: [], // 可加刺绣的部件 [{},{},...]
      allFF: [], // 所有字体


      textIn: '', // 当前文字刺绣内容
      curFF: '',  // 当前字体
      curPhoto: '', // 当前图片
      curPartIndex: 0, // 当前刺绣部件序号
      curColor: 1 // 当前文字颜色
    }
  },
  computed: {
    shoe(){
      return this.$bus.shoe
    },
    lang(){
      return this.$i18n.locale
    },
  },
  watch: {
    shoe(){
      this.init()
    },
    curPartIndex(v){
      this.setToPart(v)
    },
    textIn(v){
      this.eParts[this.curPartIndex].content = v
    },
    curFF(v){
      this.eParts[this.curPartIndex].fontFamily = v
    }
  },
  created(){
    
  },
  mounted(){
    setTimeout(() => {
      this.init()
    },200)
  },
  methods: {
    init(){ // 获取可上刺绣的部件
      this.eParts = getEmbroideryByShoeStyleId(this.shoe.shoeStyle.id)
      this.allFF = getFontFamily()
      this.curPartIndex = 0
      this.setToPart(this.curPartIndex)
      var count = this.eParts.length || 1
      if(!this.boxDom) this.boxDom = this.$refs['embroidery-edit']
      this.boxWidth = this.boxDom.clientWidth
      this.partBtnWidth = (this.boxWidth / count) | 0
    },
    selectEPart(e){
      var t = this
      // console.log(e)
      var path = e.path
      for(var i=0; i<path.length; i++){
        var item = path[i]
        if(/div-part/g.test(item.className)){
          var index = item.getAttribute('epart-index') - ''
          // console.log(attr)
          if(index!==t.curPartIndex){
            t.curPartIndex = index
          }
          break
        }
      }
    },
    setToPart(index){
      var eParts = this.eParts
      this.textIn = eParts[index].content
      this.curColor = eParts[index].fontColor
      this.curPhoto = eParts[index].photo
      this.curFF = eParts[index].fontFamily
    }
  }
}
</script>

<style lang="less" scoped>
@BaseUrl: '../../../static/embroidery';

.embroidery-box {
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

.embroidery-edit {
  margin: 10px 0 0 23px;
  min-height: 30px;
}

@BorderDefaultColor: rgb(238, 238, 238);
@BorderActiveColor: rgba(255, 0, 0, 0.5);
@DefaultBorder: 1px @BorderDefaultColor solid;
@ActiveBorder: 1px solid @BorderActiveColor;
.embroidery-part {
  height: 35px;
  &>div {
    display: inline-block;
    height: 100%;
    color: black;
    font-size: 16px;
    text-align: center;
    border: @DefaultBorder;
    color: black;
    line-height: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: white;
    transition: 200ms;
    z-index: 1;
    cursor: pointer;
    &:hover {
      color: red;
      border: none;
      border: @ActiveBorder;
      z-index: 9;
    }
    &.active {
      color: red;
      border: none;
      border: @ActiveBorder;
      z-index: 10;
    }
  }
}

.input-box {
  width: 100%;
  height: 70px;
  border: @DefaultBorder;
  border-top: none;
  position: relative;
  &>span {
    font-size: 15px;
    color: rgb(152, 152, 152);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 0;
    &:hover +input {
      border: @ActiveBorder;
      background-color: transparent;
    }
  }
  &>input {
    z-index: 2;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 35px;
    transition: 200ms;
    background-color: transparent;
    &:focus {
      border: @ActiveBorder;
      background-color: transparent;
    }
    &:hover {
      border: @ActiveBorder;
      background-color: transparent;
    }
  }
}

.select-type {
  position: relative;
  height: 40px;
  .select-font-family {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 50%;
    height: 40px;
    border: @DefaultBorder;
    outline: none;
    font-size: 16px;
    padding-left: 20px;
    &:hover {
      border: @ActiveBorder;
    }
  }

  // input.upload-photo {
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   display: inline-block;
  //   width: 50%;
  //   height: 40px;
  //   opacity: 0;
  //   cursor: pointer;
  //   &:hover + div.upload-photo {
  //     border: @ActiveBorder;
  //   }
  // }
  .upload-photo {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    width: 50%;
    height: 40px;
    color: black;
    text-align: center;
    line-height: 40px;
    border: @DefaultBorder;
    cursor: pointer;
    &:hover {
      border: @ActiveBorder;
    }
  }
}

.text-Cambria {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.text-Arial {
  font-family: Arial, Helvetica, sans-serif;
}
.text-Calibra {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.text-Century {
  font-family: Century;
}

</style>


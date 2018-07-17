<template>
  <div class="select">
    <span class="last-btn" 
      v-show="curIndex !== 0"
      @click="toLast"
    ></span>
    <div class="select-list" ref="select-list" @click="selectPart">
      <div v-show="curIndex===0">
        <div :class="'list-item '+ (onlyShoe?(item.noImgUrl?'':'list-item-click'):'list-item-click')"
          v-for="(item,i) in parts[0]" 
          :style="'width:'+itemWidth_first+'px;'"
          :shoe-part="item.id"
          :key="i"
        >
          <div :class="{'list-icon': true, 'active': curPart === item.id}">
            <img :src="onlyShoe?(item.noImgUrl||item.imgUrl):item.imgUrl">
          </div>
          <span>{{lang === 'en-US'? item.enName: item.zhName}}</span>
        </div>  
      </div>
      <div v-show="curIndex===1">
        <div :class="'list-item '+ (onlyShoe?(item.noImgUrl?'':'list-item-click'):'list-item-click')"
          v-for="(item,j) in parts[1]" 
          :style="'width:'+itemWidth_second+'px;'"
          :shoe-part="item.id"
          :key="j"
        >
          <div :class="{'list-icon': true, 'active': curPart === item.id}">
            <img :src="onlyShoe?(item.noImgUrl||item.imgUrl):item.imgUrl">
          </div>
          <span>{{lang === 'en-US'? item.enName: item.zhName}}</span>
        </div>  
      </div>
    </div>
    <span class="next-btn" 
      v-show="curIndex !== parts.length-1"
      @click="toNext"
    ></span>
  </div>
</template>

<script>
import { initShoe } from '@/config/createShoe';
import { getPartsByShoeStyleId } from '@/config/shoeParts'

const PART_BASE_URL = '../../../static/selectPart';
class Part {
  constructor(part){
    this.enName = part.enName;
    this.id = part.id;
    this.material = part.material;
    this.partType = part.partType;
    this.shoeStyle = part.shoeStyle;
    this.zhName = part.zhName;
    this.imgUrl = PART_BASE_URL + '/' + part.shoeStyle.id + '/part_' + part.id + '.png';
    if(part.partType.type === 2 && (part.partType.detail === 4 || part.partType.detail === 3)){
      this.noImgUrl = PART_BASE_URL + '/' + part.shoeStyle.id + '/part_' + part.id + '_dis.png';
    }
  }
}
const EN = 'en-US';  // 英文
const ZH = 'zh-CN';  // 中文
export default {
  data(){
    return {
      itemWidth_first: 0,
      itemWidth_second: 0,
      curIndex: 0,
      curPart: '',
      boxWidth: 0, 
    }
  },
  computed: {
    shoe(){
      return this.$bus.shoe
    },
    parts(){
      var t = this
      if(!t.shoe||!t.shoe.shoeStyle||!t.shoe.shoeStyle.id) return[[],[]]
      var clothes = []
      var glue = []
      getPartsByShoeStyleId(t.shoe.shoeStyle.id).forEach((e,i)=>{
        if(e.partType.type === 1) return clothes.push(new Part(e))
        else return glue.push(new Part(e))
      })
      return [clothes,glue]
    },
    lang(){
      return this.$i18n.locale
    },
    onlyShoe(){
      return 0
    }
  },
  created(){
    // var t = this
    // if(!t.$bus.shoe) return
    // t.shoe = t.$bus.shoe
    // console.log(t.shoe)
  },
  mounted(){
    var t = this
    setTimeout(()=>{
      t.init()
    },200)
  },
  watch: {
    shoe(){
      this.curIndex = 0 // 换鞋会改变部件排数，自动初始化
      this.curPart = ''
      this.init()
    }
  },
  methods: {
    init(){
      var t = this;
      if(!t.listDemo) t.listDemo = t.$refs['select-list']
      // console.log([t.listDemo]);
      t.boxWidth = t.listDemo.clientWidth
      var count_1 = t.parts[0].length>0?t.parts[0].length:1
      t.itemWidth_first =  (t.boxWidth / count_1) | 0 
      var count_2 = t.parts[1].length>0?t.parts[1].length:1
      t.itemWidth_second =  (t.boxWidth / count_2) | 0 
    },
    toNext(){
      var t = this
      var i = t.curIndex + 1, max = t.parts.length - 1
      t.curIndex =  i > max ? max : i
    },
    toLast(){
      var t = this
      var i = t.curIndex - 1
      t.curIndex =  i < 0 ? 0 : i
    },
    selectPart(e){
      var t = this
      // console.log(e)
      var path = e.path
      for(var i=0; i<path.length; i++){
        var item = path[i]
        if(/list-item-click/g.test(item.className)){
          var attr = item.getAttribute('shoe-part');
          if(attr){
            return t.curPart = attr
          } 
        }
      }
    }
  }
} 
</script>

<style lang="less" scoped>
@btn-width: 25px;
@btn: {
  position: absolute;
  height: 100%;
  width: @btn-width;
  top: 0;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
};

.select {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0 @btn-width;
  overflow: hidden;
}

.last-btn {
  left: 0;
  @btn();
  &:hover {
    opacity: 0.7;
  }
  background-image: url(../../../static/selectPart/last-btn.png);
}

.next-btn {
  right: 0;
  @btn();
  &:hover {
    opacity: 0.7;
  }
  background-image: url(../../../static/selectPart/next-btn.png);
}

.select-list {
  background-color: transparent;
  display: block;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 0;
  &>div {
    width: 100%;
    height: 100%;
  }
}
.list-item {
  display: inline-block;
  height: 100%;
  color: white;
  font-size: 12px;
  text-align: center;
  position: relative;
  .list-icon {
    width: 96px;
    height: 96px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: 0.2s;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  
  span {
    display: block;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 5px;
  }
}
.list-item-click {
  cursor: pointer;
  .list-icon {
    &.active {
      background: url(../../../static/selectPart/part_selbox.png);
    };
  }
  &:hover {
    .list-icon {
      background: url(../../../static/selectPart/part_selbox.png);
    }
  }
}
</style>


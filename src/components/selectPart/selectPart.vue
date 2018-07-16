<template>
  <div class="select">
    <span class="last-btn" 
      v-show="curIndex !== 0"
      @click="toLast"
    ></span>
    <div class="select-list" ref="select-list">
      <div class="list-item"
        v-for="item in parts[curIndex]" 
        :style="'width:'+itemWidth+'px;'"
      >
        <div class="list-icon">
          <img :src="item.imgUrl" alt="">
        </div>
        <span>{{lang === 'en-US'? item.enName: item.zhName}}</span>
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
      shoe: null,
      itemWidth: 0,
      curIndex: 0,
      boxWidth: 0, 
    }
  },
  computed: {
    parts(){
      var t = this;
      if(!t.shoe||!t.shoe.shoeStyle||!t.shoe.shoeStyle.id) return[[],[]];
      var clothes = [];
      var glue = [];
      getPartsByShoeStyleId(t.shoe.shoeStyle.id).forEach((e,i)=>{
        if(e.partType.type === 1) return clothes.push(new Part(e));
        else return glue.push(new Part(e));
      })
      return [clothes,glue]
    },
    lang(){
      return this.$i18n.locale
    }
  },
  created(){
    var t = this;
    t.shoe = initShoe(1)
    console.log(t.shoe)
  },
  mounted(){
    var t = this;
    setTimeout(()=>{
      t.init();
    },200)
  },
  watch: {
    curIndex(v){
      var t = this;
      t.init()
    }
  },
  methods: {
    init(){
      var t = this;
      if(!t.listDemo) t.listDemo = t.$refs['select-list'];
      // console.log([t.listDemo]);
      t.boxWidth = t.listDemo.clientWidth;
      var count = t.parts[t.curIndex].length>0?t.parts[t.curIndex].length:1;
      t.itemWidth =  (t.boxWidth / count) | 0;
    },
    toNext(){
      var t = this;
      var i = t.curIndex + 1, max = t.parts.length - 1;
      t.curIndex =  i > max ? max : i;
    },
    toLast(){
      var t = this;
      var i = t.curIndex - 1;
      t.curIndex =  i < 0 ? 0 : i;
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
  cursor: pointer;
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
    &.active {
      background: url(../../../static/selectPart/part_selbox.png);
    };
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  &:hover {
    .list-icon {
      background: url(../../../static/selectPart/part_selbox.png);
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


</style>


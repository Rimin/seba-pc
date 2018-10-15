<template>
  <div class="logo-box" ref="logo-box">
    <label>{{$t('m.Customised_Logo.Label')}}</label>
    <div class="part" 
      :style="'width:'+ itemWidth +'px;'"
      v-for="(item, i) in embroidery"
      :key="i"
    >
      <div v-show="!item.photo" 
        :title="item.content" 
        :class="'text-'+ item.fontFamily"
        :style="'color:'+ getColor(item.fontColor) +'; '+ (item.fontColor === 3?'background-color:#000;':'')"
      >
        <span>{{item.content}}</span>
      </div>
      <img v-show="item.photo" :title="item.photo" :src="item.imgBase64" alt="">
      <span>{{lang === 'en-US' ? shoe[item.partId].enName : shoe[item.partId].zhName}}</span>
    </div>
  </div>
</template>

<script>
import { getFontColorById } from '@/config/embroidery' 

const MAX_WIDTH = 160

export default {
  data(){
    return {
      logoBox: null,
      itemWidth: 100,
    }
  },
  computed: {
    shoe(){
      return this.$bus.shoe
    },
    embroidery(){
      return this.$bus.shoe.embroidery
    },
    lang(){
      return this.$i18n.locale
    },
  },
  // created(){
  //   console.log(this.shoe)
  // },
  mounted(){
    var t = this
    setTimeout(()=>{
      t.init()
    },200)
  },
  watch: {
    shoe(){
      this.init()
    }
  },
  methods: {
    init(){
      if(!this.logoBox) this.logoBox = this.$refs['logo-box']
      var count = this.embroidery.lehgth || 1
    //  console.log([this.logoBox])
      var w = ((this.logoBox.clientWidth - 150) / count) | 0
      this.itemWidth = w > MAX_WIDTH ? MAX_WIDTH : w
    },
    getColor(id){
      return getFontColorById(id).code
    }
  }
}
</script>

<style lang="less" scoped>
@BorderDefaultColor: rgb(213, 213, 213);
@BorderActiveColor: rgba(255, 0, 0, 0.7);
@DefaultBorder: 1px @BorderDefaultColor solid;
@ActiveBorder: 1px solid @BorderActiveColor;
*{
    box-sizing: border-box;
}
.logo-box {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0 0 0 150px;
  color: black;
  font-size: 15x;
  &>label {
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 0;
    text-align: right;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    width: 150px;
    padding-right: 10px;
  }
}
.part {
  height: 100%;
  width: 33%;
  padding-bottom: 20px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  &>span {
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    text-align: center;
  }
  &>div {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 35px;
    background-color: rgb(242, 242, 242);
    border: @DefaultBorder;
    overflow: hidden;
    position: relative;
    &>span {
      position: absolute;
      transform: translate(-50%,-50%);
      top: 50%;
      left: 50%;
    }
  }
  &>img {
    width: 100%;
    height: 100%;
    display: block;
    border: @DefaultBorder;
  }
}
</style>


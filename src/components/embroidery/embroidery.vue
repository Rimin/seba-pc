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
          :title="lang==='en-US'?shoe[item.partId].enName:shoe[item.partId].zhName"
        >{{lang==='en-US'?shoe[item.partId].enName:shoe[item.partId].zhName}}</div>
      </div>
      <div class="input-box" ref="input-box">
        <span v-show="textIn.length === 0">{{$t('m.Customised_Logo.Please_Input')}}</span>
        <input ref="text-in-dom" type="text" v-model="textIn" 
          :class="'text-'+curFF" 
          :style="'color:'+curColorCode+';'+(curColor === 3?'background-color:black;':'')"
        >
        <div v-show="photoEmbroidery">
          <span>{{curPhoto}}</span>
          <i class="btn-close" @click="imageDelete"></i>
        </div>
      </div>
      <div class="select-type">
        <select class="select-font-family" v-model="curFF">
          <option v-for="(f,j) in allFF"
            :key="j"
            :value="f"
          >{{f}}</option>
        </select>
        <div class="upload-photo" @click="changeOpenStatus">
          <i class=""></i>{{$t('m.Upload_Images')}}
        </div>
      </div>
      <div class="tip-1">{{$t('m.SelectColor')}}</div>
      <div class="font-color-box" @click="selectColor">
        <div v-for="(c,k) in allColor"
          :key="k"
          :color-id="c.id"
          :class="'color-btn '+ (c.id === curColor?'active':'')"
        >
          <img :src="c.imgUrl" alt="">
        </div>
      </div>
    </div>
    <div class="fix-window" v-show="openStatus" @click="changeOpenStatus">
      <div class="broad" @click.stop>
        <h2>{{$t('m.Upload_Images')}}</h2>
        <i class="btn-close" @click="changeOpenStatus"></i>
        <div class="image-box">
          <img :src="imgBase64" alt="">
        </div>
        <div class="inf">
          <span>{{curPhoto}}</span>
          <div>
            <div class="btn btn-sel-img">
              {{$t('m.Select_Image')}}
              <input type="file" ref="image-file">
            </div>
            <div class="btn btn-upl-img" @click="imageOk">{{$t('m.Confirm_Image')}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { imageFileToBase64 } from '@/common/js/fn'
import { getEmbroideryByShoeStyleId, getFontFamily, getFontColor, getFontColorById } from '@/config/embroidery'
// class EPart{ 
//   constructor(e){
//     this.partId = e.partId
//     this.shoeStyle = e.shoeStyle
//     this.fontFamily = e.fontFamily
//     this.fontColor = e.fontColor
//     this.photo = e.photo
//   }
// }
const BASE_URL = '../../../static/embroidery/color'
class FontColor{
  constructor(e){
    this.id = e.id
    this.color = e.color
    this.zhColor = e.zhColor
    this.enColor= e.enColor
    this.code = e.color
    this.imgUrl = BASE_URL + '/' + e.id + '.png'
  }
}
export default {
  data(){
    return {
      boxWidth: 0, // 容器宽度
      partBtnWidth: 0, // 刺绣按钮宽度
      boxDom: null, // 内容器dom
      textInDom: null,
      inputBoxDom: null,
      eParts: [], // 可加刺绣的部件 [{},{},...]
      allFF: [], // 所有字体
      allColor: [], // 所有颜色

      textIn: '', // 当前文字刺绣内容
      curFF: '',  // 当前字体
      curPhoto: '', // 当前图片
      curPartIndex: 0, // 当前刺绣部件序号
      curColor: 0, // 当前文字颜色 id
      curColorCode: '', // 当前文字颜色编码

      openStatus: false, // 弹窗开关
      imgBase64: '',
      imgFlieDom: null, 
      
      photoEmbroidery: false // 刺绣类型，false文字刺绣，true图片刺绣
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
      this.update()
    },
    curPartIndex(v){
      this.setToPart(v)
      this.setAngle()
    },
    textIn(v){
      this.eParts[this.curPartIndex].content = v
      this.update()
    },
    curFF(v){
      this.eParts[this.curPartIndex].fontFamily = v
      this.update()
    },
    curColor(v){
      this.curColorCode = getFontColorById(v).code
      this.eParts[this.curPartIndex].fontColor = v
      this.update()
    },
  },
  created(){
    
  },
  mounted(){
    var t = this
    setTimeout(() => {
      t.init()
      t.addFileChange()
      t.addClickBox()
    },200)
  },
  methods: {
    init(){ // 获取可上刺绣的部件
      this.eParts = getEmbroideryByShoeStyleId(this.shoe.shoeStyle.id)
      this.allFF = getFontFamily()
      this.allColor = getFontColor().map((e) => {
        return new FontColor(e)
      })
      this.curPartIndex = 0
      this.setAngle()
      this.photoEmbroidery = false
      this.setToPart(this.curPartIndex)
      var count = this.eParts.length || 1
      if(!this.boxDom) this.boxDom = this.$refs['embroidery-edit']
      this.boxWidth = this.boxDom.clientWidth
      this.partBtnWidth = (this.boxWidth / count) | 0
    },
    selectEPart(e){
      var t = this
      // //console.log(e)
      var path = e.path
      for(var i=0; i<path.length; i++){
        var item = path[i]
        if(/div-part/g.test(item.className)){
          var index = item.getAttribute('epart-index') - ''
          // //console.log(attr)
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
      this.imgBase64 = eParts[index].imgBase64
    },
    selectColor(e){
      var t = this
      //console.log(e)
      var path = e.path
      for(var i=0; i<path.length; i++){
        var item = path[i]
        if(/color-btn/g.test(item.className)){
          var index = item.getAttribute('color-id') - ''
          //console.log(index)
          if(index!==t.curColor){
            //console.log(true)
            t.curColor = index
          }
          break
        }
      }
    },
    changeOpenStatus(){ // 打开弹窗时，先读取图片
      this.curPhoto = this.eParts[this.curPartIndex].photo
      this.imgBase64 = this.eParts[this.curPartIndex].imgBase64
      this.openStatus = !this.openStatus
    },
    addFileChange(){
      var t = this
      if(!t.imgFlieDom) t.imgFlieDom = t.$refs['image-file']
      t.imgFlieDom.addEventListener('change',function(){
        var file = this.files[0]
        //console.log(file)
        t.curPhoto = file.name
        imageFileToBase64(file).then((e)=>{
          t.imgBase64 = e
        }).catch((e) => {
          alert(e)
        })
      })
    },
    addClickBox(){
      var t = this
      if(!this.boxDom) this.boxDom = this.$refs['embroidery-edit']
      if(!this.textInDom) this.textInDom = this.$refs['text-in-dom']
      if(!this.inputBoxDom) this.inputBoxDom = this.$refs['input-box']
      this.boxDom.addEventListener('click',function(){
        t.$bus.hasChange = !t.$bus.hasChange
      })
      this.inputBoxDom.addEventListener('click', function () {
        t.textInDom.focus()
      })
    },
    imageOk(){
      var t = this
      if(t.curPhoto) {
        this.photoEmbroidery = true // 刺绣类型改为图片刺绣
        this.eParts[this.curPartIndex].photo = this.curPhoto
        this.eParts[this.curPartIndex].imgBase64 = this.imgBase64
        this.eParts.forEach((e)=>{
          e.content = '' // 删除文字刺绣
          e.fontColor = 1 // 重置文字颜色
          if(!e.photo || !e.imgBase64) { // 没图片的全部换上当前图片
            e.photo = t.curPhoto
            e.imgBase64 = t.imgBase64
          }
        })
        this.update()
      }
      this.openStatus = !this.openStatus
    },
    imageDelete(){
      var t = this
      this.photoEmbroidery = false // 刺绣类型改为文字刺绣
      this.eParts.forEach((e)=>{ // 删除所有图片
        e.photo = ''
        e.imgBase64 = ''
      })
      this.update()
    },
    update(){
      this.$bus.embroidery = Object.assign([],this.eParts)
    },
    setAngle(){
      this.$bus.angle = this.eParts[this.curPartIndex].angle
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
@center-middle: {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
};

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
    @center-middle();
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
  &>div {
    width: 100%;
    height: 100%;
    z-index: 5;
    position: absolute;
    top: 0;
    left: 0;
    color: #000;
    background: white;
    &>span {
      @center-middle();
      white-space: pre;
      overflow: hidden;
      display: inline-block;
      max-width: 70%;
    }
    &>.btn-close {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
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

.font-color-box {
  margin-top: 0;
}

.color-btn {
  display: inline-block;
  width: 36px;
  height: 21px;
  margin: 0 2px 3px 0;
  cursor: pointer;
  &:hover {
    background: url("@{BaseUrl}/color/active.png");
  };
  &.active {
    background: url("@{BaseUrl}/color/active.png");
  }
  >img {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.tip-1 {
  color: black;
  font-size: 13px;
  font-weight: thin;
  margin: 10px 0 5px 0; 
}

.fix-window {
  position: fixed;
  transition: 200ms;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  top: 0;
  left: 0;
  &>.broad {
    padding: 20px;
    border-radius: 4px;
    min-width: 400px;
    background-color: white;
    width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  h2 {
    color: rgb(50, 50, 50);
    text-align: center;
    margin-bottom: 20px;
  }
  .image-box {
    border: @DefaultBorder;
    display: inline-block;
    width: 49%;
    height: 200px;
    background-color: rgb(245, 245, 245);
    >img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .inf {
    display: inline-block;
    width: 49%;
    position: relative;
    height: 200px;
    >span {
      display: block;
      width: 100%;
      height: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      color: black;
      position: absolute;
      font-size: 15px;
      top: 0;
      padding: 5px;
    }
    >div {
      position: absolute;
      padding: 0 5px;
      bottom: 0;
      left: 0;
      width: 100%;
      >.btn {
        border-radius: 3px;
        position: relative;
        width: 100%;
        height: 30px;
        outline: none;
        cursor: pointer;
        margin-top: 5px;
        text-align: center;
        overflow: hidden;
        border: @DefaultBorder;
        line-height: 30px;
        transition: 200ms;
      }
    }
    .btn-upl-img {
      background: #d62329;
      color: white;
      font-weight: 400;
      font-size: 16px;
      &:hover {
        background: #bd1e23;
      }
    }
    .btn-sel-img{
      color: black;
      background: #fbfbfb;
      cursor: pointer;
      &:hover {
        border: @ActiveBorder;
      }
      &>input {
        display: block;
        width: 100%;
        height: 100%;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        z-index: 10;
      }
    }
  }
  .btn-close {
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
.btn-close {
  width: 18px;
  height: 18px;
  display: block;
  background-image: url("@{BaseUrl}/close.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
</style>


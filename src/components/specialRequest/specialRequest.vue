<template>
  <div class="special-request">
    <label>{{$t('m.Personal_Information.Special_Requests')}}</label>
    <textarea :placeholder="$t('m.Personal_Information.Special_Requests_Tip')" id="request"
      v-model="content"
    ></textarea>
    <div class="btn" @click="changeOpenStatus">{{$t('m.Upload_Images')}}</div>
    <div class="fix-window" v-show="openStatus"  @click="changeOpenStatus">
      <div class="inner-box"  @click.stop>
        <h2>{{$t('m.Upload_Images')}}</h2>
        <i class="btn-close btn-close1" @click="changeOpenStatus"></i>
        <div class="container" ref="container" @click="deleteImage">
          <div class="item"
            v-for="(item,i) in photos"
            :key="i"
          >
            <img :src="item.imgBase64" alt="" :title="item.photo">
            <span>{{item.photo}}</span>
            <i class="btn-close btn-close2" :photo-index="i"></i>
          </div>
          <h5 v-if="error">{{$t('m.Image_Alarm_'+ error)}}</h5>
        </div>
        <div class="btns-box">
          {{photos.length + ' / ' + maxCount}}
          <div class="btn sel-img">
            {{$t('m.Add_Images')}}
            <form ref="image-form"><input type="file" ref="image-file"></form>
          </div>
          <div class="btn confirm-img" @click="imgOk">
            {{waitng?$t('m.Waiting_Upload'):$t('m.Confirm_Image')}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RequestPhoto, REQUEST_PHOTO_MAX_COUNT } from '@/config/PersonalMessage'
import { imageFileToBase64 } from '@/common/js/fn'
import { getImgName } from '@/api/order'
export default {
  data(){
    return {
      photos: [],
      content: '',
      openStatus: false,
      waitng: false,
      error: '1',
      maxCount: REQUEST_PHOTO_MAX_COUNT,
    }
  },
  watch: {
    content(v){
      this.$bus.personalMessage.specialRequestContent = v
    },
    photos(v){
      var t = this
      var toBottomTimer = setTimeout(()=>{
        if(!t.containerDom) t.containerDom = t.$refs['container']
        t.containerDom.scrollTop = t.containerDom.clientHeight
      },100)
      if(!v.length) return this.error = '1'
      else if(v.length === REQUEST_PHOTO_MAX_COUNT) return this.error = 'Max'
      else return this.error = ''
    }
  },
  mounted(){
    var t = this
    setTimeout(()=>{
      t.init()
      t.addFileChange()
    },200)
  },
  methods: {
    init(){
      var ms = this.$bus.personalMessage
      this.photos = ms.specialRequestPhoto || []
      this.content = ms.specialRequestContent  
      this.waitng = false
      if(!this.photos.length) {
        this.error = '1'
      } else {
        this.error = ''
      }
    },
    changeOpenStatus(){
      if(this.waitng) return
      this.openStatus = !this.openStatus
      if(this.openStatus) this.init()
    },
    addFileChange(){
      var t = this
      if(!this.imgFileDom) this.imgFileDom = this.$refs['image-file']
      if(!this.imgFormDom) this.imgFormDom = this.$refs['image-form']
      this.imgFileDom.addEventListener('change',function(){
        var file = this.files[0]
        var name = file.name
        if(!file) return
        if(t.photos.length >= 5) {
          t.imgFormDom.reset()
          return
        }
        // 转换为base64
        t.waitng = true
        imageFileToBase64(file).then((e)=>{
         // t.photos.push(new RequestPhoto(name, e))
          t.error = ''
          var formdata = new FormData()
          formdata.append('image', file)
          // 上传图片,取得imgName
          t.uploadImge(formdata, name, e)
          t.imgFormDom.reset()
        }).catch((e)=>{
          t.waitng = false
          if(e.message === '1') {
            t.error = ''
          } else {
            t.error = e.message
          }
          t.imgFormDom.reset()
        })
      })
    },
    uploadImge(file, name, base64){
      getImgName(file).then((res) => {
        if(res.result === 'success'){
           this.photos.push(new RequestPhoto(name, base64, res.message))
        
        }else{
          this.error = res.message + ', please try again'
          this.imgFormDom.reset()
        }
        this.waitng = false
      }).catch((e)=>{
          this.waitng = false
          if(e.message === '1') {
            this.error = ''
          } else {
            this.error = e.message
          }
          this.imgFormDom.reset()
      })
    },
    deleteImage(e){
      var t = this
      var path = e.path
      for(var i=0; i<path.length; i++){
        var item = path[i]
        if(/btn-close/g.test(item.className)){
          var index = item.getAttribute('photo-index') - ''
          // //console.log(attr)
          t.photos.splice(index,1)
          // console.log('删除后：')
          // console.log(t.photos)
          // console.log(this.$bus.personalMessage.specialRequestPhoto)
          break
        }
      }
    },
    imgOk(){
      // console.log(this.photos)
      // 上传图片获得图片名 
      // for (let i= 0; i< this.photos.length; i++) {
      //    getImgName(this.photos[i].imgBase64).then(res => {
      //     // console.log(img)
      //       if(res.result === 'success') {
      //         this.photos[i].imgName = res.message
      //       }
      //    })
      // }
      // console.log(this.photos)
      // console.log(this.$bus.personalMessage.specialRequestPhoto)
      if(this.waitng) return
      this.openStatus = false
    }
  }
}
</script>

<style lang="less" scoped>
@BaseUrl: '../../../static/embroidery';
@BorderDefaultColor: rgb(213, 213, 213);
@BorderActiveColor: rgba(255, 0, 0, 0.7);
@DefaultBorder: 1px @BorderDefaultColor solid;
@ActiveBorder: 1px solid @BorderActiveColor;
*{
    box-sizing: border-box;
}
.special-request {
  padding: 0 8px 40px 150px;
  position: relative;
  color: black;
  width: 100%;
  height: 100%;
  &>textarea {
    height: 100%;
    width: 100%;
    display: inline-block;
    font-size: 15px;
    border: @DefaultBorder;
    padding: 2px 3px;
    transition: 200ms;
    background-color: rgb(243, 243, 243);
    resize: none;
    padding: 5px;
    outline: none;
    &:focus {
      border: @ActiveBorder;
    }
  }
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
  &>.btn {
    position: absolute;
    bottom: 5px;
    left: 150px;
    display: inline-block;
    border: @DefaultBorder;
    height: 30px;
    width: 120px;
    line-height: 28px;
    text-align: center;
    font-size: 12px;
    margin: 0;
    cursor: pointer;
    color: #000;
    background: #ffffff;
    border-radius: 4px;
    &:hover {
      background: rgb(230, 0, 18);
      color: #fff;
    }
  }
}
#request::-webkit-input-placeholder{
  font-size: 14px;
  font-family: arial,'Hiragino Sans GB','Microsoft Yahei','微软雅黑','宋体',Tahoma, '\5b8b\4f53',Arial,Helvetica;
}
#request::-moz-placeholder{
  font-size: 14px;
  font-family: arial,'Hiragino Sans GB','Microsoft Yahei','微软雅黑','宋体',Tahoma, '\5b8b\4f53',Arial,Helvetica;
}
#request:-moz-placeholder{
  font-size: 14px;
  font-family: arial,'Hiragino Sans GB','Microsoft Yahei','微软雅黑','宋体',Tahoma, '\5b8b\4f53',Arial,Helvetica;
}
#request:-ms-input-placeholder {
  font-size: 14px;
  font-family: arial,'Hiragino Sans GB','Microsoft Yahei','微软雅黑','宋体',Tahoma, '\5b8b\4f53',Arial,Helvetica;
}

.fix-window {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.inner-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 30%;
  min-width: 400px;
  height: 400px;
  background: white;
  padding: 50px 10px 50px 10px;
  border-radius: 4px;
  color: black;
  &>.btn-close {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  &>h2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 20px;
    height: 50px;
    line-height: 50px;
    font-weight: 500;
  }
  &>.btns-box {
    height: 35px;
    position: absolute;
    bottom: 10px;
    text-align: center;
    left: 0;
    width: 100%;
  }
}

.btn {
  display: inline-block;
  height: 33px;
  line-height: 33px;
  width: 120px;
  background: blue; 
  margin: 0 2px;
  border-radius: 4px;
  border: @DefaultBorder;
  position: relative;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
}
.btn.sel-img {
  color: black;
  background: #fbfbfb;
  cursor: pointer;
  &:hover {
    border: @ActiveBorder;
  }
  input, form {
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
.btn.confirm-img {
  background: #d62329;
  color: white;
  &:hover {
    background: #bd1e23;
  }
}

.btn-close {
  width: 18px;
  height: 18px;
  display: block;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.btn-close1{
  background-image: url("@{BaseUrl}/close.png");
}
.btn-close2{
  background-image: url("@{BaseUrl}/close2.png");
}

.container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  &>h5 {
    color: red;
    text-align: center;
  }
  &>.item {
    height: 100px;
    border-bottom: @DefaultBorder;
    border-color: rgb(247, 247, 247);
    padding: 3px;
    white-space: nowrap;
    position: relative;
    &>img {
      display: inline-block;
      height: 100%;
      width: 120px;
      cursor: pointer;
    }
    &>.btn-close {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
    &>span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 130px;
      display: inline-block;
      max-width: 190px;
      max-height: 100%;
      font-size: 17px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>


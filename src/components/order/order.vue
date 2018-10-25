<template>
  <div class="order mainbg">
      <div class="headbg">
          <p class="order-title">
              ·&nbsp;&nbsp;{{$t('m.Order_Title')}}&nbsp;&nbsp;·
          </p>
      </div>
      <div class="order-main main">
          <div class="content">
            <div class="order-contain clrfix">
                <div class="shoe-preview fl">
                    <show-shoe :edit="editshow"></show-shoe>
                </div>
                <div class="order-form fl">
                    <div class="personal-message-box">
                        <personal-inf></personal-inf>
                    </div>
                    <div class="product-config-box">  
                        <product-config></product-config>
                    </div>
                    <div class="CUSTOMISED_LOGO">
                        <check-logo></check-logo>
                    </div>
                    <div class="SPECIAL_REQUESTS">
                        <special-request></special-request>
                    </div>
                </div>
            </div>
            <div class="order-btn-wrap">
                <router-link to="/rollerskate/edit" :class="(lang==='en-US'? 'operate_en_btn  back_en_btn': 'operate_zh_btn  back_zh_btn')"></router-link>
                <button style="margin-left: 30px;" :class="(lang==='en-US'? 'operate_en_btn2  confirm_en_btn': 'operate_zh_btn2  confirm_zh_btn')" @click="submintOrder" :disabled="isDisabled"></button>
            </div>
          </div>
      </div>
      <div class="comfig" v-show="showTipBox" @click="showTipBox = false">
          <div class="tip-box" @click.stop>
                <div id="close" @click="showTipBox = false"></div>
                <div class="tip-wrap">
                    <i :class="'tip-icon '+(status===2?'tip-icon_suss':'tip-icon_warning')" ></i>
                    <p>
                       {{status===1?$t('m.Order_Tip.Submiting'):(status===0?$t('m.Order_Tip.Failure'):$t('m.Order_Tip.Success'))}}
                    </p>
                   <span>{{orderTip}}</span>
                </div>
                <div v-show="status!==1" :class="'back_btn '+(status===1?'':(status===0?'back_btn_unsuccess':'back_btn_success'))" @click="showTipBox = false">{{status===0?$t('m.Order_Tip.Back_Btn'):$t('m.Order_Tip.Thanks_Btn')}}</div>
          </div>
      </div>
      <!-- <div class="testpicture" v-show="test">
          <img :src="test">
      </div> -->
  </div>
</template>

<script>
import ShowShoe from '@/components/showShoe/showShoe'
import PersonalInf from '@/components/personalInf/personalInf'
import SpecialRequest from '@/components/specialRequest/specialRequest'
import CheckLogo from '@/components/checkLogo/checkLogo'
import ProductConfig from '@/components/productConfig/productConfig'
import { fliter } from '@/common/js/validata'
import { getAreaById } from '@/config/area'
import { getGlueById } from '@/config/glue'
import { getLogoByShoeId } from '@/config/logo'
import { getClothById } from '@/config/cloth'
import { getPartsByIdAndShoeStyleId } from '@/config/shoeParts'
import { getFontColorById } from '@/config/embroidery'
import { sendOrder } from '@/api/order'
class Part {
    constructor (name, material, parttype, lang){
        this.partName = name
        this.language = lang
        if(parttype === 1) {
            this.sort = true
            if(lang === 'en') {
                if(material === 0) {
                    this.material =  getClothById(material).enColor
                } else this.material = material + '·' + getClothById(material).enColor
               
            } else {
                if(material === 0) {
                   this.material = getClothById(material).zhColor
                } else this.material = getClothById(material).texture.name + material + '号·' + getClothById(material).zhColor
            }
        } else{
            this.sort = false
            if(lang === 'en') {
                this.material = getGlueById(material).enColor
            } else {
                this.material = getGlueById(material).zhColor
            }
        }
       
    }
}
class CustomLogo {
    constructor(type, shoeId ,id, content, font, colorid, lang) { // type 0 表示文字， 1 表示图片
        if(type === 0) { // 文字
            this.name = (lang === 'en') ? getPartsByIdAndShoeStyleId(shoeId, id).enName : getPartsByIdAndShoeStyleId(shoeId, id).zhName
            this.text = content,
            this.font = font,
            this.color = (lang === 'en') ? getFontColorById(colorid).enColor :  getFontColorById(colorid).zhColor 
            this.language = lang
        } else {
            this.name = getPartsByIdAndShoeStyleId(shoeId, id).enName
            this.logo = content
        }
    }
}
export default {
  computed: {
    lang() {
        return this.$i18n.locale
    },
    shoe() {
        return this.$bus.shoe
    },
    nowheel() {
        return this.$bus.nowheel
    },
    personalinfor() {
        return this.$bus.personalMessage
    },
    skateInformation (){
        return this.$bus.skateInformation
    },
    orderTip(){
        if(this.status===1) {
            return this.lang === 'en-US' ? 'loading......': '正在生成订单中，请稍等...'
        } else if(this.status === 0 && this.lang === 'en-US' && (this.error_reason === 0||this.error_reason === 1||this.error_reason === 2||this.error_reason===3||this.error_reason===4||this.error_reason===5 )) {
            return 'Please fill in the blank!'
        } else if(this.status === 0 && this.error_reason === 6) {
            return this.lang === 'en-US' ? 'Sorry, some error happen,please try again': '出错，请再试一次'
        } else if(this.status === 0 && this.lang !== 'en-US') {
            switch (this.error_reason) {
                case 0:
                    return '未填写姓'
                    break;
                case 1:
                    return '未填写名'
                    break;
                case 2:
                    return '未填写电话'
                    break;
                 case 3:
                    return '未填写邮箱'
                    break;
                case 4:
                    return '未填写邮编'
                    break;
                case 5:
                    return '未填写地址'
                    break;
            }
        } else if(this.status === 2) {
            return this.lang === 'en-US' ? 'THANK YOU FOR YOUR MESSAGE. WE WILL RESPOND PROMPTLY': '我们将会尽快联系您，感谢。'
        }
    }
  },
  components:{
    ShowShoe,
    PersonalInf,
    SpecialRequest,
    CheckLogo,
    ProductConfig,
  },
  data(){
      return {
        editshow: false,
        status: 1, // 0 失败，信息不完整或提交订单不成功 // 1 等待正在提交  // 2 提交成功
        showTipBox: false,
        error_reason: 0, // 0: 未填写姓 1 未填写名 2 未填写电话 3 未填写邮箱 4 未填写邮编 5 未填写地址 6 其他错误
        test: '',
        order: {},
        isDisabled: false
      }
  },
  methods: {
    submintOrder() {
        this.showTipBox = true
        this.isDisabled = true
        if(!this.validata()) {
          //  console.log('订单还未填写完整')
            this.isDisabled = false
            return
        }
        else {
            var that = this
            // 开始生成订单提交
            that.creactOrder()
    
            sendOrder(that.order).then(res => {
                if(res.result === 'success') {
                    that.status = 2
                    that.isDisabled = false
                } else {
                    that.status = 0
                    that.error_reason = 6
                    that.isDisabled = false
                }
            }).catch(function(error) {
                that.status = 0
                that.error_reason = 6
                that.isDisabled = false
                // console.log(this)
                // console.log(error)
            })
        }
    },
    creactOrder() {
        // 个人基本信息
        this.order.customer = {
           firstName: this.personalinfor.firstName,
           lastName: this.personalinfor.lastName,
           phoneNumber: this.personalinfor.phone,
           email: this.personalinfor.email,
           postId: this.personalinfor.postCode,
           address: this.personalinfor.address,
           sebaStores: this.personalinfor.SEBA_STORE_NAME,
           sebaAddress: this.personalinfor.SEBA_STORE_ADDRESS,
           area: getAreaById(this.personalinfor.areaId).enName 
        }
        // 鞋子码数相关
        this.order.skateInformation = this.skateInformation
        // this.order.skateInformation.isSkate = !this.nowheel
        if(!this.nowheel) { // 如果有轮子计算出颜色值否则为空
            let framecolor = this.getPartColor('Flat Frame')
            let wheelscolor = this.getPartColor('Wheels')
            this.order.skateInformation.frameOption.color_en = framecolor.color_en
            this.order.skateInformation.frameOption.color_zh = framecolor.color_zh
            this.order.skateInformation.wheelOption.color_en = wheelscolor.color_en
            this.order.skateInformation.wheelOption.color_zh = wheelscolor.color_zh
        }

        // 图片合成部件图片 logo为数组，要另外找和判断是否冲突
        this.order.skateParts = {
           sort: 'shoe_' + this.shoe.shoeStyle.id,
           isSkate: !this.nowheel
        }
        for(let key in this.shoe) {
            if(/^[a-z]$/.test(key)) { 
                this.order.skateParts[key] = this.shoe[key].material
            }
        }
        this.order.skateParts.logo = this.getLogo()
       
        // 鞋子部件部分 excel表格
        this.order.skatePartList = this.getPartsForExcel()

        // 自定义部分及特殊要求部分
        this.order.customised = {
            content: this.personalinfor.specialRequestContent,
            pictures: this.getSpecialImg(),
            logos: this.getcustomisedLogo()
        }

       // console.log(this.order)
    },
    getSpecialImg() {
        let img =  this.personalinfor.specialRequestPhoto.map(x => x.imgName)
        return img
    },
    getcustomisedLogo() {
        let logos = []
        let embroidery = this.shoe.embroidery
        for(var i = 0; i< embroidery.length; i++) {
            if(embroidery[i].imgBase64) {
                logos.push(new CustomLogo(1, this.shoe.shoeStyle.id ,embroidery[i].partId, embroidery[i].imgBase64 ))
            } else if(embroidery[i].content) {
                logos.push(new CustomLogo(0, this.shoe.shoeStyle.id, embroidery[i].partId, embroidery[i].content, embroidery[i].fontFamily, embroidery[i].fontColor, 'en'))
                logos.push(new CustomLogo(0, this.shoe.shoeStyle.id, embroidery[i].partId, embroidery[i].content, embroidery[i].fontFamily, embroidery[i].fontColor, 'zh'))
            }
        }
        return logos
    },
    getPartsForExcel(){
        let parts = []
          for(let key in this.shoe) {
            if(/^[a-z]$/.test(key)) { 
               parts.push(new Part(this.shoe[key].enName, this.shoe[key].material, this.shoe[key].partType.id, 'en'))
               parts.push(new Part(this.shoe[key].zhName, this.shoe[key].material, this.shoe[key].partType.id, 'zh'))
            }
        }
        return parts
    },
    getPartColor(partname) {
        let color = {}
        for(let key in this.shoe) {
            if(this.shoe[key].enName === partname ) {
                color.color_zh = getGlueById(this.shoe[key].material).zhColor
                color.color_en = getGlueById(this.shoe[key].material).enColor
                break
            }
        }
        return color
    },
    getLogo() {
        let logoArr = getLogoByShoeId(this.shoe.shoeStyle.id)
        let embroidery = this.shoe.embroidery
        //if(this.shoe)
         if(logoArr.length !== 0) {
            logoArr =  logoArr.filter((x, index) => {
            let flag = true
            for(var i=0; i<embroidery.length; i++) {
                if(embroidery[i].content || embroidery[i].imgBase64) {
                    if(embroidery[i].partId === x.confict) flag = false
                }
            }
                if(flag) return x 
            })
            // console.log(logoArr)
            if(logoArr.length !== 0) {
                logoArr = logoArr.map(x => x.id)
            }
         }
       
        return logoArr
    },
    validata() {
        // console.log(this.personalinfor)
        // console.log(this.skateInformation)
        this.status = 1
        if(!fliter(this.personalinfor.lastName)){
            this.status = 0; this.error_reason = 0
            return false
        } else if(!fliter(this.personalinfor.firstName)){
            this.status = 0; this.error_reason = 1
            return false
        } else if(!fliter(this.personalinfor.phone)){
            this.status = 0; this.error_reason = 2
            return false
        } else if(!fliter(this.personalinfor.email)){
            this.status = 0; this.error_reason = 3
             return false
        } else if(!fliter(this.personalinfor.postCode)){
            this.status = 0; this.error_reason = 4
             return false
        } else if(!fliter(this.personalinfor.address)){
            this.status = 0; this.error_reason = 5
            return false
        } else {
            this.status = 1
            return true
        }
    },
    // drawShoeImg(){
    //     // just for test
    //     let canvasSide = document.createElement("canvas")
    //     canvasSide.width = 638
    //     canvasSide.height = 590
    //     let contextSide = canvasSide.getContext("2d")
    //     contextSide.rect(0 , 0 , canvasSide.width , canvasSide.height)
    //     contextSide.fillStyle = 'rgba(255, 255, 255, 0)'
    //     contextSide.fill()
    //     let imgside = document.getElementsByClassName("imgside")
    //     // let imgfront = document.getElementsByClassName("imgfront")
    //     // let img45 = document.getElementsByClassName("img45")
    //     for(let i = 0; i < imgside.length; i++) {
    //         contextSide.drawImage(imgside[i], 0 , 0, canvasSide.width , canvasSide.height) 
    //     }
    //     let base64Side = canvasSide.toDataURL("image/png")
    //     // this.test = base64Side
    //     console.log(base64Side)
    // }
  }
}
</script>


<style lang="less" scoped>
@import url('../../common/less/variable.less');
@import url('../../common/less/common.less');
.order-main{
    width: 1140px;
    height: 970px;
    margin: -160px auto 17px;
}
.order-title{
    text-align: center;
    color: #fff;
    font-weight: 100;
    font-size: 20px;
    padding-top: 32px;
}
.order-contain{
   margin-top: 30px;
   height: 850px; 
}
.order-btn-wrap{
    height: 90px;
    text-align: center;
}
.shoe-preview{
    position: relative;
    width: 434px;
    height: 100%;
    border-right: #ccc solid 1px;
    overflow: hidden;
}
.order-form{
   width: 640px;
   position: relative;
   height: 100%; 
}
.operate_zh_btn{
    cursor: pointer;
    display: inline-block;
    width: 220px;
    height: 34px;
    margin-top: 25px;
    background: url("@{staticimg}/showShoe/btn_zh.png") no-repeat;
}
.operate_zh_btn2{
    cursor: pointer;
    display: inline-block;
    width: 220px;
    height: 34px;
    margin-top: 25px;
    vertical-align: top;
    background: url("@{staticimg}/showShoe/btn_zh.png") no-repeat;
}
.operate_en_btn{
    cursor: pointer;
    display: inline-block;
    width: 220px;
    height: 34px;
    margin-top: 25px;
   	background: url("@{staticimg}/showShoe/btn_en.png") no-repeat;
}
.operate_en_btn2{
    cursor: pointer;
    display: inline-block;
    width: 220px;
    height: 34px;
    margin-top: 25px;
    vertical-align: top;
   	background: url("@{staticimg}/showShoe/btn_en.png") no-repeat;
}
.back_zh_btn{
    background-position: -408px -34px;
    &:hover{
        background-position: -412px -168px;
    }
}
.back_en_btn{
    background-position: -408px -34px;
    &:hover{
       background-position: -412px -168px; 
    }
}
.confirm_zh_btn{
    background-position: -414px -68.4px;
    &:hover{
        background-position: -414px -102px;
    }
}
.confirm_en_btn{
    background-position: -414px -68.4px;
    &:hover{
        background-position: -414px -101px; 
    }
}
.personal-message-box {
    width: 100%;
    position: relative;
}
.CUSTOMISED_LOGO {
    width: 100%;
    position: absolute;
    bottom: 110px;
    height: 110px;
}
.SPECIAL_REQUESTS {
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
}
.product-config-box{
    width: 100%;
}
.comfig{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 100;
}
.tip-box{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -110px;
    margin-left: -154px;
    height: 220px;
    width: 308px;
    background: #fff;
    border-radius: 3px;
    padding: 0 20px;
}
#close{
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
	width: 15px;
	height: 15px;
    background: url("@{bgimgurl}/order/close.png") no-repeat;
    background-position: 50% 50%; // !
}
.tip-icon{
    position: absolute;
    left: 40px;
    width: 50px;
    height: 50px;
    background-position: 50% 50%;
}
.tip-icon_suss{
    background: url("@{bgimgurl}/order/icon_suss.png") no-repeat;
}
.tip-icon_warning{
    background: url("@{bgimgurl}/order/icon_warn.png") no-repeat;
}
.tip-wrap {
    & > p{
        margin: 0;
        margin-top: 20px;
        font-size: 20px;
        line-height: 50px;
        height: 50px;
        text-align: center;
        font-weight: 100;
    }
    & > span{
        display: block;
        font-size: 14px;
        margin-top: 15px;
        margin-bottom: 30px;
        text-align: center;
    }
}
.back_btn{
    cursor: pointer;
    width: 160px;
    height: 40px;
    margin: 0 auto;
    display: block;
    margin-top: 56px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 4px;
}
.back_btn_unsuccess{
    background: #f7ba31;
    &:hover{
       background: #dea92c;  
    }
}
.back_btn_success{
    background: rgb(142,228,57);
    &:hover{
       background: rgb(126,201,50);  
    }
}
button{
    border: 0;
    outline: 0;
}
// just for test
.testpicture{
    position: absolute;
    top: 0;
    left: 0;
    width: 638px;
    height: 590px;
}
</style>

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
                <div style="margin-left: 30px;" :class="(lang==='en-US'? 'operate_en_btn  confirm_en_btn': 'operate_zh_btn  confirm_zh_btn')" @click="submintOrder"></div>
            </div>
          </div>
      </div>
      <div class="comfig" v-show="showTipBox" @click="showTipBox = false">
          <div class="tip-box" @click.stop>
                <div id="close" @click="showTipBox = false"></div>
                <div class="tip-wrap">
                   <i :class="'tip-icon '+(status===2?'tip-icon_suss':'tip-icon_warning')" ></i>
                   <p>{{status===1?$t('m.Order_Tip.Submiting'):(status===0?$t('m.Order_Tip.Failure'):$t('m.Order_Tip.Success'))}}</p>
                   <span>{{orderTip}}</span>
                </div>
                <div class="back_btn"></div>
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
    orderTip(){
        if(this.status===1) {
            return this.lang === 'en-US' ? 'loading......': '正在生成订单中，请稍等...'
        } else if(this.status === 0 && this.lang === 'en-US' && (this.error_reason === 0||this.error_reason === 1||this.error_reason === 2||this.error_reason===3||this.error_reason===4||this.error_reason===5 )) {
            return 'Please fill in the blank!'
        } else if(this.status === 0 && this.error_reason === 6) {
            return this.lang === 'en-US' ? '  ': ' '
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
                case 2:
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
        test: ''
      }
  },
  methods: {
    submintOrder() {
        this.showTipBox = true
        // 
    }, 
    validata() {
        console.log(this.personalinfor)
    },
    drawShoeImg(){
        // just for test
        let canvasSide = document.createElement("canvas")
        canvasSide.width = 638
        canvasSide.height = 590
        let contextSide = canvasSide.getContext("2d")
        contextSide.rect(0 , 0 , canvasSide.width , canvasSide.height)
        contextSide.fillStyle = 'rgba(255, 255, 255, 0)'
        contextSide.fill()
        let imgside = document.getElementsByClassName("imgside")
        // let imgfront = document.getElementsByClassName("imgfront")
        // let img45 = document.getElementsByClassName("img45")
        for(let i = 0; i < imgside.length; i++) {
            contextSide.drawImage(imgside[i], 0 , 0, canvasSide.width , canvasSide.height) 
        }
        let base64Side = canvasSide.toDataURL("image/png")
        // this.test = base64Side
        console.log(base64Side)
    }
  }
}
</script>


<style lang="less" scoped>
@import url('../../common/less/base.less');
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
    height: 32px;
    margin-top: 25px;
    background: url("@{staticimg}/showShoe/btn_zh.png") no-repeat;
}
.operate_en_btn{
    cursor: pointer;
    display: inline-block;
    width: 220px;
    height: 32px;
    margin-top: 25px;
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
    background-position: -414px -68px;
    &:hover{
        background-position: -414px -102px;
    }
}
.confirm_en_btn{
    background-position: -414px -68px;
    &:hover{
        background-position: -414px -102px; 
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
    top: 20px;
    left: 70px;
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
        margin-top: 25px;
        font-size: 20px;
        line-height: 50px;
        height: 50px;
        text-align: center;
        font-weight: 100;
    }
    & > span{
        display: block;
        font-size: 14px;
        margin-top: 5px;
        margin-bottom: 30px;
        text-align: center;
    }
   
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

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
                <div class="shoe-preview fl"></div>
                <div class="order-form fl">
                    <div class="personal-message-box">
                        <personal-inf></personal-inf>
                    </div>
                </div>
            </div>
            <div class="order-btn-wrap">
                <router-link to="/rollerskate/edit" :class="(lang==='en-US'? 'operate_en_btn  back_en_btn': 'operate_zh_btn  back_zh_btn')"></router-link>
                <div style="margin-left: 30px;" :class="(lang==='en-US'? 'operate_en_btn  confirm_en_btn': 'operate_zh_btn  confirm_zh_btn')"></div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import ShowShoe from '@/components/showShoe/showShoe'
import PersonalInf from '@/components/personalInf/personalInf'
export default {
  computed: {
    lang() {
        return this.$i18n.locale
    }
  },
  components:{
    ShowShoe,
    PersonalInf
  },
  data(){
      return {
        editshow: false
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
</style>

<template>
  <div class="seba">
      <header class="head">
            <div class="fl">
                <a href="http://www.sebaskates.com/en/sebaskates.php" >{{$t('m.about')}}</a>
                |
                <a href="http://www.sebaskates.com/en/contact.php">{{$t('m.contact')}}</a>
            </div>
            <div class="fr">
                <a @click="changeLang('zh-CN')">中文</a>
                |
                <a @click="changeLang('en-US')">ENG</a>
            </div>
            <div class="logo" :class="[lang==='en-US'?'logo_en':'logo_zh']"></div>
      </header>
      <div class="choose-box choose-box1">
          <div class="choose-center">
                <div class="choose-skateimg choose-skateimg1"></div>
                <div class="choose-skatename choose-skatename1"></div>
                <div class="choose-btn-box" style="display:none">
                    <div class="choose-btn"></div>
                    HIGH CARBON
                </div>
          </div>
      </div>
  </div>
</template>


<script>
export default {
    data() {
        return {
            lang:'en-US'
        } 
    },
    created() {
        this.lang = this.$i18n.locale
    },
    watch :{
        lang (newLang) {
    
        } 
    },
    methods: {
        changeLang(lang){
            if ( this.lang === lang ) return
            else {
                this.lang = lang
                this.$i18n.locale = this.lang
            } 
       },
       
    }
}
</script>



<style lang="less" scoped>
@import url('../../common/less/base.less');
.ab_hor_center(){
    position: absolute;
    left: 0; right: 0;
    margin:  auto;
}

.seba{
    height: 100%;
    min-width: 1110px;  
    position: relative;
    background-color: @bgcolor2;
    .bg(@url: url("@{bgimgurl}index/home_bg.png") ; @size: auto 100% ; @repeat: repeat-x);
    overflow: hidden;
}
.head{
    .ab_hor_center();
    top: 30px;
    z-index: 100;
    width: 1060px;
    font-size: 12px;
    height: 62px;
    text-align: center;
    overflow: hidden;
}
.fl{float: left; }
.fr{float: right;}
.fl > a{color: @color;}
.logo{
    height: 60px;
    width: 246px;
    .ab_hor_center();
}
.logo_en{
    .bg(@url: url("@{bgimgurl}index/home_logo_en.png") ; @size: auto; @repeat: no-repeat);
}
.logo_zh{
    .bg(@url: url("@{bgimgurl}index/home_logo_zh.png") ; @size: auto; @repeat: no-repeat);
}
.choose-box{
    width: 25%;
    height: 100%;
    position: relative;
    float: left;
    transition: width .15s ease-out;
}
.choose-center{
    margin: auto;  
    position: absolute;  
    top: 0; left: 0; bottom: 0; right: 0;  
    width: 320px;
    height: 460px;
}
.choose-skateimg{
    width: 320px;
    height: 390px;
}
.choose-skatename{
    Width: 118px;
    height: 44px;
    margin: 0 auto;
}
.choose-skateimg1{
  //  background: url('@{bgimgurl}/index')
}

</style>

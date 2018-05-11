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
      <div class="choose-box choose-box1"  @mouseenter="mouseIn(1)" @mouseleave="mouseOut(1)">
          <div class="choose-center">
                <div class="choose-skateimg choose-skateimg1"></div>
                <div class="choose-skatename choose-skatename1"></div>            
                <div class="choose-btn-box choose-btn-box1">
                    <div class="choose-btn" :class="[lang==='en-US'?'btn_en':'btn_zh']"></div>
                    HIGH CARBON
                </div>
          </div>
      </div>
      <div class="choose-box choose-box2"  @mouseenter="mouseIn(2)" @mouseleave="mouseOut(2)">
          <div class="choose-center">
                <div class="choose-skateimg choose-skateimg2"></div>
                <div class="choose-skatename choose-skatename2"></div>            
                <div class="choose-btn-box choose-btn-box2">
                    <div class="choose-btn" :class="[lang==='en-US'?'btn_en':'btn_zh']"></div>
                    TRIX
                </div>
          </div>
      </div>
      <div class="choose-box choose-box3"  @mouseenter="mouseIn(3)" @mouseleave="mouseOut(3)">
          <div class="choose-center">
                <div class="choose-skateimg choose-skateimg3"></div>
                <div class="choose-skatename choose-skatename3"></div>            
                <div class="choose-btn-box choose-btn-box3">
                    <div class="choose-btn" :class="[lang==='en-US'?'btn_en':'btn_zh']"></div>
                    IGOR
                </div>
          </div>
      </div>
      <div class="choose-box choose-box4" @mouseenter="mouseIn(4)" @mouseleave="mouseOut(4)">
          <div class="choose-center">
                <div class="choose-skateimg choose-skateimg4"></div>
                <div class="choose-skatename choose-skatename4"></div>            
                <div class="choose-btn-box choose-btn-box4">
                    <div class="choose-btn" :class="[lang==='en-US'?'btn_en':'btn_zh']"></div>
                    WFSC
                </div>
          </div>
      </div>
      <footer class="foot clrfix">
            <a href="http://www.sebaskates.com/">版权所有 Copyright © 2014 SEBASKATES - All Rights Reserved</a>
          <div class="homelinks">
              <a class="fb" href="https://www.facebook.com/SebaSkates" ></a>
              <a class="tw" href="https://twitter.com/sebaskates"></a>
              <a class="vim" href="https://vimeo.com/user5009810" ></a>
              <a class="ins" href="http://instagram.com/sebaskates"></a>
          </div>
      </footer>
  </div>
</template>


<script>
const NOMAL_WIDTH = "25%"
const HOVER_WIDTH = "30%"
const SMALL_WIDTH = "23.3%"
export default {
    data() {
        return {
            lang:'en-US'
        } 
    },
    created() {
        this.lang = this.$i18n.locale
    },
    methods: {
        changeLang(lang){
            if ( this.lang === lang ) return
            else {
                this.lang = lang
                this.$i18n.locale = this.lang
            } 
       },
       mouseIn(num){
           let arr = [1,2,3,4]
           arr.splice(num-1, 1)
           document.getElementsByClassName('choose-box')[num-1].style.width = HOVER_WIDTH  
           arr.forEach((i) => {
              document.getElementsByClassName('choose-box')[i-1].style.width = SMALL_WIDTH 
           } )
       },
       mouseOut(num){
             let arr = [1,2,3,4]
             arr.forEach((i) => {
                document.getElementsByClassName('choose-box')[i-1].style.width = NOMAL_WIDTH 
            } )
       }
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
    .bg(@url: url("@{bgimgurl}index/index_en/home_logo.png") ; @size: auto; @repeat: no-repeat);
}
.logo_zh{
    .bg(@url: url("@{bgimgurl}index/index_zh/home_logo.png") ; @size: auto; @repeat: no-repeat);
}
.choose-box{
    width: 25%;
    height: 100%;
    position: relative;
    float: left;
    transition: width .15s ease-out;
}
.choose-box:hover{
   // width: 30%;
    .bg(@url: url('@{bgimgurl}/index/home_sel_bg.png') ; @size: auto 100% ; @repeat: repeat-x); 
}
.choose-box1:hover .choose-skateimg1{
    background: url('@{bgimgurl}/index/sprite_home_ture_color.png') -320px 0 no-repeat;
}
.choose-box2:hover .choose-skateimg2{
    background: url('@{bgimgurl}/index/sprite_home_ture_color.png')  0 -390px no-repeat;
}
.choose-box3:hover .choose-skateimg3{
    background: url('@{bgimgurl}/index/sprite_home_ture_color.png') 0 0 no-repeat;
}
.choose-box4:hover .choose-skateimg4{
    background: url('@{bgimgurl}/index/sprite_home_ture_color.png') -320px -390px no-repeat;
}
.choose-box:hover .choose-skatename{
    display: none;
}
.choose-box:hover .choose-btn-box{
    display: block;
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
    transform: scale(0.83);
    Width: 118px;
    height: 44px;
    margin: 0 auto;
}
.choose-skateimg1{
    background: url('@{bgimgurl}/index/index_zh/sprite_home.png') 0 0 no-repeat;
}
.choose-skatename1{
    background: url('@{bgimgurl}/index/index_zh/sprite_home.png') -438px -390px no-repeat;
}
.choose-skateimg2{
    background: url('@{bgimgurl}/index/index_zh/sprite_home.png') -640px 0 no-repeat;
}
.choose-skatename2{
    background: url('@{bgimgurl}/index/index_zh/sprite_home.png') -320px -390px  no-repeat;
}
.choose-skateimg3{
    background: url('@{bgimgurl}/index/index_zh/sprite_home.png')  0 -390px no-repeat;
}
.choose-skatename3{
    background: url('@{bgimgurl}/index/index_zh/sprite_home.png') -674px -390px no-repeat;
}
.choose-skateimg4{
    background: url('@{bgimgurl}/index/index_zh/sprite_home.png') -320px 0  no-repeat;
}
.choose-skatename4{
    background: url('@{bgimgurl}/index/index_zh/sprite_home.png') -556px -390px no-repeat;
}
.choose-btn-box{
    display: none;
    text-align: center;
    font-size: 12px;
    color: @color;
    line-height: 40px;
}
.choose-btn{
    margin: 0 auto;
    height: 32px;
    width: 162px;
}

.btn_en{
    background: url('@{bgimgurl}/index/index_en/sprite_home.png') -320px -434px no-repeat; 
}
.btn_en:hover{
    background: url('@{bgimgurl}/index/index_en/sprite_home.png') -482px -434px no-repeat;
}
.btn_zh{
   background: url('@{bgimgurl}/index/index_zh/sprite_home.png') -320px -434px no-repeat;  
}
.btn_zh:hover{
    background: url('@{bgimgurl}/index/index_zh/sprite_home.png') -482px -434px no-repeat; 
}
.foot{
   position: absolute;
    bottom: 14px;
    height: 40px;
    text-align: center;
    width: 960px;
    left: 50%;
    margin-left: -480px;
    line-height: 40px;
}
.foot > div{display: inline-block; color: @color;}
.reserve {   
    font-size: 10px;
    -webkit-transform: scale(0.83); 
}
.reserve > a{ color: @color; }
.homelinks > a {
    display: inline-block;
    width: 40px;
    height: 40px;
}
.fb{background: url('@{bgimgurl}/index/index_zh/sprite_home.png') -792px -390px no-repeat;}
.tw{background: url('@{bgimgurl}/index/index_zh/sprite_home.png') -868px -390px no-repeat; }
.vim{background: url('@{bgimgurl}/index/index_zh/sprite_home.png') -830px -390px no-repeat; }
.ins{background: url('@{bgimgurl}/index/index_zh/sprite_home.png') -906px -390px  no-repeat; }
</style>

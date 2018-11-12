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
      <div class="choose-box choose-box1" @mouseenter="mouseIn(1)" @mouseleave="mouseOut(1)"  @touchstart.stop="mouseIn(1)" @touchend.stop="mouseOut(1)">
          <div class="choose-center">
                <div class="choose-skateimg choose-skateimg1"></div>
                <div class="choose-skatename choose-skatename1"></div>            
                <div class="choose-btn-box choose-btn-box1">
                    <div class="choose-btn" :class="[lang==='en-US'?'btn_en':'btn_zh']" @click="selectSkate(1)"></div>
                    HIGH CARBON
                </div>
          </div>
      </div>
      <div class="choose-box choose-box2"  @mouseenter="mouseIn(2)" @mouseleave="mouseOut(2)"  @touchstart.stop="mouseIn(2)" @touchend.stop="mouseOut(2)">
          <div class="choose-center">
                <div class="choose-skateimg choose-skateimg2"></div>
                <div class="choose-skatename choose-skatename2"></div>            
                <div class="choose-btn-box choose-btn-box2">
                    <div class="choose-btn" :class="[lang==='en-US'?'btn_en':'btn_zh']" @click="selectSkate(2)"></div>
                    TRIX
                </div>
          </div>
      </div>
      <div class="choose-box choose-box3"  @mouseenter="mouseIn(3)" @mouseleave="mouseOut(3)"  @touchstart.stop="mouseIn(3)" @touchend.stop="mouseOut(3)">
          <div class="choose-center">
                <div class="choose-skateimg choose-skateimg3"></div>
                <div class="choose-skatename choose-skatename3"></div>            
                <div class="choose-btn-box choose-btn-box3">
                    <div class="choose-btn" :class="[lang==='en-US'?'btn_en':'btn_zh']" @click="selectSkate(3)"></div>
                    SLIDE
                </div>
          </div>
      </div>
      <div class="choose-box choose-box4"  @mouseenter="mouseIn(4)" @mouseleave="mouseOut(4)"  @touchstart.stop="mouseIn(4)" @touchend.stop="mouseOut(4)">
          <div class="choose-center">
                <div class="choose-skateimg choose-skateimg4"></div>
                <div class="choose-skatename choose-skatename4"></div>            
                <div class="choose-btn-box choose-btn-box4">
                    <div class="choose-btn" :class="[lang==='en-US'?'btn_en':'btn_zh']" @click="selectSkate(4)"></div>
                    UFS SERIES
                </div>
          </div>
      </div>
      <footer class="foot clrfix">
          <div class="reserve">
            <a  href="http://www.sebaskates.com/">版权所有 Copyright © 2014 SEBASKATES - All Rights Reserved</a>
          </div>
          <div class="homelinks">
              <a class="fb" href="https://www.facebook.com/SebaSkates" ></a>
              <a class="tw" href="https://twitter.com/sebaskates"></a>
              <a class="vim" href="https://vimeo.com/user5009810" ></a>
              <a class="ins" href="http://instagram.com/sebaskates"></a>
          </div>
      </footer>
    <div id="preload"></div>
  </div>
</template>


<script>
const NOMAL_WIDTH = "25%"
const HOVER_WIDTH = "30%"
const SMALL_WIDTH = "23.3%"
import { initShoe } from '@/config/createShoe'
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
           if( document.getElementsByClassName('choose-box')[num-1].style.width === HOVER_WIDTH) return
           let arr = [1,2,3,4]
           arr.splice(num-1, 1)
           document.getElementsByClassName('choose-box')[num-1].style.width = HOVER_WIDTH  
           arr.forEach((i) => {
              document.getElementsByClassName('choose-box')[i-1].style.width = SMALL_WIDTH 
            })
       },
       mouseOut(num){
             let arr = [1,2,3,4]
             arr.forEach((i) => {
                document.getElementsByClassName('choose-box')[i-1].style.width = NOMAL_WIDTH 
            } )
       },
       selectSkate(id){
            this.$bus.shoe = initShoe(id)
            this.$router.push({ path: `/rollerskate/edit`})
          //  console.log(this.$bus.shoe)
       }
    }
}
</script>



<style lang="less" scoped>
@import url('../../common/less/variable.less');
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
    background: url("@{bgimgurl}index/home_bg.png") repeat-x;
    background-size: auto 100%;
    overflow: hidden;
}
.head{
    color: #ffffff;
    .ab_hor_center();
    top: 30px;
    z-index: 100;
    width: 1060px;
    font-size: 12px;
    height: 62px;
    text-align: center;
    overflow: hidden;
}
.fl > a{color: #ffffff;}
.logo{
    height: 60px;
    width: 264px;
    .ab_hor_center();
}
.logo_en{
    background: url("@{bgimgurl}index/index_en/home_logo.png") no-repeat;
}
.logo_zh{
    background: url("@{bgimgurl}index/index_zh/home_logo.png") no-repeat;
}
.choose-box{
    width: 25%;
    height: 100%;
    position: relative;
    float: left;
    transition: width .15s ease-out;
}
.choose-box:hover{
    background: url('@{bgimgurl}/index/home_sel_bg.png') repeat-x;
    background-size: auto 100%;
}
.choose-box1:hover .choose-skateimg1{
    background: url('@{bgimgurl}/index/sprite_skates_nor.png') -10px -10px no-repeat;
}
.choose-box2:hover .choose-skateimg2{
    background: url('@{bgimgurl}/index/sprite_skates_nor.png') -350px -10px no-repeat;
}
.choose-box3:hover .choose-skateimg3{
    background: url('@{bgimgurl}/index/sprite_skates_nor.png') -690px -10px  no-repeat;
}
.choose-box4:hover .choose-skateimg4{
    background: url('@{bgimgurl}/index/sprite_skates_nor.png') -1030px -10px no-repeat;
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
    background: url('@{bgimgurl}/index/sprite_skates_pre.png') -10px -10px no-repeat;
}
.choose-skatename1{
    background: url('@{bgimgurl}/index/home_logo_shd.png') 0 0 no-repeat;
}
.choose-skateimg2{
    background: url('@{bgimgurl}/index/sprite_skates_pre.png') -350px -10px no-repeat;
}
.choose-skatename2{
    background: url('@{bgimgurl}/index/home_logo_trix.png') 0 0  no-repeat;
}
.choose-skateimg3{
    background: url('@{bgimgurl}/index/sprite_skates_pre.png') -690px -10px  no-repeat;
}
.choose-skatename3{
    background: url('@{bgimgurl}/index/home_logo_slide.png') 0 0 no-repeat;
}
.choose-skateimg4{
    background: url('@{bgimgurl}/index/sprite_skates_pre.png') -1030px -10px no-repeat;
}
.choose-skatename4{
    background: url('@{bgimgurl}/index/home_logo_ufs_series.png') 0 0 no-repeat;
}
.choose-btn-box{
    display: none;
    text-align: center;
    font-size: 12px;
    color: #ffffff;
    line-height: 40px;
}
.choose-btn{
    cursor: pointer;
    margin: 0 auto;
    height: 32px;
    width: 162px;
}

.btn_en{
    background: url('@{bgimgurl}/index/index_en/btn_choose_pre.png') 0 0 no-repeat; 
}
.btn_en:hover{
    background: url('@{bgimgurl}/index/index_en/btn_choose_nor.png') 0 0  no-repeat;
}
.btn_zh{
   background: url('@{bgimgurl}/index/index_zh/btn_choose_pre.png') 0 0  no-repeat;  
}
.btn_zh:hover{
    background: url('@{bgimgurl}/index/index_zh/btn_choose_nor.png') 0 0  no-repeat; 
}
.foot{
   position: absolute;
    bottom: 14px;
    height: 40px;
    text-align: center;
    width: 960px;
    left: 50%;
    margin-left: -480px;
}
.foot > div{
    display: inline-block;
    vertical-align: middle;
 }
.reserve { 
   .smallFontSize();
}
.reserve > a{
    color: #ffffff;  
    line-height: 40px; 
}
.homelinks > a {
    display: inline-block;
    width: 40px;
    height: 40px;
}
.fb{background: url('@{bgimgurl}/index/home_ico_1.png') 0 0 no-repeat;}
.tw{background: url('@{bgimgurl}/index/home_ico_2.png') 0 0 no-repeat; }
.vim{background: url('@{bgimgurl}/index/home_ico_3.png') 0 0 no-repeat; }
.ins{background: url('@{bgimgurl}/index/home_ico_4.png') 0 0 no-repeat; }
#preload{
    display: none;
    background: url('@{bgimgurl}/common/common_parts_bg.png');
}
</style>

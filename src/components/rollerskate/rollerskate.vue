<template>
    <div class="rollerskate">
        <header class="head">
            <div class="contain clrfix">
                <router-link to="/index" class="logo fl">
                    <img src="../../common/img/common/logo.png">
                </router-link>
                <div class="nav-edit clrfix"> 
                    <li :class="'nav-item nav-item-1 '+(id===1?'nav-item-1-active':'')"  @click="selectSkate(1)"></li>
                    <li :class="'nav-item nav-item-2 '+(id===2?'nav-item-2-active':'')" @click="selectSkate(2)"></li>
                    <li :class="'nav-item nav-item-3 '+(id===3?'nav-item-3-active':'')" @click="selectSkate(3)"></li>
                    <li :class="'nav-item nav-item-4 '+(id===4?'nav-item-4-active':'')" @click="selectSkate(4)"></li>
                </div>
                <div class="lang fr">
                    <a @click="changeLang('zh-CN')">中文</a>
                    |
                    <a @click="changeLang('en-US')">ENG</a>
                </div>
            </div>
        </header>
        <router-view></router-view>
        <footer div class="foot">
            <div class="contain clrfix">
                <div class="reserve fl">版权所有 Copyright © 2014 SEBASKATES - All Rights Reserved</div>
                <div class="foot-links fl">
                    <a class="fb" href="https://www.facebook.com/SebaSkates" ></a>
                    <a class="tw" href="https://twitter.com/sebaskates"></a>
                    <a class="vim" href="https://vimeo.com/user5009810" ></a>
                    <a class="ins" href="http://instagram.com/sebaskates"></a>
                </div>
                 <div class="aboutus fr">
                    <a href="http://www.sebaskates.com/en/sebaskates.php" >{{$t('m.about')}}</a>
                    |
                    <a href="http://www.sebaskates.com/en/contact.php">{{$t('m.contact')}}</a>
                    <img src="../../common/img/common/common_bottom_logo.png">
                </div>
            </div> 
        </footer>
        <div class="fix-btn">
            <a class="contact-mail" href="http://www.sebaskates.com/en/contact.php"></a>
            <a class="print" href="javascript:window.print();"></a>
        </div>
    </div>
</template>


<script>
const IMGPATH = '../../common/img/common'
import { initShoe } from '@/config/createShoe'
export default {
  data() {
        return {
            lang:'en-US',
            id: 1
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
        selectSkate(id){
            this.id = id
            this.$bus.shoe = initShoe(id)
            console.log(this.$bus.shoe)
        }

  }
}
</script>


<style lang="less" scoped>
@import url('../../common/less/base.less');
@middlewidth: 1080px;
@bordercolor: #c2282c;
.rollerskate{
    height: 100%;
    min-width: 1200px;
}
.head{
    background: #000;
    height: 82px;
    border-bottom: @bordercolor solid 1px;
    color: #fff;
}
.contain{
    width: @middlewidth;
    height: 100%;
    margin: 0 auto;
    position: relative;
}
.logo{
    width: 200px;
    height: 25px;
    margin-top: 30px;
}
.lang{
    line-height: 82px;
    font-size: 10px;
}
.lang > a{
    color: #fff;
    text-decoration: none;
    padding: 0 15px; 
 }
.nav-edit{
    width: 580px;
    margin-left: 80px;
    margin-right: 0;
    padding: 0;
    display: inline-block;
}
.nav-item{
    width: 140px;
    height: 82px;
    display: inline-block;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    cursor: pointer;
}
.nav-item-1{
    background: url("@{bgimgurl}/common/common_head_1_nor.png");
}
.nav-item-1-active{
    background: url("@{bgimgurl}/common/common_head_1.png");
}
.nav-item-2{
    background: url("@{bgimgurl}/common/common_head_2_nor.png");
}
.nav-item-2-active{
    background: url("@{bgimgurl}/common/common_head_2.png");
} 
.nav-item-3{
    background: url("@{bgimgurl}/common/common_head_3_nor.png");
}
.nav-item-3-active{
    background: url("@{bgimgurl}/common/common_head_3.png");
} 
.nav-item-4{
    background: url("@{bgimgurl}/common/common_head_4_nor.png");
}
.nav-item-4-active{
    background: url("@{bgimgurl}/common/common_head_4.png");
} 
.foot{
    background: #fff;
    border-top: @bordercolor solid 1px;
    height: 69px;
    color: @ligtcolor;
}
.reserve{
  .smallFontSize();
   padding-top: 28px;
}
.foot-links{
   position: absolute;
   left: 366px;
   margin-top: 15px;

}
.foot-links > a {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
}
.fb{background: url('@{bgimgurl}/common/common_bottom_ico_1.png');}
.tw{background: url('@{bgimgurl}/common/common_bottom_ico_2.png')}
.vim{background: url('@{bgimgurl}/common/common_bottom_ico_3.png') }
.ins{background: url('@{bgimgurl}/common/common_bottom_ico_4.png')}
.aboutus{
    margin-top: 26px;
}
.aboutus > a{
    color: @ligtcolor;
    .smallFontSize();
    padding: 0 15px; 
}
.fix-btn{
    position: fixed;
    top: 50%;
    right: 0;
    height: 90px;
    width: 40px;
    margin-top: -50px;
}
.fix-btn > a{
    height: 40px;
    width: 40px;
    display: block; 
}
.contact-mail{
    background: url('@{bgimgurl}/common/common_btn_mail_nor.png');
}
.print{
    background: url('@{bgimgurl}/common/common_btn_print_nor.png');
}
.contact-mail:hover{
    background: url('@{bgimgurl}/common/common_btn_mail_pre.png');
}
.print:hover{
    background: url('@{bgimgurl}/common/common_btn_print_pre.png');
}
</style>

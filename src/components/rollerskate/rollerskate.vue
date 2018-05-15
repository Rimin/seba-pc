<template>
    <div class="rollerskate">
        <header class="head">
            <div class="head-contain clrfix">
                <router-link to="/index" class="logo fl">
                    <img src="../../common/img/common/logo.png">
                </router-link>
                <div class="nav-edit clrfix"> 
                    <li class="nav-item nav-item-high"></li>
                    <li class="nav-item nav-item-rix"></li>
                    <li class="nav-item nav-item-igor"></li>
                    <li class="nav-item nav-item-wfsc"></li>
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

        </footer>
    </div>
</template>


<script>
export default {
  created () {
     // console.log(this.$bus.style)
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
.head-contain{
    width: 1080px;
    margin: 0 auto;
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
.fl{float: left; }
.fr{float: right;}
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
.nav-item-high{
    background: url("@{bgimgurl}/common/common_head_shd_nor.png");
}
.nav-item-rix{
    background: url("@{bgimgurl}/common/common_head_trix_nor.png");
}
.nav-item-igor{
    background: url("@{bgimgurl}/common/common_head_igor_nor.png");
}
.nav-item-wfsc{
    background: url("@{bgimgurl}/common/common_head_wfsc_nor.png");
}
.foot{
    background: #fff;
    border-top: @bordercolor solid 1px;
    height: 69px;
    color: @ligtcolor; 
}

</style>

<template>
  <div class="personal-inf-wrap">
    <h1 class="title-1">
      <i class="title-icon"></i>
      {{$t('m.Personal_Information.Title')}}
    </h1>
    <div>
      <div class="row">
        <label :title="$t('m.Personal_Information.First_Name')">{{$t('m.Personal_Information.First_Name')}}</label>
        <input style="width:186px" type="text" v-model="firstName">
        <label :title="$t('m.Personal_Information.Last_Name')" style="width:100px">{{$t('m.Personal_Information.Last_Name')}}</label>
        <input style="width:185px" type="text" v-model="lastName">
      </div>
      <div class="row">
        <label :title="$t('m.Personal_Information.Phone_Number')">{{$t('m.Personal_Information.Phone_Number')}}</label>
        <input style="width:114px" type="text" v-model="phone">
        <label :title="$t('m.Personal_Information.Email')" style="width:50px">{{$t('m.Personal_Information.Email')}}</label>
        <input style="width:112px" type="text" v-model="email">
        <label :title="$t('m.Personal_Information.Post_Code')" style="width:80px; font-size: 13px;">{{$t('m.Personal_Information.Post_Code')}}</label>
        <input style="width:107px" type="text" v-model="postCode">
      </div>
      <div class="row">
        <label :title="$t('m.Personal_Information.Address')">{{$t('m.Personal_Information.Address')}}</label>
        <input style="width:479px" type="text" v-model="address">
      </div>
      <div class="row">
        <label :title="$t('m.Personal_Information.SEBA_Store')" style="font-size: 13px;">{{$t('m.Personal_Information.SEBA_Store')}}</label>
        <input style="width:227px" type="text" v-model="SEBA_STORE_NAME">
        <input style="width:248px" type="text" v-model="SEBA_STORE_ADDRESS">
      </div>
      <div class="area-box" @click="selectArea">
        <label :title="$t('m.Personal_Information.Your_Area')">{{$t('m.Personal_Information.Your_Area')}}</label>
        <span :class="'area-item ' + (areaId === item.id?'active':'')" 
          v-for="(item,i) in areaList" 
          :key="i"
          :area-id="item.id"
          :title="lang === 'en-US'?item.enName:item.zhName"
        ><span>{{lang === 'en-US'?item.enName:item.zhName}}</span></span>
      </div>
    </div>
  </div>
</template>

<script>
import { getArea } from '@/config/area'
import { PersonalMessage } from '@/config/PersonalMessage'

export default {
  data(){
    return {
      areaList: [],
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      postCode: '',
      address: '',
      SEBA_STORE_NAME: '',
      SEBA_STORE_ADDRESS: '',
      areaId: 1,
    }
  },
  computed:{
    lang(){
      return this.$i18n.locale
    },
  },
  watch: {
    firstName(v){
      this.$bus.personalMessage.firstName = v
    },
    lastName(v){
      this.$bus.personalMessage.lastName = v
    },
    phone(v){
      this.$bus.personalMessage.phone = v
    },
    email(v){
      this.$bus.personalMessage.email = v
    },
    postCode(v){
      this.$bus.personalMessage.postCode = v
    },
    address(v){
      this.$bus.personalMessage.address = v
    },
    SEBA_STORE_NAME(v){
      this.$bus.personalMessage.SEBA_STORE_NAME = v
    },
    SEBA_STORE_ADDRESS(v){
      this.$bus.personalMessage.SEBA_STORE_ADDRESS = v
    },
    areaId(v){
      this.$bus.personalMessage.areaId = v
    }
  },
  created(){
    // console.log(this.$bus.personalMessage)
    this.init()
  },
  methods: {
    init(){
      var ms = this.$bus.personalMessage
      if(!ms) this.$bus.personalMessage = new PersonalMessage()
      else {
        this.firstName = ms.firstName
        this.lastName = ms.lastName
        this.phone = ms.phone
        this.email = ms.email
        this.postCode = ms.postCode
        this.address = ms.address
        this.SEBA_STORE_NAME = ms.SEBA_STORE_NAME
        this.SEBA_STORE_ADDRESS = ms.SEBA_STORE_ADDRESS
        this.areaId = ms.areaId || 1
      }
      this.areaList = getArea()
    },
    selectArea(e){
      var t = this
      //console.log(e)
      e = e.target
      while(e){
        if(/area-item/g.test(e.className)){
          var index = e.getAttribute('area-id') - ''
          //console.log(index)
          if(index!==t.areaId){
            //console.log(true)
            t.areaId = index
          }
          break
        }
        e = e.parentNode
      }
    }
  }
}
</script>

<style lang="less" scoped>
@BaseUrl: '../../../static/selectMaterial';
@BorderDefaultColor: rgb(213, 213, 213);
@BorderActiveColor: rgba(255, 0, 0, 0.5);
@DefaultBorder: 1px @BorderDefaultColor solid;
@ActiveBorder: 1px solid @BorderActiveColor;

.personal-inf-wrap {
  width: 100%;
  padding: 30px 0 0 0;
  position: relative;
  &>div {
    width: 100%;
    // border: @DefaultBorder;
  }
}

.title-1 {
  font-size: 17px;
  font-weight: 100;
  color: black;
  padding-left: 72px;
  position: absolute;
  top: 0;
  left: 0;
}

.title-icon {
  height: 14px;
  width: 9px;
  margin-right: 5px;
  display: inline-block;
  background: url("@{BaseUrl}/title_icon.png") 50% 50% no-repeat;
}

div.row {
  width: 100%;
  height: 26px;
  margin: 2px 0;
  color: black;
  &>input {
    height: 100%;
    min-width: 50px;
    display: inline-block;
    font-size: 15px;
    border: @DefaultBorder;
    padding: 2px 3px;
    transition: 200ms;
    background-color: rgb(243, 243, 243);
    &:focus {
      border: @ActiveBorder;
    }
  }
  &>label {
    display: inline-block;
    text-align: right;
    font-size: 14px;
    min-width: 50px; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    &:first-child {
      width: 150px;
    }
  }
}
.area-box {
  color: black;
  margin-top: 5px;
  &>label {
    display: inline-block;
    width: 150px;
    text-align: right;
    height: 40px;
    padding-right: 10px;
  }
  &>span {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    border: @DefaultBorder;
    transition: 200ms;
    font-size: 13px;
    margin: 0 5px 5px 0;
    vertical-align: middle;
    &>span {
      display: inline-block;
      vertical-align: middle;
    }
    &::after {
      content: '';
      display: inline-block;
      height: 100%;
      width: 0;
      vertical-align: middle;
      zoom: 1;
    }
    cursor: pointer;
    &:hover {
      border: @ActiveBorder;
      background-color: rgb(238, 3, 3);
      color: white;
    }
    &.active {
      border: @ActiveBorder;
      background-color: rgb(238, 0, 0);
      color: white;
    }
  }
}
</style>

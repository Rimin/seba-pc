<template>
  <div class="special-request">
    <label>{{$t('m.Personal_Information.Special_Requests')}}</label>
    <textarea></textarea>
    <div class="btn">{{$t('m.Upload_Images')}}</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
@BaseUrl: '../../../static/selectMaterial';
@BorderDefaultColor: rgb(213, 213, 213);
@BorderActiveColor: rgba(255, 0, 0, 0.7);
@DefaultBorder: 1px @BorderDefaultColor solid;
@ActiveBorder: 1px solid @BorderActiveColor;
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
    padding: 5px;
    cursor: pointer;
    color: white;
    background: #d62329;
    border-radius: 4px;
    &:hover {
      background: #bd1e23;
    }
  }
}
</style>


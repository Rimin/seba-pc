<template>
  <div class="edit mainbg">
    <div class="edit-tab headbg">
      <div class="content">
        <select-part></select-part>
      </div>
    </div>
    <div class="edit-main main clrfix">
      <div class="contain clrfix">
        <div class="show-area fl">
          <show-shoe :edit="editshow"></show-shoe>
        </div>
        <div class="eidit-side fr">
          <div class="material-pick">
            <select-material></select-material>
          </div>
          <div class="personal-edit"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import SelectPart from '@/components/selectPart/selectPart'
import ShowShoe from '@/components/showShoe/showShoe'
import SelectMaterial from '@/components/selectMaterial/selectMaterial'
export default {
  components: {
    SelectPart,
    ShowShoe,
    SelectMaterial
  },
  created() {
    // console.log(this.$bus.shoe)
  },
  data() {
    return {
      editshow: true
    }
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
@import url('../../common/less/base.less');
@import url('../../common/less/common.less');
.edit-main{
  width: 1140px;
  height: 653px;
   
}
.content {
  width: 1080px;
  height: 150px;
  margin: 0 auto;
  position: relative;
}
.contain{
  width: 1080px;
  margin: 0 auto;
  position: relative;
}
.show-area{
  margin-top: 26px;
  width: 636px;
  height: 588px;
  border: #e5e5e5 solid 1px;
  position: relative;
  overflow: hidden; 
}
.eidit-side{
  margin: 26px 0;
  width: 410px;
  height: 588px; // 后面去掉
}
.material-pick{
  width: 100%;
  height: 50%;
}
.personal-edit{
  width: 100%;
  height: 40%;
}
</style>
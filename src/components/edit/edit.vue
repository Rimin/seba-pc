<template>
  <div class="edit mainbg">
    <div class="edit-tab headbg">
      <div class="content">
        <select-part></select-part>
      </div>
    </div>
    <div class="edit-main main">
      <div class="content">
        <router-link to="/rollerskate/order">lalala</router-link>
      </div>
    </div>
  </div>
</template>


<script>
import SelectPart from '@/components/selectPart/selectPart'

export default {
  components: {
    SelectPart
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



</style>
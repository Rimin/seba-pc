<template>
  <div style="color:#ffffff">hahaha
    <router-link to="/rollerskate">edit</router-link>
    <router-link to="/rollerskate/order">order</router-link>
   <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>

</style>

<script>
export default {
  created () {
      console.log(this.$bus.style)
  }
}
</script>

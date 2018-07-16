<template>
  <div class="select">
    <span class="last-btn"></span>
    <div class="selectList">
      <ul>
        <li></li>
      </ul>
    </div>
    <span class="next-btn"></span>
  </div>
</template>

<script>
import { initShoe } from '@/config/createShoe'

export default {
  data(){
    return {
      shoe1: initShoe(1),
      shoe2: null,
    }
  },
  created(){
    console.log(this.shoe1,this.shoe2);
    this.shoe1.a.shoeStyle.name = '2333';
    this.shoe2 = initShoe(1)
    console.log(this.shoe2)
  },
  // mounted(){
  //   var t = this;
  //   setTimeout(()=>{
  //     console.log(t.shoe)
  //   },200)
  // }
} 
</script>

<style lang="less" scoped>

</style>


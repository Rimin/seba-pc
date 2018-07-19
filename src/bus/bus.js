import Vue from 'vue'
const bus = new Vue({
  data () {
    return {
      shoe: {},
      nowheel: false,
      curSelectPart: 'a',
      material: 0,
      embroidery: [],
      angle: 'side',
      hasChange: true
    }
  },
  watch: {},
  methods: {

  }
})
export default bus

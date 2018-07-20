import Vue from 'vue'
import { PersonalMessage } from '@/config/PersonalMessage'
const bus = new Vue({
  data () {
    return {
      shoe: {},
      nowheel: false,
      curSelectPart: 'a',
      material: 0,
      angle: 'side',
      hasChange: true,
      personalMessage: {}
    }
  },
  watch: {},
  created () {
    this.personalMessage = new PersonalMessage()
  },
  methods: {

  }
})
export default bus

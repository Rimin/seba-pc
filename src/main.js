// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import bus from './bus/bus'
import 'common/less/base.less'

Vue.config.productionTip = false

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en-US', // this.$i18n.locale
  messages: {
    'zh-CN': require('./common/lang/zh'),
    'en-US': require('./common/lang/en')
  }
})

Vue.prototype.$bus = bus

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})

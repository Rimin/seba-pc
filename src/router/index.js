import Vue from 'vue'
import Router from 'vue-router'
// import { resolve } from 'url'

Vue.use(Router)

const Seba = (resolve) => {
  import('commponents/seba/seba').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/seba'
    },
    {
      path: '/seba',
      component: Seba
    }
  ]
})

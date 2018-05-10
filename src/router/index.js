import Vue from 'vue'
import Router from 'vue-router'
// import { resolve } from 'url'

Vue.use(Router)

const Index = (resolve) => {
  import('components/index/index').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
// import { resolve } from 'url'

Vue.use(Router)

const Index = (resolve) => {
  import('components/index/index').then((module) => {
    resolve(module)
  })
}
const RollerSkate = (resolve) => {
  import('components/rollerskate/rollerskate').then((module) => {
    resolve(module)
  })
}

const Edit = (resolve) => {
  import('components/edit/edit').then((module) => {
    resolve(module)
  })
}
const Order = (resolve) => {
  import('components/order/order').then((module) => {
    resolve(module)
  })
}

const router = new Router({
// mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/rollerskate',
      redirect: '/rollerskate/edit'
    },
    {
      path: '/rollerskate',
      component: RollerSkate,
      alias: '/rollerskate',
      children: [
        {
          path: 'edit',
          component: Edit,
          alias: '/edit'
        },
        {
          name: 'order',
          path: 'order',
          component: Order
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/rollerskate/order' || to.path === '/rollerskate/edit' || to.path === '/rollerskate') {
  // console.log(from.path)
    if (from.path === '/') next('/index')
    else next()
  } else next()
})
export default router

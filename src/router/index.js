import Vue from 'vue'
import Router from 'vue-router'
// 引入路由内容
import Routes from './routes.js'
// import box from '@/page/content/box.vue'
Vue.use(Router)

// export default new Router({
//   routes: Routes
//   // mode: 'history'
//   // routes: [
//   //   {
//   //     name: 'box',
//   //     path: '/box',
//   //     component: box
//   //   }
//   // ]
// })
const router = new Router({
  routes: Routes
  // mode: 'history'
  // routes: [
  //   {
  //     name: 'box',
  //     path: '/box',
  //     component: box
  //   }
  // ]
})
router.beforeEach((to, from, next) => {
  console.log('111111111111111')
  console.log(to)
  console.log(from)
  console.log(next)
  console.log('111111111111111')
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('resolve')
  console.log(to)
  console.log(from)
  console.log(next)
  console.log('resolve')
  next()
})
router.afterEach((to, from) => {
  console.log('afterEach')
  console.log(to)
  console.log(from)
  console.log('afterEach')
})
export default router

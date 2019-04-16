import Vue from 'vue'
import Router from 'vue-router'
// 引入路由内容
import Routes from './routes.js'
// import box from '@/page/content/box.vue'
Vue.use(Router)

export default new Router({
  routes: Routes,
  // mode: 'history'
  // routes: [
  //   {
  //     name: 'box',
  //     path: '/box',
  //     component: box
  //   }
  // ]
})

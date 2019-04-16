// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入element-ui框架
import ElementUI from 'element-ui'
// 引入element-ui的css样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入css样式重置
import '@/assets/css/normail.css'
// 引入自定义清除默认样式
import '@/assets/css/index.css'
// vuex依赖es6-peomise，在此之前引入
import 'es6-promise/auto'
// 引入vuex
import Vuex from 'vuex'
import App from './App'
import router from './router'
// 引入vuexstore仓库
import Store from './store/index'
Vue.use(ElementUI)
// 全局调用vuex
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Store,
  components: { App },
  template: '<App/>'
})

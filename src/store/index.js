import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 创建vuex实例对象
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
// 通过commit方法触发状态变更
store.commit('increment')
console.log(store.state.count)

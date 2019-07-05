import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
// import { resolve } from 'path';

Vue.use(Vuex)
// 创建vuex实例对象
const store = new Vuex.Store({
  state: {
    // count: 0,
    // ...user
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  getters: {
    newCount(state) {
      console.log(state.count)
      return state.count + 9
    },
    newCount1(state) {
      return (id) => {
        return state.count1 + id
      }
    },
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    incrementAsync(context) {
      console.log(context)
    },
    actionA({ commit }) {
      return new Promise((resolve, reject) => {
        if (false) {

          commit('increment')
          resolve()
        } else {
          reject()
        }
      })
    },
    add({commit}) {
      console.log(1)
      commit('increment')
    }
  },
  modules: {
    user
  }
})
// 通过commit方法触发状态变更
// store.commit('increment')
// console.log(store.state.count)
// 分发cations
store.dispatch('actionA').then((res) => {
  console.log(1)
}).catch(() => {
  console.log(2)
})
export default store

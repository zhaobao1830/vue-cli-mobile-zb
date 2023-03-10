import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
// createLogger的作用是：我们每次修改store里面的数据时，会在控制台打印，搞事修改之前是什么样，修改后是什么样
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// 开发环境为true
const debug = process.env.NODE_ENV !== 'production'

// TODO: 处理持久化
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({ // eslint-disable-line
    userInfo: state.userInfo
  })
})

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [vuexLocal.plugin, createLogger()] : [vuexLocal.plugin]
})

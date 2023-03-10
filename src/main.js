import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局样式文件
import '@/assets/scss/index.scss'

import {
  Button
} from 'vant'

Vue.config.productionTip = false

Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

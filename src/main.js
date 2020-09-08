import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueLazyLoad from 'vue-lazyload'

import $ from 'jquery'
import './assets/bootstrap-3.3.7-dist/css/bootstrap.css'
import './assets/bootstrap-3.3.7-dist/js/bootstrap.js'
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// 计算购买总量需要的钱——创建新对象
Vue.prototype.$buy = new Vue()

// 解决

// 使用懒加载插件
Vue.use(VueLazyLoad, {
  loading: require('@/assets/img/home/loading.jpg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

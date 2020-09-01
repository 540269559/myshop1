import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import './assets/bootstrap-3.3.7-dist/css/bootstrap.css'
import './assets/bootstrap-3.3.7-dist/js/bootstrap.js'
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

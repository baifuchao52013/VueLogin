// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import $ from 'jquery'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios;
/*axios.defaults.headers.common['token'] = "";*/
axios.defaults.headers.post["Content-type"] = "application/json"
import store from './store/store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

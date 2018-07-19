import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../views/LoginView'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/login",
      component:LoginPage
    }
  ],
  mode:"history"

})

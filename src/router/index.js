import Vue from 'vue'
import Router from 'vue-router'
import AccountManager from '@/components/AccountManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AccountManager',
      component: AccountManager
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Periscope from '@/components/Periscope'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Periscope',
      component: Periscope
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Periscope from '@/components/periscope/Periscope'
import CreatePost from '@/components/posts/CreatePost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Periscope',
      component: Periscope
    },
    {
      path: '/newpost',
      name: 'CreatePost',
      component: CreatePost
    }
  ]
})

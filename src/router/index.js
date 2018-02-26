import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import about from '@/views/about'
import response from '@/components/response'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/about',
      component:about
    },
    {
      path:'/response',
      component:response
    }
  ]
})

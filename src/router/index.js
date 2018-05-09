import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

import about from '@/views/about'
import list from '@/views/list'
import work from '@/views/works'
import contact from '@/views/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path:'/list',
          component:list
        },
        {
          path:'/work',
          component:work
        },
        {
          path:'/about',
          component:about
        },

        {
          path:'/contact',
          component:contact
        }
      ]
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'

import about from '@/pages/about'
import list from '@/pages/list'
import work from '@/pages/works'
import contact from '@/pages/contact'

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

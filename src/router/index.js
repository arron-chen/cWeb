import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index', component: () => import('@/pages/index'), // 异步组件 代码分割或惰性加载，有助于减少浏览器在初始渲染中下载的资源体积
      children: [
        {path: '/list', component: () => import('@/pages/list')},
        {path: '/work', component: () => import('@/pages/works')},
        {path: '/about', component: () => import('@/pages/about')},
        {path: '/contact', component: () => import('@/pages/contact')}
      ]
    },
    {path: '*', redirect: '/'}
  ]
})

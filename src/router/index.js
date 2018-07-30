import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'

import Home from '@/components/home/home'
import Tab from '@/components/tab/tabComponent'
import Demo from '@/components/demo/demo'
import Detail from '@/components/detail/detail'
import QrCode from '@/components/qrCode/qrCode'
import My from '@/components/my/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/tab',
          name: 'tab',
          component: Tab
        },
        {
          path: '/demo',
          name: 'demo',
          component: Demo
        },
        {
          path: '/detail',
          name: 'detail',
          component: Detail
        },
        {
          path: '/qrCode',
          name: 'QrCode',
          component: QrCode
        },
        {
          path: '/my',
          name: 'my',
          component: My
        },
      ]
    },

  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//第一种
// import Index from '@/components/index'
// import Home from '@/components/home/home'
// import Tab from '@/components/tab/tabComponent'
// import Demo from '@/components/demo/demo'
// import Detail from '@/components/detail/detail'
// import QrCode from '@/components/qrCode/qrCode'
// import My from '@/components/my/my'


//第二种（不建议）
// const Index = r => require.ensure([], () => r(require('@/components/index')), 'index')
// const Home = r => require.ensure([], () => r(require('@/components/home/home')), 'home')
// const Tab = r => require.ensure([], () => r(require('@/components/tab/tabComponent')), 'tabComponent')
// const Demo = r => require.ensure([], () => r(require('@/components/demo/demo')), 'demo')
// const Detail = r => require.ensure([], () => r(require('@/components/detail/detail')), 'detail')
// const QrCode = r => require.ensure([], () => r(require('@/components/qrCode/qrCode')), 'qrCode')
// const My = r => require.ensure([], () => r(require('@/components/my/myHome')), 'my')

//第三种路由懒加载
const Index = () => import("@/components/index");
const Home = () => import("@/components/home/home");
const Tab = () => import("@/components/tab/tabComponent");
const Demo = () => import("@/components/demo/demo");
const Detail = () => import("@/components/detail/detail");
const QrCode = () => import("@/components/qrCode/qrCode");
const My = () => import("@/components/my/myHome");
const Print = () => import("@/components/print/print")
const Download = () => import("@/components/downloadImg/download")
const Pdf = () => import("@/components/print/pdf")
//

Vue.use(Router)

export default new Router({
  //如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
  mode: 'history',
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
        {
          path: '/print',
          name: 'print',
          component: Print
        },
        {
          path: '/download',
          name: 'download',
          component: Download
        },
        {
          path: '/pdf',
          name: 'pdf',
          component: Pdf
        },
      ]
    },

  ]
})

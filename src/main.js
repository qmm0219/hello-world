// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store'
import axios from 'axios'
//引入pdf文件(全局引入，直接在需要打印的页面调用getPdf()方法即可)
//import htmlToPdf from '@/assets/js/htmlToPdf'
//Vue.use(htmlToPdf)

Vue.use(ElementUI)
Vue.prototype.$http= axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})

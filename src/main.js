import Vue from 'vue'
import router from './router/index.js'
import axios from 'axios'
import App from './App.vue'

//定义固定路径
axios.defaults.baseURL='http://localhost:3002'
//在vue的原型中添加axios
Vue.prototype.$http = axios


//引入bootstrap样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//引入css样式文件
import './assets/css/index.css'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

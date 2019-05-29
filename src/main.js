import Vue from 'vue'
import router from './router/index.js'
import App from './App.vue'


//引入bootstrap样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//引入css样式文件
import './assets/css/index.css'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

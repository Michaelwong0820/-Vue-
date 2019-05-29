//封装路由
import Vue from 'vue'

//引入vue-router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//创建组件选项
import Heroslist from '../components/herosList.vue'
import Foo from '../components/foo.vue'
import Bar from '../components/bar.vue'
import Add from '../components/herosAdd.vue'
import Edit from '../components/herosEdit.vue'

//设置路由选项
var routes = [
    {path:'/heroslist',component:Heroslist},
    {path:'/foo',component:Foo},
    {path:'/bar',component:Bar},
    {path:'/add',component:Add},
    {path:'/edit/:id',component:Edit}
  
  ]

  
//设置路由对象
var router = new VueRouter({
    routes
  })

  //暴露路由
export default router
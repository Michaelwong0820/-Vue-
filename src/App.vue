<template>
  <div id="app">
    <Nav></Nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <Aside></Aside>
        </div>
       <!-- 渲染容器 -->
       <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/layout/nav.vue'
import Aside from './components/layout/aside.vue'
export default {
  components:{
    Nav,
    Aside
  }
};
</script>

<style>
</style>
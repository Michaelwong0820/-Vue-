<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Hero List</h2>
    <router-link class="btn btn-success" to="/add">Add</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <router-link :to="'/edit/'+item.id">edit</router-link>
              &nbsp;&nbsp;
              <a href="javascript:void(0)" @click="del(item.id)">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data:function(){
        return {
            url:'http://localhost:3002/heros',
            list:[]
        }
    },
    methods: {
      getList(){
        axios.get(this.url)
          .then(res=>{
            this.list = res.data
            
          })
      },
      del(id){
        axios.delete(`${this.url}/${id}`)
          .then(res=>{
            //重新渲染
            this.getList()
            
          })
      }
    },
    mounted:function(){
      this.getList()
    }
    
};
</script>

<style>
/* div {
  text-align: center;
} */
</style>


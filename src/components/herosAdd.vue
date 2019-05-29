<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Add Hero</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input
          type="text"
          class="form-control"
          placeholder="姓名"
          v-model="name"
        >
      </div>
      <div class="form-group">
        性别:
        <input type="radio" name="gender" v-model="gender" value="男">男
        <input type="radio" name="gender" v-model="gender" value="女">女
      </div>

      <button type="submit" class="btn btn-success" @click.prevent="add">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      url: "http://localhost:3002/heros",
      name: "",
      gender: ""
    };
  },
  methods: {
    add: function() {
      axios.post(this.url,{name:this.name,gender:this.gender})
        .then(res=>{
            if(res.status == 201) {
                alert('新增成功')
                //路由的跳转
                this.$router.push('./heroslist')
            }
            
        })
    }
  }
};
</script>

<style>
</style>

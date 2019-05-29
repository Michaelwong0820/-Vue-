<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Edit Hero</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input type="text" class="form-control" placeholder="姓名" v-model="obj.name">
      </div>
      <div class="form-group">
        性别:
        <input type="radio" name="gender" value="男" v-model="obj.gender">男
        <input type="radio" name="gender" value="女" v-model="obj.gender">女
      </div>

      <button type="submit" class="btn btn-success" @click.prevent="edit(obj.id)">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      url: "http://localhost:3002/heros",
      obj: {},
      id: ""
    };
  },
  methods: {
    getListById: function() {
      //根据id提取数据
      axios.get(`${this.url}/${this.id}`).then(res => {
          this.obj = res.data
      });
    },
    edit:function(id){
        axios.put(`${this.url}/${id}`,{name:this.obj.name,gender:this.obj.gender})
            .then(res=>{
                //跳转到/herolist
                this.$router.push('/heroslist')
                
            })
    }
  },
  mounted() {
    //获取url的id
    this.id = this.$route.params.id;
    // console.log(this.$route.params.id);
    this.getListById();
  }
};
</script>

<style>
</style>

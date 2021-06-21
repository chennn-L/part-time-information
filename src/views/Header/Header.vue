<template>
  <div class="header1">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :router="true"
      text-color="#8CC4FD"
      active-text-color="#409EFF"
    >
      <el-menu-item class="title" index="/">大学生兼职管理系统</el-menu-item>
      <el-menu-item index="/login" class="item">登录</el-menu-item>
      <el-menu-item index="/register" class="item">注册</el-menu-item>
    </el-menu>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      id:'',
      activeIndex:'/index'
    };
  },
  created(){
    const id=localStorage.getItem('bid')||localStorage.getItem('sid')
    this.id=id
  }
};
</script>

<style scoped>
  .header1{
    padding: 0 60px;
  }
  .title{
    font-size:20px;
    color:#409EFF !important;
    font-weight:bold;
  }
  .item{
    font-size: 16px;
    float: right;
  }
  .content{
    width: 100%;
  }
</style>
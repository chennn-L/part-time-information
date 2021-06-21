<template>
  <div class="leftnavbar">
    <el-menu :router="router" :default-active="activeIndex" class="nav">
      <el-menu-item index="/manage/stumanage">
        <i class="el-icon-setting"></i>
        <span slot="title">学生管理</span>
      </el-menu-item>
      <el-menu-item index="/manage/busmanage">
        <i class="el-icon-setting"></i>
        <span slot="title">企业管理</span>
      </el-menu-item>
      <el-menu-item index="/manage/postmanage">
        <i class="el-icon-setting"></i>
        <span slot="title">职位管理</span>
      </el-menu-item>
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
      activeIndex:'/manage/stumanage',
      router:true
    };
  },
};
</script>

<style scoped>
.leftnavbar {
  height: 500px;
}
.nav {
  float: left;
  height: 100%;
}
</style>
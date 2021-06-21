<template>
  <div class="leftnavbar">
    <el-menu :router="router" :default-active="activeIndex" class="nav">
      <el-menu-item disabled>
        <i class="el-icon-star-on"></i>
        <span slot="title">企业端</span>
      </el-menu-item>
      <el-menu-item index="/company/position">
        <i class="el-icon-setting"></i>
        <span slot="title">职位详情</span>
      </el-menu-item>
       <el-menu-item index="/company/application">
        <i class="el-icon-setting"></i>
        <span slot="title">职位申请</span>
      </el-menu-item>
      <el-menu-item index="/company/message">
        <i class="el-icon-setting"></i>
        <span slot="title">企业信息</span>
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
      activeIndex:'/company/position',
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
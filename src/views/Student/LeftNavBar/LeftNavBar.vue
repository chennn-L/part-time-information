<template>
  <div class="leftnavbar">
    <el-menu :router="router" :default-active="activeIndex" class="nav">
      <el-menu-item disabled>
        <i class="el-icon-star-on"></i>
        <span slot="title">学生端</span>
      </el-menu-item>
      <el-menu-item index="/student/position">
        <i class="el-icon-setting"></i>
        <span slot="title">兼职详情</span>
      </el-menu-item>
      <el-menu-item index="/student/message">
        <i class="el-icon-setting"></i>
        <span slot="title">学生信息</span>
      </el-menu-item>
      <el-menu-item index="/student/apply">
        <i class="el-icon-setting"></i>
        <span slot="title">申请情况</span>
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
      activeIndex:'/student/position',
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
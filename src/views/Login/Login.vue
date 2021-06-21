<template>
  <div class="login-container">
    <el-card header="登录" class="login-card">
      <el-form label-width="80px">
        <el-form-item label="角色">
          <el-radio-group v-model="radio1">
            <el-radio-button label="学生"></el-radio-button>
            <el-radio-button label="企业"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="model.userId"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="SLogin()" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { bussinessLogin, studentLogin } from "../../network/api.js";
export default {
  data() {
    return {
      radio1: "学生",
      model: {
        userId: "",
        password: "",
      },
    };
  },
  methods: {
    SLogin() {
      if (this.radio1 === "学生") {
        console.log("学生登录");
        studentLogin({
          userId: parseInt(this.model.userId),
          password: this.model.password,
        }).then((res) => {
          if (res.data === "账户不存在") {
            this.$message.error(res.data);
          } else {
            this.$message.success("登录成功!");
            localStorage.setItem("sid",this.model.userId);
            console.log(res);
            this.$router.push("/student");
          }
        });
      } else {
        console.log("企业登录");
        bussinessLogin({
          sid: parseInt(this.model.userId),
          spassword: this.model.password,
        }).then((res) => {
          if (res.data === "账户不存在") {
            this.$message.error(res.data);
          } else {
            this.$message.success("登录成功!");
            localStorage.setItem("bid",this.model.userId);
            console.log(res);
            this.$router.push("/company");
          }
        });
      }

      // localStorage.token = res.data.token
      // sessionStorage.token = res.data.token
      // this.$router.push('/')
      // this.$message({
      //   type: 'success',
      //   message: '登录成功'
      // })
    },
  },
};
</script>

<style>
.login-card {
  width: 25rem;
  margin: 6rem auto;
}
</style>
<template>
  <div class="register-container">
    <el-card header="注册" class="register-card">
      <el-form>
        <el-form label-position="labelPosition" label-width="80px">
          <el-form-item label="角色">
            <el-radio-group v-model="radio1">
              <el-radio-button label="学生"></el-radio-button>
              <el-radio-button label="企业"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="model.sid"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="model.spassword"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="model.sname"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="model.stelephone"></el-input>
          </el-form-item>
          <el-form-item label="地址" v-show="radio1 == '企业'">
            <el-input v-model="model.address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="sRegister()" type="primary">提交</el-button>
          </el-form-item>
        </el-form>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { addStudent, addBussiness } from "../../network/api";
export default {
  name: "Register",
  data() {
    return {
      radio1: "学生",
      model: {
        sid: "",
        sname: "",
        stelephone: "",
        spassword: "",
        address: "",
      },
    };
  },
  methods: {
    //点击完成按钮触发handlefinish
    sRegister() {
      if (this.radio1 === "学生") {
        console.log("学生注册");
        addStudent(this.model).then((res) => {
          console.log(res);
          this.$message.success("注册成功!去登录");
          setTimeout(() => {
            this.$router.push("/login");
          }, 2000);

          // this.$router.push("/index");
        });
      } else {
        console.log("企业注册");
        addBussiness(this.model).then((res) => {
          console.log(res);
          this.$message.success("注册成功!去登录");
          setTimeout(() => {
            this.$router.push("/login");
          }, 2000);
        });
      }
    },
  },
};
</script>

<style scoped>
.register-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.register-card {
  width: 25rem;
  margin: 6rem auto;
}
</style>
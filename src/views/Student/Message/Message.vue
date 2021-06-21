<template>
  <div class="message">
    <div style="margin: 20px"></div>
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
      class="body"
    >
      <el-form-item label="学生姓名">
        <el-input v-model="formLabelAlign.sname" readonly></el-input>
      </el-form-item>
      <el-form-item label="联系电话" class="center">
        <el-input v-model="formLabelAlign.stelephone" readonly></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getStudentList, getStudentById } from "../../../network/api";

export default {
  name: "Message",
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        sid: 1,
        sname: "张三",
        spassword: "123456",
        stelephone: "20190001",
      },
    };
  },
  created() {
    let sid = parseInt(localStorage.getItem("sid"));
    getStudentById(sid).then((res) => {
      console.log(res);
      this.formLabelAlign = res.data;
    });
  },
};
</script>

<style scoped>
.body {
  margin: 0 auto;
  border: 100px;
  width: 800px;
}

.center {
  margin-top: -450px;
  width: 800px;
}
</style>

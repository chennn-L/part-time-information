<template>
  <div class="message">
    <div style="margin: 20px"></div>
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
      class="body"
    >
      <el-form-item label="企业名称">
        <el-input v-model="formLabelAlign.bussinessname"></el-input>
      </el-form-item>
      <el-form-item label="地址" class="center">
        <el-input v-model="formLabelAlign.address"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" class="tel">
        <el-input v-model="formLabelAlign.phone"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {getBussinessById} from '../../../network/api'
export default {
  name: "Message",
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        bid: '',
        bussinessname: "",
        address: "",
        phone: "",
        password: ''
      },
    };
  },
  created() {
    let bid = parseInt(localStorage.getItem("bid"));
    getBussinessById(bid).then((res) => {
      console.log(res);
      this.formLabelAlign = res.data;
    });
  },
};
</script>

<style scoped>
.body {
  margin: 0 auto;
  /* border: 100px; */
  width: 800px;
}

.center {
  margin-top: -450px;
  width: 800px;
}

.tel {
  margin-top: -378px;
  width: 800px;
}
</style>

<template>
  <div class="busmanage">
    <!-- <el-button type="primary" class="add" @click="addCom">添加企业</el-button> -->
    <el-table :data="tableData" style="width: 80%">
      <el-table-column label="企业名称" width="220" prop="bussinessname">
      </el-table-column>
      <el-table-column label="地址" width="220" prop="address">
      </el-table-column>
      <el-table-column label="联系方式" width="220" prop="phone">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="企业名称" :label-width="formLabelWidth">
          <el-input v-model="form.bussinessname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button @click="confirmEdit" type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getBussinessList, updateBussiness } from "../../../network/api";
import {deleteBussiness} from "../../../network/api"
export default { 
  name: "BusManage",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        address: "",
          bid: "",
          bussinessname: "",
          password: "",
          phone: "",
      },
      formLabelWidth: "80px",
      tableData: [
        {
          address: "1111",
          bid: 1,
          bussinessname: "001",
          password: "111",
          phone: "001",
        },
      ],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      getBussinessList().then((res) => {
        console.log(res);
        this.tableData = res.data;
      });
    },
    confirmEdit() {
      this.dialogFormVisible = false;
      updateBussiness(this.form).then((res) => {
        console.log(res);
        this.getList();
      });
    },
    handleEdit(index, row) {
       this.dialogFormVisible = true;
      this.form = row;
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      deleteBussiness(row.bid).then((res) => {
        console.log(res);
        this.$message.success('删除成功')

        this.getList()
      });
    },
  },
};
</script>

<style scoped>
.add {
  margin-left: 10px;
  margin-top: 10px;
}
.el-table {
  padding-left: 10px;
}
</style>
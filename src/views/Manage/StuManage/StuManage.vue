<template>
  <div class="stumanage">
    <!-- <el-button type="primary" class="add" @click="addStu">添加学生</el-button> -->
    <el-table :data="tableData" style="width: 80%">
      <el-table-column label="姓名" width="360" prop="sname"> </el-table-column>
      <el-table-column label="联系方式" width="360" prop="stelephone">
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
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.sname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.stelephone" autocomplete="off"></el-input>
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
import { getStudentList, updateStudent } from "../../../network/api";
import { deleteStudent } from "../../../network/api";
export default {
  name: "StuManage",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        sid: "",
        sname: "",
        spassword: "",
        stelephone: "",
      },
      formLabelWidth: "80px",

      tableData: [
        {
          sid: 1,
          sname: "张三",
          spassword: "123456",
          stelephone: "20190001",
        },
      ],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      getStudentList().then((res) => {
        console.log(res);
        this.tableData = res.data;
      });
    },
    confirmEdit() {
      this.dialogFormVisible = false;
      updateStudent(this.form).then((res) => {
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
      deleteStudent(row.sid).then((res) => {
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

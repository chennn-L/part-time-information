<template>
  <div class="postmanage">
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.positionname.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 88%"
    >
      <el-table-column label="职位信息" prop="positionname" min-width="80"> </el-table-column>
      <el-table-column label="所属公司" prop="bussinessname" min-width="80"> </el-table-column>
      <el-table-column label="地址" prop="address" min-width="80"> </el-table-column>
      <el-table-column label="薪水" prop="salary" min-width="80"> </el-table-column>
      <el-table-column label="企业联系电话" prop="phone" min-width="110"> </el-table-column>
      <el-table-column label="开始时间" prop="start_time"  min-width="150"> </el-table-column>
      <el-table-column label="结束时间" prop="end_time"  min-width="150"> </el-table-column>
      <el-table-column align="right" min-width="150">
        <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
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
        <el-form-item label="职位信息" :label-width="formLabelWidth">
          <el-input v-model="form.positionname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="薪水" :label-width="formLabelWidth">
          <el-input v-model="form.salary" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="开始时间" :label-width="formLabelWidth">
          <el-input v-model="form.start_time" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="结束时间" :label-width="formLabelWidth">
          <el-input v-model="form.end_time" autocomplete="off"></el-input>
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
import { getPositionList, updatePosition, deletePosition } from "../../../network/api";
export default {
  name: "PostManage",
  data() {
    return {
      dialogFormVisible: false,
      form: {
       address: "",
          bid: "",
          end_time: "",
          pid: "",
          positionname: "",
          salary: "",
          start_time: "",
      },
      formLabelWidth: "80px",
      tableData: [
        {
          address: "33333",
          bid: 1,
          bussinessname: "1314",
          end_time: "2021-07-04 20:00:00",
          phone: "333333",
          pid: 1,
          positionname: "经理",
          salary: 2542,
          start_time: "2021-06-04 20:00:00",
          
        },
      ],
      search: "",
    };
  },
  created() {
    const bid=localStorage.getItem('bid')
    this.getList();
  },
  methods: {
    getList() {
      getPositionList().then((res) => {
        console.log(res);
        this.tableData = res.data;
      });
    },
    confirmEdit() {
      this.dialogFormVisible = false;
      updatePosition(this.form).then((res) => {
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
      deletePosition(row.pid).then((res) => {
        console.log(res);
        this.$message.success('删除成功')
        this.getList()
      });
    },
  },
};
</script>

<style scoped>
</style>
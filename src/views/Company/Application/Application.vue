<template>
  <div class="position">
    <el-table :data="tableData" style="width: 80%">
      <el-table-column label="申请人" prop="sid">
        <!-- {{ student.sid }} -->
      </el-table-column>
      <el-table-column label="职位详情" prop="positionname"> </el-table-column>
      <el-table-column label="薪水" prop="salary"> </el-table-column>
      <el-table-column label="开始时间" prop="start_time" width="170">
      </el-table-column>
      <el-table-column label="结束时间" prop="end_time" width="170">
      </el-table-column>
      <!-- 
      <el-table-column label="电话" > 
{{student.stelephone}}
      </el-table-column> -->
      <el-table-column label="状态" prop="status" width="170">
        <template slot-scope="scope">
          {{ scope.row.status == 2 ? "已通过" : "未通过" }}
        </template>
      </el-table-column>
      <el-table-column align="right" label="操作">
        <!-- <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template> -->
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleChange(scope.$index, scope.row)"
            >{{ scope.row.status == 1 ? "通过" : "撤销" }}</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  addAudit,
  getAuditByBid,
  getStudentById,
  updateStatusBussiness,
  deleteAudit,
} from "../../../network/api";

export default {
  name: "Position",
  data() {
    return {
      status: [
        {
          flag: false,
        },
      ],
      tableData: [
        {
          bid: 1,
          sid: 1,
          end_time: "2021-07-04 20:00:00",
          pid: 1,
          positionname: "服务员",
          salary: 1,
          start_time: "2021-06-04 20:00:00",
          status: 0,
        },
      ],
      sname: "",
      student: {
        sid: "",
        sname: "",
        spassword: "",
        stelephone: "",
      },
      search: "",
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  created() {
    let sid = parseInt(localStorage.getItem("sid"));
    getStudentById(sid).then((res) => {
      console.log(res);
      this.student = res.data;
      this.sid = res.data.sid;
    });
    console.log("sid", sid);
    let bid = parseInt(localStorage.getItem("bid"));
    getAuditByBid(bid).then((res) => {
      console.log("application", res);
      this.tableData = res.data;
    });
    
    
  },
  methods: {
    getList() {
      getAuditByBid(bid).then((res) => {
        console.log(res);
        this.tableData = res.data
        // this.bid = res.data.bid;
      });
    },
    handleEdit(index, row) {
      console.log("pid", row.pid);
      console.log(index, row);
      let sid = localStorage.getItem("sid");
      console.log(sid);
      addAudit({
        sid: sid,
        pid: row.pid,
      }).then((res) => {
        console.log(res);
        console.log(this.tableData);
        this.tableData[index].status = true;
      });
    },
    handleChange(index, row) {
      console.log(index, row);
      updateStatusBussiness({
        sid: this.student.sid,
        pid: row.pid,
      }).then((res) => {
        console.log(res);
        this.getList();
      });
    },
    // handleEdit() {
    //   console.log(index, ro);
    // },
    handleMessage(row) {
      this.$router.push(``);
      console.log(row);
    },
  },
};
</script>

<style scoped>
</style>

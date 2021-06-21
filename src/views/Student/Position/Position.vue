<template>
  <div class="position">
    <el-table :data="tableData" style="width: 80%">
      <el-table-column label="职位详情" prop="positionname"> </el-table-column>
      <el-table-column label="所属公司" prop="bussinessname"> </el-table-column>
      <el-table-column label="薪水" prop="salary"> </el-table-column>
      <el-table-column label="开始时间" prop="start_time" width="170">
      </el-table-column>
      <el-table-column label="结束时间" prop="end_time" width="170">
      </el-table-column>
      <el-table-column align="right">
        <!-- <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template> -->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >{{scope.row.status?'已报名':'报名'}}</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { getPositionStu, getPositionVi, addAudit } from "../../../network/api";

export default {
  name: "Position",
  data() {
    return {
      status:[
        {
          flag:false
        }
      ],
      tableData: [
        {
          // bid: 1,
          // end_time: "2021-07-04 20:00:00",
          // pid: 1,
          // positionname: "服务员",
          // salary: 1,
          // start_time: "2021-06-04 20:00:00",
          status:false,
          address: "1111",
          bid: 1,
          bussinessname: "001",
          end_time: "2021-07-04 20:00:00",
          phone: "001",
          pid: 1,
          positionname: "服务员",
          salary: 1,
          start_time: "2021-06-04 20:00:00",
        },
      ],
      search: "",
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          
        },
        formLabelWidth: '120px'
      };
  },
  created() {
    // getPositionList().then((res) => {
    //   console.log("position", res);
    //   this.tableData = res.data;
    // });
        let sid = parseInt(localStorage.getItem("sid"));

    getPositionStu(sid).then((res) => {
      console.log("position", res);
      // res.data.forEach(item=>{
      //   item.status=false
      // })
      this.tableData = res.data;
      
    });
  },
  methods: {
    handleEdit(index, row) {
      console.log('pid',row.pid);
      console.log(index, row);
      let sid=localStorage.getItem('sid')
      console.log(sid);
      addAudit({
        sid:sid,
        pid:row.pid
      }).then(res=>{
        console.log(res);
        console.log(this.tableData);
        this.$message.success('报名成功!')
        this.tableData[index].status=true
      })
    },
    handleDelete(index, row) {
      console.log(index, row);
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

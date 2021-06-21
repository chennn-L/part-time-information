import {request} from './axios'

//根据id查看学生信息
export function getStudentById(data) {
    return request({
        method: 'get',
        url: '/getStudentById',
        params:{
            sid:data
        },
    })
}

//查看申请
export function getAuditBySid(data) {
    return request({
        method: 'get',
        url: '/getAuditBySid',
        params:{
            sid:data
        },
    })
}
//根据bid查询职业申请
export function getAuditByBid(data) {
    return request({
        method: 'get',
        url: '/getAuditByBid',
        params:{
            bid:data
        },
    })
}
//申请职位
export function addAudit(data) {
    return request({
        method: 'get',
        url: '/addAudit',
        params:{
            sid:parseInt(data.sid),
            pid:parseInt(data.pid),
        },
    })
}
//企业登录
export function bussinessLogin(data) {
    return request({
        method: 'get',
        url: '/bussinessLogin',
        params:{
            bid:data.sid,
            password:data.spassword,
        },
    })
}
//企业注册
export function addBussiness(data) {
    return request({
        method: 'get',
        url: '/addBussiness',
        params:{
            address:data.address,
            bid:data.sid,
            bussinessname:data.sname,
            password:data.spassword,
            phone:data.stelephone,
        },
    })
}
//发布职位
export function addPosition(data) {
    return request({
        method: 'get',
        url: '/addPosition',
        params:{
            positionname:data.positionname,
            bid:data.bid,
            // pid:data.pid,
            start_time:data.start_time,
            end_time:data.end_time,
            salary:data.salary,
        },
    })
}
// 编辑职位信息
export function updatePosition(data) {
    return request({
        method: 'get',
        url: '/updatePosition',
        params:{
            address: data.address,
          bid: data.bid,
          bussinessname: data.bussinessname,
          end_time: data.end_time,
          phone: data.phone,
          pid: data.pid,
          positionname: data.positionname,
          salary: data.salary,
          start_time: data.start_time,
        },
    })
}
// 删除职位信息
export function deletePosition(data) {
    return request({
        method: 'get',
        url: '/deletePosition',
        params:{
            pid:parseInt(data),
        },
    })
}
// 获取所有职位信息
export function getPositionVi() {
    return request({
        method: 'get',
        url: '/getPositionVi'
    })
}
// 获取所有职位信息
export function getPositionStu(data) {
    return request({
        method: 'get',
        url: '/getPositionStu',
        params:{
            sid:parseInt(data),
        },
    })
}// 获取所有职位信息
export function updateStatusBussiness(data) {
    return request({
        method: 'get',
        url: '/updateStatusBussiness',
        params:{
            sid:parseInt(data.sid),
            pid:parseInt(data.pid),
        },
    })
}

// 获取企业的职位信息
export function getPositionByBid(data) {
    return request({
        method: 'get',
        url: '/getPositionByBid',
        params:{
            bid:parseInt(data),
        },
    })
}
// 获取所有企业信息
export function getBussinessList() {
    return request({
        method: 'get',
        url: '/getBussinessList'
    })
}

// 查询企业的信息
export function getBussinessById(data) {
    return request({
        method: 'get',
        url: '/getBussinessById',
        params:{
            bid:data
        }
    })
}
// 编辑企业信息
export function updateBussiness(data) {
    return request({
        method: 'get',
        url: '/updateBussiness',
        params:{
            address: data.address,
          bid: data.bid,
          bussinessname: data.bussinessname,
          password: data.password,
          phone: data.phone,
        },
    })
}
// 获取所有兼职信息
export function getPositionList() {
    return request({
        method: 'get',
        url: '/getPositionList'
    })
}
// 获取学生信息列表
export function getStudentList() {
    return request({
        method: 'get',
        url: '/getStudentList'
    })
}
// 编辑学生信息
export function updateStudent(data) {
    return request({
        method: 'get',
        url: '/updateStudent',
        params:{
            sid:data.sid,
            sname:data.sname,
            spassword:data.spassword,
            stelephone:data.stelephone,
        },
    })
}
// 删除申请信息
export function deleteAudit(data) {
    return request({
        method: 'get',
        url: '/deleteAudit',
        params:{
            sid:parseInt(data.sid),
            pid:parseInt(data.pid),
            status:parseInt(data.status),
        },
    })
}

// 删除学生信息
export function deleteStudent(data) {
    return request({
        method: 'get',
        url: '/deleteStudent',
        params:{
            sid:parseInt(data),
        },
    })
}

// 删除企业信息
export function deleteBussiness(data) {
    return request({
        method: 'get',
        url: '/deleteBussiness',
        params:{
            bid:parseInt(data),
        },
    })
}
function getToken(){
    localStorage.getItem('token')
}

// 学生登录
export function studentLogin(data) {
    return request( {
        method: 'get',
        url: `/studentLogin?sid=${data.userId}&spassword=${data.password}`,
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        // headers:{
        //     token:getToken()
        // },
        // data: data
    })
}

// 注册学生
export function addStudent(data) {
    return request( {
        method: 'get',
        url: `/addStudent`,
        params:{
            sid:data.sid,
            sname:data.sname,
            spassword:data.spassword,
            stelephone:data.stelephone
        },
        headers:{
            token:getToken()
        },
        // data: data
    })
}



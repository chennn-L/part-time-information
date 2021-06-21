import Vue from 'vue'
import VueRouter from 'vue-router'
import student from '../views/Student/LeftNavBar/LeftNavBar.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/header'
  },
  {
    path: '/header',
    meta: { title: '大学生兼职管理系统' },
    component: () => import('../views/Header/Header.vue'),
    children: [
      {
        path: '/header',
        redirect: '/index'
      },
      {
        path: '/index',
        meta: { title: '首页' },
        component: () => import('../views/Index/Index.vue')
      },
      {
        path: '/login',
        meta: { title: '登录' },
        component: () => import('../views/Login/Login.vue')
      },
      {
        path: '/register',
        meta: { title: '注册' },
        component: () => import('../views/Register/Register.vue')
      },
      {
        path: '/manage',
        meta: { title: '管理系统' },
        component: () => import('../views/Manage/LeftNavBar/LeftNavBar.vue'),
        children: [
          {
            path: '/manage',
            redirect: '/manage/stumanage'
          },
          {
            path: '/manage/stumanage',
            meta: { title: '学生管理' },
            component: () => import('../views/Manage/StuManage/StuManage.vue')
          },
          {
            path: '/manage/busmanage',
            meta: { title: '企业管理' },
            component: () => import('../views/Manage/BusManage/BusManage.vue')
          },
          {
            path: '/manage/postmanage',
            meta: { title: '职位管理' },
            component: () => import('../views/Manage/PostManage/PostManage.vue')
          },
          
        ]
      },
      {
        path: '/student',
        meta: {title: '学生'},
        component: student,
        children: [
          {
            path: '/student',
            redirect: '/student/position'
          },
          {
            path: '/student/position',
            meta: {title: '兼职详情'},
            component: () => import('../views/Student/Position/Position.vue')
          },
          {
            path: '/student/message',
            meta: {title: '个人信息'},
            component: () => import('../views/Student/Message/Message.vue')
          },
          {
            path: '/student/apply',
            meta: {title: '申请情况'},
            component: () => import('../views/Student/Apply/Apply.vue')
          }
        ]
      },
      {
        path: '/company',
        meta: {title: '企业'},
        component: () => import('../views/Company/LeftNavBar/LeftNavBar.vue'),
        children: [
          {
            path: '/company',
            redirect: '/company/position'
          },
          {
            path: '/company/position',
            meta: {title: '职位信息'},
            component: () => import('../views/Company/Position/Position.vue')
          },
          {
            path: '/company/message',
            meta: {title: '企业信息'},
            component: () => import('../views/Company/Message/Message.vue')
          },
          {
            path: '/company/application',
            meta: {title: '职位申请'},
            component: () => import('../views/Company/Application/Application.vue')
          }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((from,to,next)=>{
  window.document.title = from.meta.title;
  next();
})

export default router

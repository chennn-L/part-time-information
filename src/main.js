import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import '../js/mock'//此部分引入的是我们所编写的mockjs文档

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')

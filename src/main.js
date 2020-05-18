import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "./store";
import ElementUI from 'element-ui'
import  'element-ui/lib/theme-chalk/index.css'
import Toast from "./components/common/toast";
Vue.use(ElementUI)
Vue.use(Toast)
Vue.config.productionTip = false

//为vue原型添加bus方法， （事件总线）
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store,
  Toast
}).$mount('#app')

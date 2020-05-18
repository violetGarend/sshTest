import Toasts from "./Toast";
const Toast = {}

Toast.install = function (Vue) {

//  1、创建组件构造器,用extend
  const toastContrustor = Vue.extend(Toasts)
//  2、根据组件构造器，创建一个组件对象
  const toast = new toastContrustor()
//  3、创建一个元素，并将组件对象挂载到其上，用$mount挂载
  toast.$mount(document.createElement('div'))
//  4、拿到对应的div，添加到body上
  document.body.appendChild(toast.$el)
//  5、将toast添加到vue的原形上
  Vue.prototype.$toast = toast
}
export default Toast
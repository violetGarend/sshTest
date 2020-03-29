import Vue from "vue";
import VueRouter from "vue-router"

Vue.use(VueRouter)


// const Home = () => import('./tabber/home/Home')
import Home from "./tabber/home/Home";
const Classify = () => import('./tabber/classify/Classify')
const ShoppingCart = () => import('./tabber/shoppingCart/ShoppingCart')
const Mine = () => import('./tabber/mine/Mine')

const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Classify
  },
  {
    path: '/cart',
    component: ShoppingCart
  },
  {
    path: '/profile',
    component: Mine
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../views/home/Home")
const Profile = () => import("../views/profile/Profile")
const Shop = () => import("../views/shop/Shop")
const Message = () => import("../views/message/Message")
const Detail = () => import("../views/detail/Detail")

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router


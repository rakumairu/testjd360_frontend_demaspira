import Vue from 'vue'
import VueRouter from 'vue-router'
const Dashboard = () => import('@/views/Dashboard')
const AddOrder = () => import('@/views/AddOrder')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/add',
    name: 'add-order',
    component: AddOrder
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

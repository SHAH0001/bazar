import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    }, 
    {
      path: '/product/:productname',
      name: 'Product',
      component: () => import('../views/Product.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/Products.vue')
    },
    {
      path: "*",
      component: () => import('../views/404.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

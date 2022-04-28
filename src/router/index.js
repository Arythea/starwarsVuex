import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store/index.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/starships',
    name: 'starships',
    component: () => import(/* webpackChunkName: "starships" */ '../views/StarshipsView.vue'),
    // beforeEnter: (to, from, next) => {
    //   if(store.state.loggedin == false) {
    //     next("/login");
    //   } else {
    //     next();
    //   }
    // }
  },
  {
    path: '/ship/:id',
    name: 'ship',
    component: () => import(/* webpackChunkName: "ship" */ '../views/ShipView.vue'),
    // beforeEnter: (to, from, next) => {
    //   console.log(store.state.loggedin);
    //   if(store.state.loggedin == false) {
    //     next("/login");
    //   } else {
    //     next();
    //   }
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/art',
    name: 'art',
    component: () => import(/* webpackChunkName: "commissions" */ '../views/ArtView.vue')
  },
  {
    path: '/commisions',
    name: 'commisions',
    component: () => import(/* webpackChunkName: "commissions" */ '../views/CommisionsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "login" */ '../views/ContactView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

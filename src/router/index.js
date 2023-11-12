import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/biff',
    name: 'biff',
    component: function () {
      return import('../views/HistoryView.vue')
    }
  },
  {
    path: '/2023BIFF',
    name: '2023BIFF',
    component: function () {
      return import('../views/Biff2023View.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : routes
})

export default router

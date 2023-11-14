import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import Vuetify from 'vuetify'

Vue.use(VueRouter)
Vue.use(Vuetify)

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
    path: '/2023biff',
    name: '2023BIFF',
    component: function () {
      return import('../views/Biff2023View.vue')
    }
  },

  {
    path: '/screening',
    name : 'screening',
    component : function(){
       
      return import('../views/ScreenView.vue')

    }

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : routes
})

export default router

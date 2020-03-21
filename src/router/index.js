import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard'
import TruequeNew from '../views/trueque/TruequeNew'
import TruequeRegister from '../views/trueque/TruequeRegister'

// Ambasador
import AmbasadorUno from '../views/ambassador/AmbassadorUno'
import AmbasadorDos from '../views/ambassador/AmbassadorDos'
import AmbasadorTres from '../views/ambassador/AmbassadorTres'
import AmbasadorCuatro from '../views/ambassador/AmbassadorCuatro'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/trueque_new',
    name: 'TruequeNew',
    component: TruequeNew
  },
  {
    path: '/trueque_register',
    name: 'TruequeRegister',
    component: TruequeRegister
  },
  {
    path: '/ambassador_uno',
    name: 'AmbassadorUno',
    component: AmbasadorUno
  },
  {
    path: '/ambassador_dos',
    name: 'AmbassadorDos',
    component: AmbasadorDos
  },
  {
    path: '/ambassador_tres',
    name: 'AmbassadorTres',
    component: AmbasadorTres
  },
  {
    path: '/ambassador_cuatro',
    name: 'AmbassadorCuatro',
    component: AmbasadorCuatro
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

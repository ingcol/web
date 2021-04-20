import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Company from '../views/Company.vue'
import Department from '../views/Department.vue'
import Turn from '../views/Turn.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
{
  path: '/',
  name: 'Home',
  component: Home
},

{
  path: '/empresas',
  name: 'Company',
  component: Company
},
{
 path: '/departamento/:slug', 
 name: 'departamento', 
 props: true,
 component: Department
},
{
 path: '/turnos/:slug/:id', 
 name: 'turno', 
 props: true,
 component: Turn
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

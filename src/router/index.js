import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const Software = ()=>import(/*webpackName:'software'*/'@/views/Software.vue')
const HtmlCourse = ()=>import(/*webpackName:'htmlCourse*/'@/views/HtmlCourse.vue')
const CssCourse = ()=>import(/*webpackName:'htmlCourse*/'@/views/CssCourse.vue')

const routes = [
  {
    path: '/',
    name:'Home',
    component: Home,
    meta:{transitionName:'home'},
  },
  {
    path: '/html-route',
    name: 'html-route ',
    component: HtmlCourse,
  },
  {
    path: '/css-route',
    name: 'css-route',
    component: CssCourse,
  },
 
  {
    path: '/software',
    name: 'software',
    component: Software,
    meta:{transitionName:"fadein"}
  },
  {
    path: '/register',
    name: 'register',
    component: ()=>import(/*webpackName:register*/'@/views/RegisterInfo.vue'),
    meta:{transitionName:"fadein"}
  },
  {
    path: '/aboutus',
    name: 'Aboutus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "aboutus" */ '../views/AboutUs.vue'),
    meta:{transitionName:"ts-register"}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

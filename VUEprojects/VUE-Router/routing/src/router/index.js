import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Notfound from '../views/Notfound.vue'
import Jobs from '../views/jobs/Jobs.vue'
import Jobsdetails from '../views/jobs/Jobsdetails.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'Jobsdetails',
    component: Jobsdetails,
    props: true
  },
  //redirects
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  //catch 404
  {
    path: '/:catchall(.*)',
    name: 'Not found',
    component: Notfound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

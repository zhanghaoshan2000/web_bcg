import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog/blog.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About/about.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import MenuView from '../views/MenuView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      beforeEnter: ((to, from, next) => {
        let isAuthenticated = sessionStorage.getItem('access_tk');
        if (to.name !== 'login' && !isAuthenticated) 
          next({ name: 'login' })
        else next()
      })
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

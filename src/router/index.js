import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Contact from '../views/Contactus.vue'
import Cart from '../views/Cart.vue'
import SignUp from '@/views/SignUp.vue'
import SignIn from '@/views/SignIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Contact,
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Cart,
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SignUp,
    },
    {
      path: '/signin',
      name: 'signin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SignIn,
    },
    {
      path: '/addtocart',
      name: 'AddToCart',
      component: () => import('@/components/AddToCart.vue'), // Adjust path if needed
    },
    {
        path: '/productdetail',
        name: 'ProductDetail',
        component: () => import('@/components/ProductDetail.vue'), // Adjust path if needed
    },
  ],
})

export default router
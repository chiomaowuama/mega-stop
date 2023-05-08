import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import signup from '../views/signup.vue'
import Login from '../views/Login.vue'
import Contactus from '../views/Contactus.vue'
import forgotpassword from '../views/forgotpassword.vue'
import otpsent from '../views/otpsent.vue'
import createnewpassword from '../views/createnewpassword.vue'
import homepage from '../views/homepage.vue'
import fooddetails from '../views/fooddetails.vue'
import foodprice from '../views/foodprice.vue'
import checkout from '../views/checkout.vue'
import payment from '../views/payment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Contactus',
      name: 'Contactus',
      component:Contactus
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component:forgotpassword
    },
    {
      path: '/otpsent',
      name: 'otpsent',
      component:otpsent
    },
    {
      path: '/createnewpassword',
      name: 'createnewpassword',
      component:createnewpassword
    },
    {
      path: '/homepage',
      name: 'homepage',
      component:homepage
    },
    {
      path: '/fooddetails',
      name: 'fooddetails',
      component:fooddetails
    },
    {
      path: '/foodprice',
      name: 'foodprice',
      component:foodprice
    },
    {
      path: '/checkout',
      name: 'checkout',
      component:checkout
    },
    {
      path: '/payment',
      name: 'payment',
      component:payment
    }
  
   
  ]
})

export default router

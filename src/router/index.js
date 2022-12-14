import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/template.vue' //@指的就是src
import Login from "../pages/Login/template.vue";
import Detail from "../pages/Detail/template.vue";
import Create from "../pages/Create/template.vue";
import Edit from "../pages/Edit/template.vue";
import User from "../pages/User/template.vue";
import My from "../pages/My/template.vue";
import Register from "../pages/Register/template.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
   {
     path: '/login',
     component: Login
   },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/create',
      component: Create
    },
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/register',
      component: Register
    }
  ]
})

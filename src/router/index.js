import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

NProgress.configure({showSpinner:false})

const routes = [
  { path: '/admin/election', component: ()=>import('@/views/admin/admin-election.vue'), meta:{admin:true,} },
  { path: '/admin/positions', component: ()=>import('@/views/admin/admin-position.vue'), meta:{admin:true,} },
  { path: '/admin/candidates', component: ()=>import('@/views/admin/admin-candidate.vue'), meta:{admin:true,} },

  ];
  
 export const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.beforeEach((to, from, next)=>{
    NProgress.start()
    next()
  })

  router.afterEach(()=>{
    NProgress.done()
  })

  
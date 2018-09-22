import Vue from 'vue';
import AppLayout from '@/AppLayout';
import Router from 'vue-router';

import { SIGN_ROUTER } from '@/sign/router';
import { DASHBOARD_ROUTER } from '@/dashboard/router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: { path: '/' }
    },
    {
      path: '',
      component: AppLayout,
      children: [
        SIGN_ROUTER,
        DASHBOARD_ROUTER
      ]
    }
  ]
});

export default router;

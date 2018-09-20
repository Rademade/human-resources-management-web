import Vue from 'vue';
import AppLayout from '@/AppLayout';
import Router from 'vue-router';

import { SIGN_ROUTER } from '@/sign/router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '*',
    //   redirect: { name: '/' }
    // },
    {
      path: '',
      component: AppLayout,
      children: [
        SIGN_ROUTER
      ]
    }
  ]
});

export default router;

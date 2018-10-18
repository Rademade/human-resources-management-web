import Vue from 'vue';
import AppLayout from '@/AppLayout';
import Router from 'vue-router';

import { SIGN_ROUTER } from '@/sign/router';
import { DASHBOARD_ROUTER } from '@/dashboard/router';
import { PROJECTS_ROUTER } from '@/projects/router';
import { EMPLOYEES_ROUTER } from '@/employees/router';
import { ORGANIZATION_STRUCTURE_ROUTER } from '@/organization-structure/router';
import appGuard from '@/core/guards/appGuard';

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
      redirect: { name: 'Dashboard' },
      beforeEnter: appGuard,
      children: [
        PROJECTS_ROUTER,
        DASHBOARD_ROUTER,
        EMPLOYEES_ROUTER,
        ORGANIZATION_STRUCTURE_ROUTER
      ]
    },
    SIGN_ROUTER
  ]
});

export default router;

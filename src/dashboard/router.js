import authService from '@/core/services/auth.service';
import Dashboard from '@/dashboard/Dashboard';

export const DASHBOARD_ROUTER = {
  path: '/',
  name: 'Dashboard',
  component: Dashboard,
  beforeEnter: (from, to, next) => {
    if (!authService.checkToken()) {
      next({name: 'Sign'});
    } else {
      next();
    }
  }
};

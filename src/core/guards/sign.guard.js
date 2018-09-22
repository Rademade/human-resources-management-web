import authService from '@/core/services/auth.service';

export default (to, from, next) => {
  if (authService.checkToken()) {
    next({name: 'Dashboard'});
  } else {
    next();
  }
};

import authService from '@/core/services/authService';

export default (to, from, next) => {
  if (authService.checkToken()) {
    next({name: 'Dashboard'});
  } else {
    next();
  }
};

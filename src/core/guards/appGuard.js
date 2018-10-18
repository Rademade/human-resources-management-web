import authService from '@/core/services/authService';

export default (from, to, next) => {
  if (!authService.checkToken()) {
    next({name: 'Sign'});
  } else {
    next();
  }
};

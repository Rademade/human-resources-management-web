import signGuard from '@/core/guards/sign.guard';
import SignIn from '@/sign/SignIn';
import SignUp from '@/sign/SignUp';
import SignLayout from '@/sign/SignLayout';

export const SIGN_ROUTER = {
  path: 'sign',
  name: 'Sign',
  redirect: {name: 'SignIn'},
  component: SignLayout,
  beforeEnter: signGuard,
  children: [
    {
      path: 'up',
      component: SignUp
    },
    {
      path: 'in',
      name: 'SignIn',
      component: SignIn
    }
  ]
};


import SignIn from '@/sign/SignIn';
import SignUp from '@/sign/SignUp';
import SignLayout from '@/sign/SignLayout';

export const SIGN_ROUTER = {
  path: 'sign',
  component: SignLayout,
  children: [
    {
      path: 'up',
      component: SignUp
    },
    {
      path: 'in',
      component: SignIn
    }
  ]
};

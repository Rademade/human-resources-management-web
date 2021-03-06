import axios from 'axios';
import router from '@/router';

let axiosHttpLink = axios.create({
  baseURL: process.env.BASE_URL
});

class Auth {
  constructor (axiosHttpLink) {
    this.axiosHttpLink = axiosHttpLink;
  }
  signUp (firstName, lastName, email, password) {
    return this.axiosHttpLink.post('/users', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }
  signIn (email, password) {
    return this.axiosHttpLink.post('/auth', {
      email: email,
      password: password
    }).then((response) => {
      localStorage.setItem('token', response.data.token);
      router.push({name: 'Dashboard'});
    }).catch((error) => {
      console.log(error.response);
    });
  }
  checkToken () {
    return localStorage.getItem('token') !== null;
  }
  logout () {
    localStorage.removeItem('token');
    router.push({name: 'SignIn'});
  }
}

export default new Auth(axiosHttpLink);

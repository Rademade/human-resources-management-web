import axios from 'axios';

let axiosHttpLink = axios.create({
  baseURL: '/api/api'
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
      console.log(response.data);
    }).catch((error) => {
      console.log(error.response);
    });
  }
  checkToken () {
    return localStorage.getItem('token') !== null;
  }
  logout () {
    localStorage.removeItem('token');
    window.location.replace('/');
  }
}

export default new Auth(axiosHttpLink);

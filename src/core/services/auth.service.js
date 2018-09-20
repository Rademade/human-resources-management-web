import axios from 'axios';

let axiosHttpLink = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: {
      toString () {
        return localStorage.getItem('token');
      }
    }
  }
});

class Auth {
  constructor (axiosHttpLink) {
    this.axiosHttpLink = axiosHttpLink;
  }
  signUp (firstName, lastName, email, password) {
    return this.axiosHttpLink.post('/api/users', {
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
    return this.axiosHttpLink.post('/api/auth', {
      email: email,
      password: password
    }).then((response) => {
      localStorage.setItem('token', response.data.token);
      console.log(response.data);
    }).catch((error) => {
      console.log(error.response);
    });
  }
}

export default new Auth(axiosHttpLink);

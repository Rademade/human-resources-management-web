import axios from 'axios';
import router from '@/router';

let axiosHttpLink = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Authorization: {
      toString () {
        return 'Bearer ' + localStorage.getItem('token');
      }
    }
  }
});

axiosHttpLink.interceptors.response.use(response => response, (error) => {
  if (error.response.status === 401) {
    localStorage.removeItem('token');
    router.push({name: 'SignIn'});
  }
  return Promise.reject(error.response);
});

export default axiosHttpLink;

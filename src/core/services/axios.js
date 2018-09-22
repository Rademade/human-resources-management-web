import axios from 'axios';
import authService from '@/core/services/auth.service';

let axiosHttpLink = axios.create({
  baseURL: '/api/api',
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
    authService.logout();
  }
  return Promise.reject(error.response);
});

export default axiosHttpLink;

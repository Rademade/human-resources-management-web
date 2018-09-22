import Vue from 'vue';
import Vuex from 'vuex';
import { DASHBOARD_STORE } from '@/dashboard/store';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dashboard: DASHBOARD_STORE
  },
  strict: process.env.NODE_ENV !== 'production'
});

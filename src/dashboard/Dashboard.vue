<template>
  <div>
    <p>Dashboard</p>
    <p v-for="(user,index) in users" v-bind:key="index">{{index + 1}}: {{user.firstName}} : {{user.lastName}} : {{user.email}}</p>
    <button type="button" v-on:click="logout()">Logout</button>
  </div>
</template>

<script>
import axios from '@/core/services/axios';
import authService from '@/core/services/auth.service';
export default {
  data () {
    return {
      users: []
    };
  },
  created () {
    axios.get('/users').then((response) => {
      this.users = response.data.data;
    });
  },
  methods: {
    logout () {
      authService.logout();
    }
  }
};
</script>

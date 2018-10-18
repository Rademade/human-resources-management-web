<template>
  <div>
    <p>Employees</p>
    <p v-for="(user,index) in users" v-bind:key="index">{{index + 1}}: {{user.firstName}} : {{user.lastName}} : {{user.email}}</p>
  </div>
</template>

<script>
import axios from '@/core/services/axios';
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
  }
};
</script>

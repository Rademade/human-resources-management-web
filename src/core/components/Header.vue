<template>
 <div class="header">
   <div class="header__box">
     <p class="header__title">Good to see you</p>
   </div>
   <div class="header__box">
     <button type="button" v-on:click="logout()">Logout</button>
   </div>
 </div>
</template>

<script>
  import authService from '@/core/services/authService';

  export default {
    methods: {
      logout () {
        authService.logout();
      }
    }
  };
</script>

<style scoped></style>

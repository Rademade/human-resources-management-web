<template>
  <div class="sign">
    <form v-on:submit.prevent="onSubmit()">
      <input v-model="form.firstName" type="text" name="firstName">
      <input v-model="form.lastName" type="text" name="lastName">
      <input v-model="form.email" type="email" name="email">
      <input v-model="form.password" type="test" name="password">
      <button type="submit">Create User</button>
    </form>
  </div>
</template>

<script>
import authService from '@/core/services/auth.service';

export default {
  data () {
    return {
      form: {
        firstName: null,
        lastName: null,
        email: null,
        password: null
      }
    };
  },
  methods: {
    onSubmit () {
      authService.signUp(this.form.firstName, this.form.lastName, this.form.email, this.form.password);
    }
  }
};
</script>

<style lang="postcss" scoped>
  input {
    border: 1px solid #000;
  }
</style>

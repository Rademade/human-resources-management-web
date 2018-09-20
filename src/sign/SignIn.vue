<template>
  <div class="sign">
    <form v-on:submit.prevent="onSubmit()">
      <input v-model="form.email" type="email" name="email">
      <input v-model="form.password" type="text" name="password">
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
import authService from '@/core/services/auth.service';

export default {
  data () {
    return {
      form: {
        email: null
      }
    };
  },
  methods: {
    onSubmit () {
      authService.signIn(this.form.email, this.form.password);
    }
  }
};
</script>

<style lang="postcss" scoped></style>

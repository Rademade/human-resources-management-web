<template>
  <div class="sign">
    <form class="sign-form" v-on:submit.prevent="onSubmit()">
      <InputWrapper :label="'Email'">
        <input v-model="form.email" type="email" name="email" placeholder="Type Password" required>
      </InputWrapper>
      <InputWrapper :label="'Password'">
        <input v-model="form.password" type="password" name="password" placeholder="Type Password" required>
      </InputWrapper>
      <button type="submit">Sign In</button>
      <a href="http://localhost:3000/auth/login">
        Google Login
      </a>
    </form>
  </div>
</template>

<script>
import authService from '@/core/services/auth.service';
import InputWrapper from '@/core/components/InputWrapper';

export default {
  components: {
    InputWrapper
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
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

<style lang="postcss" scoped>
  .sign-form {
    margin: 0 auto;
    max-width: 400px;
  }
</style>

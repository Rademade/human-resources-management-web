<template>
  <div class="sign">
    <p>Success</p>
  </div>
</template>

<script>

export default {
  mounted () {
    const token = this.$route.query.token;
    localStorage.setItem('token', token);
    this.$router.push({name: 'Dashboard'});
  }
};
</script>

<style lang="postcss" scoped>
  .sign-form {
    margin: 0 auto;
    max-width: 400px;
  }
</style>

<template>
  <div>
    <SignHeader></SignHeader>
    <div class="sign_data">
      <router-view/>
    </div>
  </div>
</template>

<script>
import SignHeader from '@/sign/shared/SignHeader';
export default {
  components: {
    SignHeader
  }
};
</script>

<style lang="postcss" scoped>
  .sign_data {
    padding-top: 65px;
  }
</style>

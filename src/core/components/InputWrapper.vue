<template>
  <label class="input-wrapper">
    <span class="input-wrapper__label">{{label}}</span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    label: ''
  }
};
</script>

<style lang="postcss" scoped>
  .input-wrapper {
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 20px;
  }
  .input-wrapper__label {
    display: block;
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 1.25;
    text-transform: uppercase;
  }
  input {
    display: block;
    width: 100%;
    padding: 5px 15px 5px;
    font-size: 18px;
    line-height: 1;
    border: 1px solid rgba(0,0,0,.6);
    border-radius: 16px;
  }
</style>

<template>
  <div class="app">
    <Nav class="app__nav"></Nav>
    <div class="app__data">
      <Header class="app__header"></Header>
      <div class="app__content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/core/components/Header';
import Nav from '@/core/components/Nav';
export default {
  components: {
    Header,
    Nav
  }
};
</script>

<style lang="postcss" scoped>
  .app {
    width: 100%;
  }
  .app__nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 170px;
    height: 100%;
  }
  .app__data {
    padding-left: 170px;
  }
  .app__content {
    max-width: 1255px;
  }
</style>

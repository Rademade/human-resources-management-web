<template>
  <div class="nav">
    <router-link
      class="nav__link"
      v-for="(navLink, index) in nav" :to="navLink.route" active-class="nav__link--active"
      v-bind:key="index">
      <span class="nav__text">{{navLink.text}}</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        nav: [{
          route: {name: 'Dashboard'},
          text: 'Dashboard'
        }, {
          route: {name: 'Employees'},
          text: 'employees'
        }, {
          route: {name: 'OrganizationStructure'},
          text: 'Organization Structure'
        }, {
          route: {name: 'Projects'},
          text: 'Projects'
        }]
      };
    }
  };
</script>

<style lang="postcss" scoped>
  .nav__link {
    display: block;
  }
</style>

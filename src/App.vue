<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        <Loading v-show="showLoading" />
  <RouterView />
</template>

<script>

import Loading from './components/Loading.vue';

export default {
  data() {
    return {
      showLoading: true,
    }
  },
  beforeCreate() {
    this.showLoading = true;
  },
  mounted() {
    setTimeout(() => {
      this.showLoading = false;
    }, 2000)
  },
  components: {
    Loading,
  },
}

</script>

<style scoped>

</style>

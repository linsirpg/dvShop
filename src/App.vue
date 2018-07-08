<template>
  <div id="app">
    <home-page/>
  </div>
</template>

<script>
import HomePage from '@/components/HomePage/HomePage.vue'
import {RemFit} from './lib/mUtils.js'
RemFit(document, window)
export default {
  name: 'App',
  created () {
    this.$store.dispatch('getHeadNavArr')
  },
  components: {
    HomePage
  }
}
</script>

<style>

</style>

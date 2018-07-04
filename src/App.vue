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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

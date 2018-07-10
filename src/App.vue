<template>
  <div id="app">
    <home-page/>
    <Footer/>
  </div>
</template>

<script>
import HomePage from '@/components/HomePage/HomePage.vue'
import Footer from '@/components/Footer/Footer.vue'
import {RemFit} from './lib/mUtils.js'
RemFit(document, window)
export default {
  name: 'App',
  created () {
    this.$store.dispatch('getHeadNavArr')
  },
  components: {
    HomePage,
    Footer
  }
}
</script>

<style>

</style>

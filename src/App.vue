<template>
  <div id="app">
    <home-page v-if= "$route.meta.Class === 'A'"/>
    <router-view ></router-view>
    <Footer/>
    <page-util />
  </div>
</template>
<script>
import HomePage from '@/components/HomePage/HomePage.vue'
import Footer from '@/components/Footer/Footer.vue'
import pageUtil from '@/components/publciutil/util.vue'

import {RemFit} from './lib/mUtils.js'
RemFit(document, window)
export default {
  name: 'App',
  created () {
    this.$store.dispatch('getHeadNavArr')
  },
  components: {
    HomePage,
    Footer,
    pageUtil
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style>
body,html{
  max-width: 600px;
  margin: 0 auto;
}
</style>

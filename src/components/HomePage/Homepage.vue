<template>
  <div class='HomePage'>
    <Home-header/>
    <Home-swiper/>
  </div>
</template>

<script>
import HomeSwiper from './HomeSwiper.vue'
import HomeHeader from './HomeHeader.vue'
export default {
  name: 'homePage',
  components: {
    HomeSwiper,
    HomeHeader
  }
}
</script>

<style>

</style>

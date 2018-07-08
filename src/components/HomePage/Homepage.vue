<template>
  <div class='HomePage'>
    <Home-header :HomePageSwiperArr = "HomePageSwiperArr"/>
    <Home-swiper :HomePageSwiperArr = "HomePageSwiperArr"/>
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
  },
  computed: {
    HomePageSwiperArr () {
      return this.$store.state.HomePageSwiperArr
    }
  }
}
</script>

<style lang='less' scope>
</style>

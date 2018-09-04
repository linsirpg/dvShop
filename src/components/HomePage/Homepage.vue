<template>
  <div class='HomePage'>
    <Home-header :HomePageSwiperArr = "HomePageSwiperArr"/>
    <loading v-if='loadingFlage'/>
    <Home-swiper :HomePageSwiperArr = "HomePageSwiperArr" v-bind:style="{'opacity':loadingFlage ? '0':'1'}"/>
  </div>
</template>

<script>
import HomeSwiper from './components/HomeSwiper.vue'
import HomeHeader from './components/HomeHeader.vue'
import loading from './components/loading.vue'

export default {
  name: 'homePage',
  components: {
    HomeSwiper,
    HomeHeader,
    loading
  },
  data () {
    return {
      loadingFlage: true
    }
  },
  created () {
  },
  watch: {
    Flage () {
      if (this.$store.state[this.$route.name].Flage >= 5) {
        this.loadingFlage = false
      } else {
        this.loadingFlage = true
      }
    }
  },
  computed: {
    HomePageSwiperArr () {
      return this.$store.state.HomePageSwiperArr
    },
    Flage () {
      return this.$store.state[this.$route.name].Flage
    }
  }
}
</script>

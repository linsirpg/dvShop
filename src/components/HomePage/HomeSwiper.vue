<template>
  <div class='HomeSwiper'>
      <swiper :options='HomeSwiper' ref='HomePageSwiperArr'>
        <swiper-slide  v-for='(data, index) in HomePageSwiperArr'   :key='index'>
          <router-view  :name='data.Url.toLocaleLowerCase()' ></router-view>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HomeSwiper',
  props: ['HomePageSwiperArr'],
  data () {
    return {
      HomeSwiper: {
        resistanceRatio: 0,
        touchRatio: 0.6,
        on: {
          transitionEnd () {
            var routerFrom = this.app.HomePageSwiperArr[this.activeIndex].Url
            this.app.$router.replace({
              name: routerFrom
            })
          }
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    HomeSwiperArr () {
      return this.$refs.HomePageSwiperArr.swiper
    }
  },
  watch: {
    $route () {
      var This = this
      this.HomePageSwiperArr.map(function (data, index) {
        if (data.Url === This.$route.meta.loadname) {
          This.HomeSwiperArr.slideTo(index, 0, false)
        }
      })
    }
  },
  mounted () {
    this.HomeSwiperArr.app = this
  },
  created () {
    var This = this
    var HomeSwiperTimer = setInterval(function () {
      if (This.HomePageSwiperArr && This.HomeSwiperArr && This.HomePageSwiperArr.length) {
        This.HomePageSwiperArr.map(function (data, index) {
          if (data.Url === This.$route.meta.loadname) {
            This.HomeSwiperArr.slideTo(index, 0, false)
          }
        })
        clearInterval(HomeSwiperTimer)
      }
    }, 30)
  }
}
</script>

<style scope lang='less'>
@rem: 46.875rem;
.HomeSwiper{
  box-sizing: border-box;
  padding-top: 180/@rem;
}

</style>

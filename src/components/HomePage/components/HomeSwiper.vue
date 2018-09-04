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
      ActiveIndex: 0,
      LimitHeight: 0,
      HomeSwiper: {
        resistanceRatio: 0,
        touchRatio: 0.6,
        on: {
          touchStart () {
            var ScTop = document.documentElement.scrollTop || document.body.scrollTop
            if (this.app && this.app.HomePageSwiperArr) {
              if (this.app.HomePageSwiperArr[this.activeIndex + 1]) {
                this.slides.eq(this.activeIndex + 1).css('transform', 'translate3d(0,' + (ScTop - this.app.$store.state[this.app.HomePageSwiperArr[this.activeIndex + 1].Url + 'ScrollTop']) + 'px, 0)')
              }
              if (this.app.HomePageSwiperArr[this.activeIndex - 1]) {
                this.slides.eq(this.activeIndex - 1).css('transform', 'translate3d(0,' + (ScTop - this.app.$store.state[this.app.HomePageSwiperArr[this.activeIndex - 1].Url + 'ScrollTop']) + 'px, 0)')
              }
            }
          },
          transitionEnd () {
            var routerFrom = this.app.HomePageSwiperArr[this.activeIndex].Url
            this.app.$router.replace({
              name: routerFrom
            })
            if (this.app && this.app.HomePageSwiperArr) {
              this.app.LimitHeight = this.slides.eq(this.activeIndex)[0].clientHeight
              if (this.app.$store.state[this.app.$route.name].Flage >= 6) {
                document.getElementsByClassName('HomeSwiper')[0].style.height = this.app.LimitHeight + 'px'
                document.documentElement.scrollTop = document.body.scrollTop = this.app.$store.state[this.app.HomePageSwiperArr[this.activeIndex].Url + 'ScrollTop']
                this.slides.eq(this.activeIndex).css('transform', 'translate3d(0,0,0)')
              } else {
                document.documentElement.scrollTop = document.body.scrollTop = 0
                this.slides.eq(this.activeIndex).css('transform', 'translate3d(0,0,0)')
              }
            }
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
      if (!this.$store.state[this.$route.name].Flage && this.$route.meta.Class === 'A') {
        this.$store.dispatch('get' + this.$route.name, {app: this})
      }
      var This = this
      this.HomePageSwiperArr.map(function (data, index) {
        if (data.Url === This.$route.meta.loadname) {
          This.HomeSwiperArr.slideTo(index, 0, false)
        }
      })
      var HomeSwiperTimer = setInterval(function () {
        if (This.HomeSwiperArr && This.HomePageSwiperArr && This.HomePageSwiperArr.length && This.$store.state[This.$route.name].Flage >= 6) {
          This.HomePageSwiperArr.map(function (data, index) {
            if (data.Url === This.$route.name) {
              This.ActiveIndex = index
              This.LimitHeight = This.HomeSwiperArr.slides.eq(index)[0].clientHeight
            }
          })
          document.getElementsByClassName('HomeSwiper')[0].style.height = this.LimitHeight + 'px'
          document.getElementsByClassName('HomeSwiper')[0].style.overflow = 'hidden'
          clearInterval(HomeSwiperTimer)
        }
      }, 30)
    }
  },
  mounted () {
    this.HomeSwiperArr.app = this
    window.addEventListener('scroll', this.AppScroll, false)
  },
  created () {
    this.$store.dispatch('get' + this.$route.name, {app: this})
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
  },
  methods: {
    AppScroll () {
      var This = this
      if (document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight < 300 || document.body.scrollHeight - document.body.scrollTop - document.documentElement.clientHeight < 300) {
        this.$store.dispatch('getMoreDate', {KindName: this.$route.meta.KindName, RouteName: this.$route.name, limit: this.$route.meta.limit})
      }
      if (this.HomeSwiperArr && this.HomePageSwiperArr && this.$store.state[this.$route.name].Flage >= 6) {
        this.HomePageSwiperArr.map(function (data, index) {
          if (data.Url === This.$route.name) {
            This.ActiveIndex = index
            This.LimitHeight = This.HomeSwiperArr.slides.eq(index)[0].clientHeight
          }
        })
        document.getElementsByClassName('HomeSwiper')[0].style.height = this.LimitHeight + 'px'
        document.getElementsByClassName('HomeSwiper')[0].style.overflow = 'hidden'
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.AppScroll, false)
  }
}
</script>

<style scope lang='less'>
@rem: 46.875rem;
.HomeSwiper{
  box-sizing: border-box;
  padding-top: 180/@rem;
  opacity: 0;
  overflow: hidden;
  margin-bottom:100/@rem;
}

</style>

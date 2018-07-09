<template>
  <div class='HomeHeader'>
    <div class='HomeHeader-Search'>
        <a class='HomeHeader-Search-Image' href="https://gdtvshop.weixinmvp.com/Wap/Shop/Search.aspx"><img src = "../../assets/images/logo.png"  alt="" ></a>
        <a class='HomeHeader-Message' href='https://gdtvshop.weixinmvp.com/wap/member/MessageIndex.aspx' > <img src="../../assets/images/message.png" alt=""  ></a>
    </div>
      <swiper class='HomeHeader-Swiper' :options="HeaderSwiperOption" ref = "HeaderSwiper">
          <!-- <swiper-slide :class='"HomeHeader-Swiper"+index' v-for='(data, index) in HomePageSwiperArr' :key='index' >{{data.Title}}</swiper-slide> -->
          <swiper-slide :class="'HomeHeader-Swiper'+index" v-for='(data,index) in HomePageSwiperArr' :key='index'><router-link tag='span'  replace :to="{name:data.Url}">{{data.Title}}</router-link></swiper-slide>
      </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HomeTop',
  props: ['HomePageSwiperArr'],
  data () {
    return {
      HeaderSwiperOption: {
        freeMode: true,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        on: {
          init () {},
          click (e) {
          }
        }
      }
    }
  },
  watch: {
    $route () {
      var This = this
      if (this.HeaderSwiper && This.HomePageSwiperArr.length && this.HeaderSwiper.slides.length && this.HeaderSwiper.slides.length === This.HomePageSwiperArr.length) {
        var tSpeed = 300
        var activeIndex = 0
        This.HomePageSwiperArr.map(function (data, index) {
          if (data.Url === This.$route.meta.loadname) {
            activeIndex = index
          }
        })
        if (activeIndex > 0) {
          this.HeaderSwiper.slides.eq(activeIndex - 1).transition(tSpeed)
        }
        if (activeIndex < this.HeaderSwiper.slides.length) {
          this.HeaderSwiper.slides.eq(activeIndex + 1).transition(tSpeed)
        }
        var navWidth = 0
        for (var i = 0; i < this.HeaderSwiper.slides.length; i++) {
          navWidth += parseInt(this.HeaderSwiper.slides.eq(i).outerWidth(true))
        }
        var navActiveSlideLeft = this.HeaderSwiper.slides[activeIndex]
          .offsetLeft
        var navSlideWidth = this.HeaderSwiper.slides
          .eq(activeIndex)
          .outerWidth(true)
        this.HeaderSwiper.setTransition(tSpeed)
        var clientWidth = parseInt(
          this.HeaderSwiper.$wrapperEl.outerWidth(true)
        )
        if (navActiveSlideLeft < (clientWidth - parseInt(navSlideWidth)) / 2) {
          this.HeaderSwiper.setTranslate(0)
        } else if (
          navActiveSlideLeft >
          navWidth - (parseInt(navSlideWidth) + clientWidth) / 2
        ) {
          this.HeaderSwiper.setTranslate(clientWidth - navWidth)
        } else {
          this.HeaderSwiper.setTranslate(
            (clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft
          )
        }
      }
    }
  },
  computed: {
    HeaderSwiper () {
      return this.$refs.HeaderSwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    var This = this
    var HomeHeaderTimer = setInterval(function () {
      if (This.HeaderSwiper && This.HomePageSwiperArr.length) {
        var tSpeed = 0
        var activeIndex = 0
        This.HomePageSwiperArr.map(function (data, index) {
          if (data.Url === This.$route.meta.loadname) {
            activeIndex = index
          }
        })
        if (This.HeaderSwiper.slides[activeIndex]) {
          if (activeIndex > 0) {
            This.HeaderSwiper.slides.eq(activeIndex - 1).transition(tSpeed)
          }
          if (activeIndex < This.HeaderSwiper.slides.length) {
            This.HeaderSwiper.slides.eq(activeIndex + 1).transition(tSpeed)
          }
          var navWidth = 0
          for (var i = 0; i < This.HeaderSwiper.slides.length; i++) {
            navWidth += parseInt(
              This.HeaderSwiper.slides.eq(i).outerWidth(true)
            )
          }
          var navActiveSlideLeft =
            This.HeaderSwiper.slides[activeIndex].offsetLeft
          var navSlideWidth = This.HeaderSwiper.slides
            .eq(activeIndex)
            .outerWidth(true)
          This.HeaderSwiper.setTransition(tSpeed)
          var clientWidth = parseInt(
            This.HeaderSwiper.$wrapperEl.outerWidth(true)
          )
          if (
            navActiveSlideLeft <
            (clientWidth - parseInt(navSlideWidth)) / 2
          ) {
            This.HeaderSwiper.setTranslate(0)
          } else if (
            navActiveSlideLeft >
            navWidth - (parseInt(navSlideWidth) + clientWidth) / 2
          ) {
            This.HeaderSwiper.setTranslate(clientWidth - navWidth)
          } else {
            This.HeaderSwiper.setTranslate(
              (clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft
            )
          }
        }
        clearInterval(HomeHeaderTimer)
      }
    }, 30)
  }
}
</script>

<style scoped lang='less'>
@rem: 46.875rem;
.HomeHeader {
  position: fixed;
  background: white;
  z-index: 100;
  width: 100%;
  .HomeHeader-Search {
    padding-top: 10 / @rem;
    width: 100%;
    overflow: hidden;
    .HomeHeader-Search-Image {
      width: 650 / @rem;
      float: left;
      height: 100%;
      display: block;
      background: transparent;
      box-sizing: border-box;
      padding-left: 10 / @rem;
      position: relative;
      img {
        width: 650 / @rem;
      }
    }
    .HomeHeader-Message {
      width: 100 / @rem;
      float: left;
      height: 100%;
      display: block;
      box-sizing: border-box;
      padding-left: 26 / @rem;
      background: transparent;
      box-sizing: border-box;
      margin-top: 2 / @rem;
      img {
        width: 80%;
      }
    }
  }
  .HomeHeader-Swiper {
    color: #6e6e6e;
    height: 90 / @rem;
    line-height: 90 / @rem;
    z-index: 10000;
    width: auto;
    background: white;
    .swiper-slide {
      width: 170 / @rem;
      font-size: 30 / @rem;
      padding-left: 12 / @rem;
      text-align: center;
      span {
        display: inline-block;
        height: 70%;
        line-height: 66 / @rem;
        overflow: hidden;
        margin-top: 10 / @rem;
      }
    }
    .HomeHeader-Swiper0 {
      width: 80 / @rem;
    }
    .router-link-active {
      border-bottom: 2px solid #b4282d;
      color: #b4282d;
      font-weight: 580;
    }
  }
}
</style>

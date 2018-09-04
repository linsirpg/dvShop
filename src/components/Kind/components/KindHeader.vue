<template>
  <div class='CatetoryHeader'>
    <div class='title'>
      {{DateTitle}}
    </div>
    <swiper :options='CatetoryHeaderSwiper' ref='CatetoryHeaderSwiperArr' class = 'CatetoryHeader-Swiper'>
      <swiper-slide :class="'CatetoryHeader-Swiper-Slide'" v-for='(item,index) in Data' :key='index'>
        <router-link tag='span' exact replace :to="{path:'/Catetory/'+ $route.params.Id +'/kind/'+ $route.params.id, query:{id:item.Id}}">{{item.Title}}</router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: ['Data', 'DateTitle'],
  data () {
    return {
      // Data: [],
      CatetoryHeaderSwiper: {
        freeMode: true,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true
      }
    }
  },
  watch: {
    $route () {
      var This = this
      if (this.CatetoryHeaderSwiperArr && This.Data.length && this.CatetoryHeaderSwiperArr.slides.length && this.CatetoryHeaderSwiperArr.slides.length === This.Data.length) {
        var tSpeed = 300
        var activeIndex = 0
        This.Data.map(function (data, index) {
          if (data.Id === This.$route.query.id) {
            activeIndex = index
          }
        })
        if (activeIndex > 0) {
          this.CatetoryHeaderSwiperArr.slides.eq(activeIndex - 1).transition(tSpeed)
        }
        if (activeIndex < this.CatetoryHeaderSwiperArr.slides.length) {
          this.CatetoryHeaderSwiperArr.slides.eq(activeIndex + 1).transition(tSpeed)
        }
        var navWidth = 0
        for (var i = 0; i < this.CatetoryHeaderSwiperArr.slides.length; i++) {
          navWidth += parseInt(this.CatetoryHeaderSwiperArr.slides.eq(i).outerWidth(true))
        }
        var navActiveSlideLeft = this.CatetoryHeaderSwiperArr.slides[activeIndex]
          .offsetLeft
        var navSlideWidth = this.CatetoryHeaderSwiperArr.slides
          .eq(activeIndex)
          .outerWidth(true)
        this.CatetoryHeaderSwiperArr.setTransition(tSpeed)
        var clientWidth = parseInt(
          this.CatetoryHeaderSwiperArr.$wrapperEl.outerWidth(true)
        )
        if (navActiveSlideLeft < (clientWidth - parseInt(navSlideWidth)) / 2) {
          this.CatetoryHeaderSwiperArr.setTranslate(0)
        } else if (
          navActiveSlideLeft >
          navWidth - (parseInt(navSlideWidth) + clientWidth) / 2
        ) {
          this.CatetoryHeaderSwiperArr.setTranslate(clientWidth - navWidth)
        } else {
          this.CatetoryHeaderSwiperArr.setTranslate(
            (clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft
          )
        }
      }
    }
  },
  computed: {
    CatetoryHeaderSwiperArr () {
      return this.$refs.CatetoryHeaderSwiperArr.swiper
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    var This = this
    var HomeSwiperTimer = setInterval(function () {
      if (This.CatetoryHeaderSwiperArr && This.Data.length) {
        var tSpeed = 0
        var activeIndex = 0
        This.Data.map(function (data, index) {
          if (data.Id === This.$route.query.id) {
            activeIndex = index
          }
        })
        if (This.CatetoryHeaderSwiperArr.slides[activeIndex]) {
          if (activeIndex > 0) {
            This.CatetoryHeaderSwiperArr.slides.eq(activeIndex - 1).transition(tSpeed)
          }
          if (activeIndex < This.CatetoryHeaderSwiperArr.slides.length) {
            This.CatetoryHeaderSwiperArr.slides.eq(activeIndex + 1).transition(tSpeed)
          }
          var navWidth = 0
          for (var i = 0; i < This.CatetoryHeaderSwiperArr.slides.length; i++) {
            navWidth += parseInt(
              This.CatetoryHeaderSwiperArr.slides.eq(i).outerWidth(true)
            )
          }
          var navActiveSlideLeft =
            This.CatetoryHeaderSwiperArr.slides[activeIndex].offsetLeft
          var navSlideWidth = This.CatetoryHeaderSwiperArr.slides
            .eq(activeIndex)
            .outerWidth(true)
          This.CatetoryHeaderSwiperArr.setTransition(tSpeed)
          var clientWidth = parseInt(
            This.CatetoryHeaderSwiperArr.$wrapperEl.outerWidth(true)
          )
          if (
            navActiveSlideLeft <
            (clientWidth - parseInt(navSlideWidth)) / 2
          ) {
            This.CatetoryHeaderSwiperArr.setTranslate(0)
          } else if (
            navActiveSlideLeft >
            navWidth - (parseInt(navSlideWidth) + clientWidth) / 2
          ) {
            This.CatetoryHeaderSwiperArr.setTranslate(clientWidth - navWidth)
          } else {
            This.CatetoryHeaderSwiperArr.setTranslate(
              (clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft
            )
          }
        }
        clearInterval(HomeSwiperTimer)
      }
    }, 30)
  }
}
</script>

<style scope lang='less'>
@rem: 46.875rem;
.CatetoryHeader{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    overflow: hidden;
    width:100%;
    .title{
    font-size: .85333333rem;
    margin: 0;
    background: #fff;
    width: 100%;
    height: 1.792rem;
    color: #5d5d5d;
    font-weight: 500;
    line-height: 1.792rem;
    text-align: center;
  }
  .CatetoryHeader-Swiper{
    width: auto;
    background: white;
  .router-link-active {
    border-bottom: 2px solid #b4282d;
    color: #b4282d;
    font-weight: 580;
  }
    active {
      color: white;
    }
    .swiper-slide {
      width: 170/@rem;
      font-size: 30/@rem;
      height: 60/@rem;
      line-height: 60/@rem;
      padding: 0 20/@rem;
      box-sizing: border-box;
      margin-bottom: 2px;
      text-align: center;
      span {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
    .CatetoryHeader-Swiper-Slide{
      width:25%;
      text-align: center;
    }
  }
}
</style>

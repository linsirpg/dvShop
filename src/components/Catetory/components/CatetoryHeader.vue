<template>
  <div class='CatetoryHeader'>
    <div class='title'>
      ddd
    </div>
    <swiper :options='CatetoryHeaderSwiper' ref='CatetoryHeaderSwiperArr'>
      <swiper-slide>
        111
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      CatetoryHeaderSwiper: {
        freeMode: true,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
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
}
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
</style>

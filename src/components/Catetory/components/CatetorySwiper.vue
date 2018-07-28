<template>
  <swiper class='CatetoryContent'>
    <swiper-slide v-for="(item, index) in Data" :key='index'>
      {{item}}
    </swiper-slide>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: ['Data'],
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang='less' scope>
@rem: 46.875rem;
.CatetoryContent{
  margin-top:200/@rem;
}
</style>

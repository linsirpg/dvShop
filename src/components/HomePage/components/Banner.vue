<template>
  <div class='HomePage-Banner'>
    <swiper class='HomePage-Swiper'  v-if="Data && Data.length > 1" :options = 'HomePageBannerSwiper'>
      <swiper-slide v-for = '(item, index) in Data' :key ='index'>
        <a :href="item.Url"><img :src="item.ImageUrl | AnalysisImg" alt=""></a>
      </swiper-slide>
      <div class='swiper-pagination' v-if="Data && Data.length > 1"  slot ='pagination'></div>
    </swiper>
    <div>
        <a v-if='Data && Data.length == 1' :href="Data[0].Url?Data[0].Url:'javascript:void(0)'">
          <img :src="Data[0].ImageUrl | AnalysisImg" v-if='Data[0]' alt="">
        </a>
    </div>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  props: ['Data'],
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      HomePageBannerSwiper: {
        loop: true,
        autoplay: {
          delay: 3000
        },
        speed: 500,
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'my-bullet-active'
        }
      }
    }
  }
}
</script>

<style scope lang='less'>
.HomePage-Banner{
  .HomePage-Swiper{
    overflow: hidden;
    .my-bullet-active{
      background:#ba3d3f;
      opacity: 1;
    }
  }
  img{
    width:100%;
    vertical-align:bottom;
  }
}

</style>

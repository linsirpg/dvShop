<template>
  <div class='CatetoryKind'>
    <div>
      <swiper>
        <swiper-slide v-for= "(item, index) in SwiperArr" :key='index'>
          <div class='kinditem' v-for="(item, itemindex) in Data.slice(index*9,index*9+9)" :key='itemindex'>
            <img :src="item.Image | AnalysisImg" alt="" style='width:100%;'>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: ['Data'],
  components: {
    swiper,
    swiperSlide
  },
  created () {
    console.log(this.Data)
  },
  computed: {
    SwiperArr () {
      var array = []
      if (this.Data) {
        array.length = Math.ceil(this.Data.length / 9)
      }
      return array
    }
  }
}
</script>

<style>

</style>

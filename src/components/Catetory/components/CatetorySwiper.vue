<template>
  <swiper class='CatetoryContent'  :options='CatetorySwiper' ref='CatetoryPageSwiper'>
    <swiper-slide v-for="(item, index) in Data" :key='index'>
      <Recommend :Data ="ProductData[index]"/>
    </swiper-slide>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Recommend from './Recommend.vue'
export default {
  props: ['Data', 'ProductData'],
  name: 'CatetorySwiper',
  components: {
    swiper,
    swiperSlide,
    Recommend
  },
  data () {
    return {
      CatetorySwiper: {
        resistanceRatio: 0,
        touchRatio: 0.6,
        on: {
          touchStart () {
          },
          transitionEnd () {
            var routerFrom = this.app.Data[this.activeIndex].Url
            this.app.$router.replace({
              query: {id: routerFrom}
            })
          }
        }
      }
    }
  },
  computed: {
    CatetorySwiperArr () {
      return this.$refs.CatetoryPageSwiper.swiper
    }
  },
  watch: {
    $route () {
      var This = this
      this.$store.dispatch('getCatetoryById', {id: this.$route.query.id, CateName: this.$route.params.id, Name: this.$route.name})
      this.Data.map(function (data, index) {
        if (data.Url === This.$route.query.id) {
          This.CatetorySwiperArr.slideTo(index, 0, false)
        }
      })
    }
  },
  mounted () {
    this.CatetorySwiperArr.app = this
    window.addEventListener('scroll', this.CatetoryScroll, false)
  },
  methods: {
    CatetoryScroll () {
      var This = this
      if (document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight < 300 || document.body.scrollHeight - document.body.scrollTop - document.documentElement.clientHeight < 300) {
        this.$store.dispatch('getMoreCateData', {id: this.$route.query.id, CateName: this.$route.params.id, Name: this.$route.name, limit: this.$route.meta.limit})
      }
    }
  },
  created () {
    var This = this
    var CatetorySwiperTimer = setInterval(function () {
      if (This.Data && This.CatetorySwiperArr && This.Data.length) {
        This.Data.map(function (data, index) {
          if (data.Url === This.$route.query.id) {
            This.CatetorySwiperArr.slideTo(index, 0, false)
          }
        })
        clearInterval(CatetorySwiperTimer)
      }
    }, 30)
  }
}
</script>
<style lang='less' scope>
@rem: 46.875rem;
.CatetoryContent{
  margin-top:200/@rem;
}
</style>

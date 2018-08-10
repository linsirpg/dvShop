<template>
  <swiper class='CatetoryContent'  :options='CatetorySwiper' ref='CatetoryPageSwiper'>
    <swiper-slide v-for="(item, index) in Data" :key='index'>
      <Catetory-kind :Data ='JSON.parse(item.NavigationConfig)'/>
      <Recommend :Data ="ProductData[index]"/>
    </swiper-slide>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Recommend from './Recommend.vue'
import CatetoryKind from './CatetoryKind.vue'

export default {
  props: ['Data', 'ProductData'],
  name: 'CatetorySwiper',
  components: {
    swiper,
    swiperSlide,
    Recommend,
    CatetoryKind
  },
  data () {
    return {
      CatetorySwiper: {
        resistanceRatio: 0,
        touchRatio: 0.6,
        on: {
          touchStart () {
            var ScTop = document.documentElement.scrollTop || document.body.scrollTop
            if (this.app && this.app.Data) {
              if (this.app.Data[this.activeIndex + 1]) {
                this.slides.eq(this.activeIndex + 1).css('transform', 'translate3d(0,' + (ScTop - this.app.$store.state[this.app.$route.name + 'ScrollTop' + this.app.Data[this.activeIndex + 1].Url]) + 'px, 0)')
              }
              if (this.app.Data[this.activeIndex - 1]) {
                this.slides.eq(this.activeIndex - 1).css('transform', 'translate3d(0,' + (ScTop - this.app.$store.state[this.app.$route.name + 'ScrollTop' + this.app.Data[this.activeIndex - 1].Url]) + 'px, 0)')
              }
            }
          },
          transitionEnd () {
            var routerFrom = this.app.Data[this.activeIndex].Url
            this.app.$router.replace({
              query: {id: routerFrom}
            })
            if (this.app && this.app.Data) {
              this.app.LimitHeight = this.slides.eq(this.activeIndex)[0].clientHeight
              document.getElementsByClassName('Catetory')[0].style.height = this.app.LimitHeight + 'px'
              document.documentElement.scrollTop = document.body.scrollTop = this.app.$store.state[this.app.$route.name + 'ScrollTop' + this.app.Data[this.activeIndex].Url]
              this.slides.eq(this.activeIndex).css('transform', 'translate3d(0,0,0)')
            }
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
      var CatetorySwiperTimer = setInterval(function () {
        if (This.CatetorySwiperArr && This.Data && This.Data.length) {
          This.Data.map(function (data, index) {
            if (data.Url === This.$route.query.id) {
              This.ActiveIndex = index
              if (This.ProductData[index].length) {
                This.LimitHeight = This.CatetorySwiperArr.slides.eq(index)[0].clientHeight
                document.getElementsByClassName('Catetory')[0].style.height = This.LimitHeight + 'px'
                document.getElementsByClassName('Catetory')[0].style.overflow = 'hidden'
                clearInterval(CatetorySwiperTimer)
              }
            }
          })
        }
      }, 30)
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
      if (This.CatetorySwiperArr && This.Data && This.Data.length) {
        This.Data.map(function (data, index) {
          if (data.Url === This.$route.query.id) {
            This.ActiveIndex = index
            if (This.ProductData[index].length) {
              This.LimitHeight = This.CatetorySwiperArr.slides.eq(index)[0].clientHeight
              document.getElementsByClassName('Catetory')[0].style.height = This.LimitHeight + 'px'
              document.getElementsByClassName('Catetory')[0].style.overflow = 'hidden'
            }
          }
        })
      }
    }
  },
  created () {
    console.log(this.Data)
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
  },
  destroyed () {
    window.removeEventListener('scroll', this.CatetoryScroll, false)
  }
}
</script>
<style lang='less' scope>
@rem: 46.875rem;
.CatetoryContent{
  margin-top:200/@rem;
}
</style>

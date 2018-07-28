<template>
  <div class='CatetoryHeader'>
    <div class='title'>
      {{11}}
    </div>
    <swiper :options='CatetoryHeaderSwiper' ref='CatetoryHeaderSwiperArr' class = 'CatetoryHeader-Swiper'>
      <swiper-slide :class="'CatetoryHeader-Swiper-Slide'" v-for='(item,index) in Data' :key='index'>
        <router-link tag='span' exact replace :to="{path:'/Catetory/'+ $route.params.id, query: {id:item.Url}}">{{item.Title}}</router-link>
              <!-- <router-link  exact :to="{path:'/catetory/'+data ,query: {id: bannerLlis[index]}} " replace   >{{item}}</router-link> -->
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: ['Data'],
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
  created () {
    console.log(this.$route, 12)
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

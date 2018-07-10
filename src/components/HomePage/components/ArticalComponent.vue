<template>
  <div class='HomePageArtical' v-if='Data && Data.length > 0'>
    <a class='title'>
      必买清单
    </a>
    <swiper :options="articalSwiper" ref="ArticalSwiper" >
      <swiper-slide v-for="(item,index) in Data" :key="index">
        <a :href="item.Url" >
          <img :src="item.ImageUrl | AnalysisImg" alt="">
            <div class='artiaclleft'>
              <div>
                <div class='articaltitle'>{{item.Title}}</div>
                  <div class='articaldescribe'>{{item.Describe}}</div>
                </div>
             </div>
             <div class='articalright'>
              {{item.Param1}}
             </div>
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'articalSwiper',
  props: ['Data'],
  data () {
    return {
      articalSwiper: {
        followFinger: true,
        centeredSlides: true,
        slidesPerView: 1.1,
        autoplayDisableOnInteraction: false,
        loopedSlides: 1,
        coverflow: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0
        },
        on: {
          init () {
            var clickSlide = this.slides.eq(this.activeIndex)
            this.slides.find('div').css('display', 'none')
            clickSlide.find('div').css('display', 'block')
          },
          transitionStart () {
            var clickSlide = this.slides.eq(this.activeIndex)
            this.slides.find('div').css('display', 'none')
            clickSlide.find('div').css('display', 'block')
          }
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang='less'>
@rem: 46.875rem;
.HomePageArtical {
  background: white;
  margin-top: 15/@rem;
  height: 570/@rem;
  overflow: hidden;
  .swiper-slide {
    box-sizing:border-box;
    padding-right: 36/@rem;
    box-sizing: border-box;
    overflow: hidden;
    background: white;
    &:last-of-type{
       padding-right:0/@rem;
    }
    a {
      display: block;
      color: black;
      background: white;
      overflow: hidden;
      img {
        height: 340/@rem;
        display: block;
        width:100%;
        border-radius: 8px;
      }
    }
    .artiaclleft {
      float: left;
      box-sizing: border-box;
      padding-top: 10/@rem;
      width: 500/@rem;
      height: 115/@rem;

    }
    .articaltitle {
      height: 44/@rem;
      line-height: 44/@rem;
      font-size: 32/@rem;
      color: #565656;
      overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
    .articaldescribe {
      font-size: 28/@rem;
      height: 50/@rem;
      line-height: 50/@rem;
      color: #b1b1b1;
      overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
    .articalright {
      box-sizing: border-box;
      padding-top: 10/@rem;
      height: 44/@rem;
      line-height: 44/@rem;
      width: 160/@rem;
      text-align: right;
      font-size: 32/@rem;
      color: #b4282d;
      float: right;
          overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
  }
  .title {
    width: 100%;
    display:block;
    height: 100/@rem;
    line-height: 100/@rem;
    text-align: center;
    position: relative;
    font-size: 40/@rem;
    font-weight: 580;
    background: white;
    color: #6e6e6e;
     span{
      position:absolute;
      right:10/@rem;
      top:0;
      font-size:24/@rem;
      color:#9a9a9a;
    }
    img {
      position: absolute;
      width: 36/@rem;
      line-height: 100/@rem;
      display: inline-block;
           vertical-align:bottom;
      left: 470/@rem;
      top: 34/@rem;
    }
  }
}
</style>

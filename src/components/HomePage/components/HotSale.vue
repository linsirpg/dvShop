<template>
  <div class='HotSale' v-if='Data && Data.length > 0'>
    <div class='hotsaletitle'>热卖爆款</div>
      <div class='HotSale-Swiper'>
        <swiper :options="HotSaleSwiper" >
          <swiper-slide v-for='(item, index) in DataArr' :key='index'>
            <div v-for='(product, productIndex) in Data.slice(index*9,index*9+9)' :key='productIndex'>
              <a :href="product.Url">
                  <!-- <img :src="product.ImageUrl | AnalysisImg" alt=""> -->
                  <img v-lazy="product.ImageUrl" alt="">
                  <div class='hotsaleName'>{{product.Title}}</div>
                  <div class='hotsalePrice'>已售{{product.Param3}}</div>
              </a>
            </div>
            <a v-if='index == 2'>
              <img src="../../../assets/images/more.jpg" alt="" style='width:100%;'>
            </a>
          </swiper-slide>
          <div class="Hot-swiper-pagination"  slot="pagination"></div>
        </swiper>
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
      HotSaleSwiper: {
        resistanceRatio: 0,
        pagination: {
          el: '.Hot-swiper-pagination',
          bulletActiveClass: 'area-bullet-active'
        }
      }
    }
  },
  computed: {
    DataArr () {
      var array = []
      if (this.Data) {
        array.length = Math.ceil(this.Data.length / 9)
      }
      return array
    }
  }
}
</script>

<style scope lang='less'>
@rem: 46.875rem;
.HotSale{
    .hotsaletitle{
        width: 100%;
        height: 100/@rem;
        line-height: 100/@rem;
        text-align: center;
        background:white;
        margin: 15/@rem 0 10/@rem;
        color:#565656;
    }
    a{
        text-decoration: none;
        color: #767676;
        background: #f8f8f8;
        width:33.333%;
        float:left;
        padding-left:5/@rem;
        padding-right:5/@rem;
        box-sizing:border-box;
        img{
            width:100%;
        }
        .hotsaleName{
            text-align: center;
            height: 40/@rem;
            line-height: 40/@rem;
            font-size: 28/@rem;
            color:#565656;
            overflow: hidden;
        }
        .hotsalePrice{
            color:#a7a7a7;
            line-height: 40/@rem;
            font-size: 24/@rem;
            font-weight: 500;
            text-align: center;
        }
    }
}

.Hot-swiper-pagination{
  text-align:center ;
  span{
    position: relative;
    top:-6px;

  }
}
.area-bullet-active{
  background: #ba3d3f !important;
  opacity: 1;
}
</style>

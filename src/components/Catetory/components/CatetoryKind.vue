<template>
  <div class='CatetoryKind'>
    <swiper :options='CatetoryKindSwiper'>
      <swiper-slide v-for= "(item, index) in SwiperArr" :key='index'>
        <router-link  :to="{path:'/Catetory/'+ $route.params.id +'/kind/'+ $route.query.id, query:{id:item.Id}}" :class="Data.slice(index*9,index*9+9).length == 9 || Data.length == 7? 'kind-list' + (Data.slice(index*9,index*9+9).length + 1) : 'kind-list' + Data.slice(index*9,index*9+9).length " v-for="(item, itemindex) in Data.slice(index*9,index*9+9)" :key='itemindex'>
          <div  class='kind-list-Img'>
            <img :src="item.Image | AnalysisImg" alt="" >
          </div>
          <div>
            {{item.Title}}
          </div>
        </router-link>
        <router-link :to="{}" v-if='Data.length == 7' class='kind-list8'>
          <div  class='kind-list-Img'>
            <img src="../../../assets/images/more.png" alt="">
          </div>
          <div>
            更多
          </div>
        </router-link>
        <div v-if='Data.slice(index*9,index*9+9).length == 9' class='kind-list10'>
          <div  class='kind-list-Img'>
            <img src="../../../assets/images/more.png" alt="">
          </div>
          <div>
            滑动更多
          </div>
        </div>
      </swiper-slide>
    </swiper>
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
  data () {
    return {
      CatetoryKindSwiper: {
        resistanceRatio: 0,
        touchRatio: 0.6
      }
    }
  },
  created () {
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

<style lang='less' scope>
@rem: 46.875rem;
.CatetoryKind{
  overflow: hidden;
  .kind-list10, .kind-list5 {
    text-align: center;
    background: white;
    display: block;
    width: 20%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    color: #929292;
    .kind-list-Img {
      height: 120/@rem;
      width: 100%;
      position: relative;
      img {
        padding: 5px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        width: 90/@rem;
        height: 90/@rem;
        left: ((750-90*5)/10)/@rem;
      }
    }
    div {
      width: 100%;
      height: 60/@rem;
      line-height: 60/@rem;
      font-size:28/@rem;
    }
  }
  .kind-list4, .kind-list8{
    text-align: center;
    background: white;
    display: block;
    width: 25%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    color: #929292;
    .kind-list-Img {
      height: 120/@rem;
      width: 100%;
      position: relative;
      img {
        padding: 5px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        width: 90/@rem;
        height: 90/@rem;
        left: ((750-90*4)/8)/@rem;
      }
    }
    div {
      width: 100%;
      height: 60/@rem;
      line-height: 60/@rem;
      font-size:28/@rem;
    }
  }
  .kind-list6, .kind-list3{
    text-align: center;
    background: white;
    display: block;
    width: 33.333%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    color: #929292;
    .kind-list-Img {
      height: 120/@rem;
      width: 100%;
      position: relative;
      img {
        padding: 5px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        width: 90/@rem;
        height: 90/@rem;
        left: ((750-90*3)/6)/@rem;
      }
    }
    div {
      width: 100%;
      height: 60/@rem;
      line-height: 60/@rem;
      font-size:28/@rem;
    }
  }
  .kind-list2{
    text-align: center;
    background: white;
    display: block;
    width: 50%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    color: #929292;
    .kind-list-Img {
      height: 120/@rem;
      width: 100%;
      position: relative;
      img {
        padding: 5px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        width: 90/@rem;
        height: 90/@rem;
        left: ((750-90*2)/4)/@rem;
      }
    }
    div {
      width: 100%;
      height: 60/@rem;
      line-height: 60/@rem;
      font-size:28/@rem;
    }
  }
}
</style>

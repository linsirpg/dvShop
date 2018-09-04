<template>
  <div class='utils'>
    <div class='totop' @click="toTop()" v-if='topFlage'>
      <img src="../../assets/images/top.png" alt="">
    </div>
    <a class='buoy' :href='BUOY.Url' v-if='BUOY && buoyFlage'>
        <img :src="BUOY.ImageUrl | AnalysisImg " alt="">
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      topFlage: false,
      buoyFlage: true
    }
  },
  computed: {
    BUOY () {
      return this.$store.state.home.BUOY
    }
  },
  methods: {
    toTop () {
      document.documentElement.scrollTop = document.body.scrollTop = 0
    },
    UitlScroll () {
      var clientHeight = document.documentElement.clientHeight
      var osTop = document.documentElement.scrollTop || document.body.scrollTop
      if (osTop > clientHeight) {
        this.topFlage = true
      } else {
        this.topFlage = false
      }
    }
  },
  watch: {
    $route () {
      if (this.$route.name === 'home') {
        this.buoyFlage = true
      } else {
        this.buoyFlage = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.UitlScroll, false)
  },
  destroyed () {
    window.removeEventListener('scroll', this.UitlScroll, false)
  }
}
</script>

<style  scope lang='less'>
.utils{
    .totop{
    width: 1.49333333rem;
    height: 1.49333333rem;
    position: fixed;
    bottom: 3.41333333rem;
    right: 1.70666667rem;
    z-index: 100000;
    font-size: 16px;
    right: 1.28rem;
    background: #000;
    opacity: .5;
    text-align: center;
    border-radius: 2px;
    img{
width: 1.06666667rem;
    height: 1.06666667rem;
    margin-top: .21333333rem;
    vertical-align: middle;
    }
}
    .buoy {
        width: 80px;
        position: fixed;
        right: 0px;
        top: 60%;
        animation: qikill 1s 1;
        -webkit-animation: qikill 1s 1;
        z-index: 10000;
        img {
            width: 100%;
        }
    }
}
@keyframes qikill {
  0% {
    transform: translateX(15px) rotate(13deg);
  }
  10% {
    transform: translateX(-30px) rotate(-18deg);
  }
  75% {
    transform: translateX(15px) rotate(13deg);
  }
  100% {
    transform: translateX(0px) rotate(0deg);
  }
}

@-webkit-keyframes qikill {
  0% {
    transform: translateX(15px) rotate(13deg);
  }
  10% {
    transform: translateX(-30px) rotate(-18deg);
  }
  75% {
    transform: translateX(15px) rotate(13deg);
  }
  100% {
    transform: translateX(0px) rotate(0deg);
  }
}
</style>

<template>
  <div>
    <Banner :Data='BANNER'/>
    <Advertising-position :Data='AdversitingOne'/>
    <Hot-sale :Data='HotSaleProduct' />
    <Advertising-position :Data='AdversitingTwo'/>
    <Special-area :Data='HomeSpecialArea'/>
    <Advertising-position :Data='AdversitingThree' />
    <New-product :Data='NewProducts'/>
    <Artical-component :Data='Aritcal'/>
    <Recommend :Data='RecommendProduct'/>
  </div>
</template>

<script>
import Banner from '@/components/HomePage/components/Banner.vue'
import AdvertisingPosition from '@/components/HomePage/components/AdvertisingPosition.vue'
import HotSale from '@/components/HomePage/components/HotSale.vue'
import SpecialArea from '@/components/HomePage/components/SpecialArea.vue'
import NewProduct from '@/components/HomePage/components/NewProduct.vue'
import ArticalComponent from '@/components/HomePage/components/ArticalComponent.vue'
import Recommend from '@/components/HomePage/components/Recommend.vue'
export default {
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('getHome', {app: this})
  },
  computed: {
    BANNER () {
      if (this.$store.state.home.Banner.length) {
        return this.$store.state.home.Banner
      }
    },
    AdversitingOne () {
      if (this.$store.state.home.AdversitingOne.length) {
        return this.$store.state.home.AdversitingOne
      }
    },
    AdversitingTwo () {
      if (this.$store.state.home.AdversitingOne.length) {
        return this.$store.state.home.AdversitingTwo
      }
    },
    HotSaleProduct () {
      if (this.$store.state.home.HotSaleProduct.length) {
        return this.$store.state.home.HotSaleProduct
      }
    },
    HomeSpecialArea () {
      if (this.$store.state.home.HomeSpecialArea.length) {
        return this.$store.state.home.HomeSpecialArea
      }
    },
    AdversitingThree () {
      if (this.$store.state.home.AdversitingThree.length) {
        return this.$store.state.home.AdversitingThree
      }
    },
    NewProducts () {
      if (this.$store.state.home.NewProduct.length) {
        return this.$store.state.home.NewProduct
      }
    },
    Aritcal () {
      if (this.$store.state.home.Aritcal.length) {
        return this.$store.state.home.Aritcal
      }
    },
    RecommendProduct () {
      if (this.$store.state.home.RecommendProduct.length) {
        return this.$store.state.home.RecommendProduct
      }
    }
  },
  components: {
    Banner,
    AdvertisingPosition,
    HotSale,
    SpecialArea,
    NewProduct,
    ArticalComponent,
    Recommend
  }
}
</script>

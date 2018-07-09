<template>
  <div>
    <Banner :Data='BANNER'/>
    <Advertising-position :Data='AdversitingOne'/>
    <Hot-sale :Data='HotSaleProduct' />
  </div>
</template>

<script>
import Banner from '@/components/HomePage/components/Banner.vue'
import AdvertisingPosition from '@/components/HomePage/components/AdvertisingPosition.vue'
import HotSale from '@/components/HomePage/components/HotSale.vue'
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
    HotSaleProduct () {
      if (this.$store.state.home.HotSaleProduct.length) {
        return this.$store.state.home.HotSaleProduct
      }
    }
  },
  components: {
    Banner,
    AdvertisingPosition,
    HotSale
  }
}
</script>

<style>

</style>

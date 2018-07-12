<template>
  <div>
    <Banner :Data = 'BANNER'/>
    <Catetory-list :Data = 'Catetory'/>
    <Catatory-hotsale :Data = 'HotSaleList'/>
    <Category-area :Data = 'CatetoryArea' />
    <New-product :Data = 'NewProduct'/>
  </div>
</template>

<script>
import Banner from '@/components/HomePage/components/Banner.vue'
import CatetoryList from '@/components/HomePage/components/CatetoryList.vue'
import CatatoryHotsale from '@/components/HomePage/components/CatatoryHotSale.vue'
import CategoryArea from '@/components/HomePage/components/CategoryArea.vue'
import NewProduct from '@/components/HomePage/components/NewProduct.vue'
export default {
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('getMs', {})
  },
  computed: {
    BANNER () {
      if (this.$store.state.MS.Banner.length) {
        console.log(this.$store.state.MS.Banner)
        return this.$store.state.MS.Banner
      }
    },
    Catetory () {
      return this.$store.state.MS.CatetoryList
    },
    HotSaleList () {
      return this.$store.state.MS.HotSaleList
    },
    CatetoryArea () {
      console.log(this.$store.state.MS.CatetoryArea, 13)
      return this.$store.state.MS.CatetoryArea
    },
    NewProduct () {
      console.log(this.$store.state.MS.NewProduct, 13)
      return this.$store.state.MS.NewProduct
    }
  },
  components: {
    Banner,
    CatetoryList,
    CatatoryHotsale,
    CategoryArea,
    NewProduct
  }
}
</script>

<style>

</style>

<template>
  <div>
    <Banner :Data = 'BANNER'/>
    <Catetory-list :Data = 'Catetory' :CatetoryName = 'CatetoryName'/>
    <Catatory-hotsale :Data = 'HotSaleList'/>
    <Category-area :Data = 'CatetoryArea' />
    <New-product :Data = 'NewProduct'/>
    <Recommend :Data= 'RecommendProduct'/>
  </div>
</template>

<script>
import Banner from '@/components/HomePage/components/Banner.vue'
import CatetoryList from '@/components/HomePage/components/CatetoryList.vue'
import CatatoryHotsale from '@/components/HomePage/components/CatatoryHotSale.vue'
import CategoryArea from '@/components/HomePage/components/CategoryArea.vue'
import NewProduct from '@/components/HomePage/components/NewProduct.vue'
import Recommend from '@/components/HomePage/components/Recommend.vue'
export default {
  data () {
    return {
      CatetoryName: 'QCBK_CATEGORY'
    }
  },
  computed: {
    BANNER () {
      if (this.$store.state.QCBK.Banner.length) {
        return this.$store.state.QCBK.Banner
      }
    },
    Catetory () {
      return this.$store.state.QCBK.CatetoryList
    },
    HotSaleList () {
      return this.$store.state.QCBK.HotSaleList
    },
    CatetoryArea () {
      return this.$store.state.QCBK.CatetoryArea
    },
    NewProduct () {
      return this.$store.state.QCBK.NewProduct
    },
    RecommendProduct () {
      return this.$store.state.QCBK.RecommendProduct
    }
  },
  components: {
    Banner,
    CatetoryList,
    CatatoryHotsale,
    CategoryArea,
    NewProduct,
    Recommend
  }
}
</script>

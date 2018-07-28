<template>
  <div class='Catetory'>
    <Catetory-header :Data = 'CateHeaderData'/>
    <Catetory-swiper :Data = 'CateHeaderData'/>
  </div>
</template>
<script>
import CatetoryHeader from './components/CatetoryHeader.vue'
import CatetorySwiper from './components/CatetorySwiper.vue'
// import CatetorySwiper from './components/CatetorySwiper.vue'

export default {
  components: {
    CatetoryHeader,
    CatetorySwiper
  },
  created () {
    this.$store.dispatch('getCatetoryById', {id: this.$route.query.id, CateName: this.$route.params.id, Name: this.$route.name})
  },
  computed: {
    CateHeaderData () {
      return this.$store.state[this.$route.params.id]
    }
  }
}
</script>

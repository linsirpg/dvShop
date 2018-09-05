<template>
  <div>
    <headimg />
    <product-content/>
  </div>
</template>

<script>
import Headimg from './components/HeadImg.vue'
import ProductContent from './components/ProductContent.vue'
export default {
  components: {
    Headimg,
    ProductContent
  },
  created () {
    console.log(this.$route.query)
    this.$store.dispatch('getMoreProduct', {'PositionCode': this.$route.query})
  }
}
</script>

<style>

</style>

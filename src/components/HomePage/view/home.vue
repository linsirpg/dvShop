<template>
  <div>
    <banner  :data = 'BANNER'></banner>
  </div>
</template>

<script>
import banner from '@/components/HomePage/components/Banner.vue'
export default {
  created () {
    this.$store.dispatch('getHome')
  },
  computed: {
    BANNER () {
      if (this.$store.state.HomePageData[0]) {
        console.log(this.$store.state.HomePageData, 2312)
        return this.$store.state.HomePageData
      }
    }
  },
  components: {
    banner
  }
}
</script>

<style>

</style>

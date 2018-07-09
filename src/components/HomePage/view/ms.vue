<template>
  <div>
    <banner  :Data = 'BANNER'></banner>
  </div>
</template>

<script>
import banner from '@/components/HomePage/components/Banner.vue'
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
    }
  },
  components: {
    banner
  }
}
</script>

<style>

</style>

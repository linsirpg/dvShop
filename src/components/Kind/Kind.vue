<template>
   <div class='Kind'>
    <Kind-header :Data ='KindData' :DateTitle ='KindTitle'/>
    <kind-swiper :Data ='KindData' :ProductData='CateHeaderDataProduct'/>
  </div>
</template>

<script>
import KindHeader from './components/KindHeader.vue'
import kindSwiper from './components/kindSwiper.vue'
export default {
  data () {
    return {
      KindData: [],
      KindTitle: ''
    }
  },
  watch: {
    CateHeaderData () {
      var This = this
      this.$store.state[this.$route.params.Id].map(function (item, index) {
        if (item.Url === This.$route.params.id) {
          This.KindTitle = item.Title
          This.KindData = JSON.parse(item.NavigationConfig)
        }
      })
    }
  },
  created () {
    this.$store.state.KindeDataProduct = []
    var This = this
    this.$store.state[this.$route.params.Id].map(function (item, index) {
      if (item.Url === This.$route.params.id) {
        This.KindTitle = item.Title
        This.KindData = JSON.parse(item.NavigationConfig)
      }
    })
    this.$store.dispatch('getKindById', {id: this.$route.query.id, CateName: this.$route.params.Id, CatetoryId: this.$route.params.id, Name: this.$route.name})
  },
  components: {
    KindHeader,
    kindSwiper
  },
  computed: {
    CateHeaderData () {
      return this.$store.state[this.$route.params.Id]
    },
    CateHeaderDataProduct () {
      return this.$store.state.KindeDataProduct
    }
  }
}
</script>

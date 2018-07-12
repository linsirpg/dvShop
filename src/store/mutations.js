import {LoadAdvertList} from '@/server'
export default {
  getHeadNavArr (state) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'Navigation', 1, 100, CheckTime).then(function (res) {
      state.HomePageSwiperArr = res.data.Data
    })
  },
  getHome: function (state, id) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'HOME_BANNER', 1, 100, CheckTime).then(function (res) {
      state.home.Banner = res.data.Data
    })
    LoadAdvertList('IMAGE', 'HOMT_ADVERTISING_SPACE_1', 1, 100, CheckTime).then(function (res) {
      state.home.AdversitingOne = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'HOME_HOT', 1, 17, CheckTime).then(function (res) {
      state.home.HotSaleProduct = res.data.Data
    })
    LoadAdvertList('IMAGE', 'HOMT_ADVERTISING_SPACE_2', 1, 100, CheckTime).then(function (res) {
      state.home.AdversitingTwo = res.data.Data
    })
    LoadAdvertList('IMAGE', 'HOME_SPECIAL_AREA', 1, 100, CheckTime).then(function (res) {
      state.home.HomeSpecialArea = res.data.Data
    })
    LoadAdvertList('IMAGE', 'HOMT_ADVERTISING_SPACE_3', 1, 100, CheckTime).then(function (res) {
      state.home.AdversitingThree = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'HOME_NEW_PRODUCT', 1, 6, CheckTime).then(function (res) {
      state.home.NewProduct = res.data.Data
    })
    LoadAdvertList('IMAGE', 'HOME_ARTICLE', 1, 100, CheckTime).then(function (res) {
      state.home.Aritcal = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'HOME_RECOMMEND', 1, 10, CheckTime).then(function (res) {
      state.home.RecommendProduct = res.data.Data
    })
  },
  getMs: function (state, id) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'MS_BANNER', 1, 100, CheckTime).then(function (res) {
      state.MS.Banner = res.data.Data
    })
    LoadAdvertList('IMAGE', 'MS_CATEGORY', 1, 9, CheckTime).then(function (res) {
      state.MS.CatetoryList = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'MS_HOTPRODUCT', 1, 9, CheckTime).then(function (res) {
      state.MS.HotSaleList = res.data.Data
    })
    LoadAdvertList('IMAGE', 'MS_AREA', 1, 9, CheckTime).then(function (res) {
      state.MS.CatetoryArea = res.data.Data
    })
    LoadAdvertList('IMAGE', 'MS_NEW_PRODUCT', 1, 9, CheckTime).then(function (res) {
      console.log(res.data.Data, 1313)
      state.MS.NewProduct = res.data.Data
    })
  }
}

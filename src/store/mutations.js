import {LoadAdvertList} from '@/server'
export default {
  getHeadNavArr (state) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'Navigation', 1, 100, CheckTime).then(function (res) {
      state.HomePageSwiperArr = res.data.Data
      console.log(res.data.Data)
      state.HomePageSwiperArr.map(function (data, index) {
        state[data.Url + 'ScrollTop'] = 0
      })
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
    LoadAdvertList('PRODUCT', 'MS_NEW_PRODUCT', 1, 6, CheckTime).then(function (res) {
      state.MS.NewProduct = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'MS_HOTRECOMMEND_VERTICAL', 1, 10, CheckTime).then(function (res) {
      state.MS.RecommendProduct = res.data.Data
    })
  },
  getMZGH: function (state, id) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'MZGH_BANNER', 1, 100, CheckTime).then(function (res) {
      state.MZGH.Banner = res.data.Data
    })
    LoadAdvertList('IMAGE', 'MZGH_CATEGORY', 1, 9, CheckTime).then(function (res) {
      state.MZGH.CatetoryList = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'MZGH_HOTPRODUCT', 1, 9, CheckTime).then(function (res) {
      state.MZGH.HotSaleList = res.data.Data
    })
    LoadAdvertList('IMAGE', 'MZGH_AREA', 1, 9, CheckTime).then(function (res) {
      state.MZGH.CatetoryArea = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'MZGH_NEW_PRODUCT', 1, 6, CheckTime).then(function (res) {
      state.MZGH.NewProduct = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'MZGH_HOTRECOMMEND_VERTICAL', 1, 10, CheckTime).then(function (res) {
      state.MZGH.RecommendProduct = res.data.Data
    })
  },
  getJJJZ: function (state, id) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'JJJZ_BANNER', 1, 100, CheckTime).then(function (res) {
      state.JJJZ.Banner = res.data.Data
    })
    LoadAdvertList('IMAGE', 'JJJZ_CATEGORY', 1, 9, CheckTime).then(function (res) {
      state.JJJZ.CatetoryList = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'JJJZ_HOTPRODUCT', 1, 9, CheckTime).then(function (res) {
      state.JJJZ.HotSaleList = res.data.Data
    })
    LoadAdvertList('IMAGE', 'JJJZ_AREA', 1, 9, CheckTime).then(function (res) {
      state.JJJZ.CatetoryArea = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'JJJZ_NEW_PRODUCT', 1, 6, CheckTime).then(function (res) {
      state.JJJZ.NewProduct = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'JJJZ_HOTRECOMMEND_VERTICAL', 1, 10, CheckTime).then(function (res) {
      state.JJJZ.RecommendProduct = res.data.Data
    })
  },
  getQCBK: function (state, id) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'QCBK_BANNER', 1, 100, CheckTime).then(function (res) {
      state.QCBK.Banner = res.data.Data
    })
    LoadAdvertList('IMAGE', 'QCBK_CATEGORY', 1, 9, CheckTime).then(function (res) {
      state.QCBK.CatetoryList = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'QCBK_HOTPRODUCT', 1, 9, CheckTime).then(function (res) {
      state.QCBK.HotSaleList = res.data.Data
    })
    LoadAdvertList('IMAGE', 'QCBK_AREA', 1, 9, CheckTime).then(function (res) {
      state.QCBK.CatetoryArea = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'QCBK_NEW_PRODUCT', 1, 6, CheckTime).then(function (res) {
      state.QCBK.NewProduct = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'QCBK_HOTRECOMMEND_VERTICAL', 1, 10, CheckTime).then(function (res) {
      state.QCBK.RecommendProduct = res.data.Data
    })
  },
  getJYDQ: function (state, id) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'JYDQ_BANNER', 1, 100, CheckTime).then(function (res) {
      state.JYDQ.Banner = res.data.Data
    })
    LoadAdvertList('IMAGE', 'JYDQ_CATEGORY', 1, 9, CheckTime).then(function (res) {
      state.JYDQ.CatetoryList = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'JYDQ_HOTPRODUCT', 1, 9, CheckTime).then(function (res) {
      state.JYDQ.HotSaleList = res.data.Data
    })
    LoadAdvertList('IMAGE', 'JYDQ_AREA', 1, 9, CheckTime).then(function (res) {
      state.JYDQ.CatetoryArea = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'JYDQ_NEW_PRODUCT', 1, 6, CheckTime).then(function (res) {
      state.JYDQ.NewProduct = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'JYDQ_HOTRECOMMEND_VERTICAL', 1, 10, CheckTime).then(function (res) {
      state.JYDQ.RecommendProduct = res.data.Data
    })
  },
  getWHJY: function (state, id) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'WHJY_BANNER', 1, 100, CheckTime).then(function (res) {
      state.WHJY.Banner = res.data.Data
    })
    LoadAdvertList('IMAGE', 'WHJY_CATEGORY', 1, 9, CheckTime).then(function (res) {
      state.WHJY.CatetoryList = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'WHJY_HOTPRODUCT', 1, 9, CheckTime).then(function (res) {
      state.WHJY.HotSaleList = res.data.Data
    })
    LoadAdvertList('IMAGE', 'WHJY_AREA', 1, 9, CheckTime).then(function (res) {
      state.WHJY.CatetoryArea = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'WHJY_NEW_PRODUCT', 1, 6, CheckTime).then(function (res) {
      state.WHJY.NewProduct = res.data.Data
    })
    LoadAdvertList('PRODUCT', 'WHJY_HOTRECOMMEND_VERTICAL', 1, 10, CheckTime).then(function (res) {
      state.WHJY.RecommendProduct = res.data.Data
    })
  }
}

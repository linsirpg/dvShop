import {LoadAdvertList, LoadProductByCate} from '@/server'
export default {
  getHeadNavArr (state) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'Navigation', 1, 100, CheckTime).then(function (res) {
      state.HomePageSwiperArr = res.data.Data
      state.HomePageSwiperArr.map(function (data, index) {
        state[data.Url + 'ScrollTop'] = 0
      })
    })
  },
  gethome: function (state, obj) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'HOME_BANNER', 1, 100, CheckTime).then(function (res) {
      state.home.Banner = res.data.Data
      state.home.Flage += 1
    })
    LoadAdvertList('IMAGE', 'HOMT_ADVERTISING_SPACE_1', 1, 100, CheckTime).then(function (res) {
      state.home.AdversitingOne = res.data.Data
      state.home.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'HOME_HOT', 1, 26, CheckTime).then(function (res) {
      state.home.HotSaleProduct = res.data.Data
      state.home.Flage += 1
    })
    LoadAdvertList('IMAGE', 'HOMT_ADVERTISING_SPACE_2', 1, 100, CheckTime).then(function (res) {
      state.home.AdversitingTwo = res.data.Data
      state.home.Flage += 1
    })
    LoadAdvertList('IMAGE', 'HOME_SPECIAL_AREA', 1, 100, CheckTime).then(function (res) {
      state.home.HomeSpecialArea = res.data.Data
      state.home.Flage += 1
    })
    LoadAdvertList('IMAGE', 'HOMT_ADVERTISING_SPACE_3', 1, 100, CheckTime).then(function (res) {
      state.home.AdversitingThree = res.data.Data
      state.home.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'HOME_NEW_PRODUCT', 1, 9, CheckTime).then(function (res) {
      state.home.NewProduct = res.data.Data
      state.home.Flage += 1
    })
    LoadAdvertList('IMAGE', 'HOME_ARTICLE', 1, 100, CheckTime).then(function (res) {
      state.home.Aritcal = res.data.Data
      state.home.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'HOME_RECOMMEND', 1, 10, CheckTime).then(function (res) {
      state.home.RecommendProduct = res.data.Data
      state.home.Flage += 1
    })
  },
  getMS: function (state, obj) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'MS_BANNER', 1, 100, CheckTime).then(function (res) {
      state.MS.Banner = res.data.Data
      state.MS.Flage += 1
    })
    LoadAdvertList('IMAGE', 'MS_CATEGORY', 1, 100, CheckTime).then(function (res) {
      state.MS_CATEGORY = res.data.Data
      state.MS.CatetoryList = res.data.Data.slice(0, 9)
      state.MS.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'MS_HOTPRODUCT', 1, 9, CheckTime).then(function (res) {
      state.MS.HotSaleList = res.data.Data
      state.MS.Flage += 1
    })
    LoadAdvertList('IMAGE', 'MS_AREA', 1, 9, CheckTime).then(function (res) {
      state.MS.CatetoryArea = res.data.Data
      state.MS.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'MS_NEW_PRODUCT', 1, 9, CheckTime).then(function (res) {
      state.MS.NewProduct = res.data.Data
      state.MS.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'MS_HOTRECOMMEND_VERTICAL', 1, 10, CheckTime).then(function (res) {
      state.MS.RecommendProduct = res.data.Data
      state.MS.Flage += 1
    })
  },
  getMZGH: function (state, obj) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'MZGH_BANNER', 1, 100, CheckTime).then(function (res) {
      state.MZGH.Banner = res.data.Data
      state.MZGH.Flage += 1
    })
    LoadAdvertList('IMAGE', 'MZGH_CATEGORY', 1, 100, CheckTime).then(function (res) {
      state.MZGH_CATEGORY = res.data.Data
      state.MZGH.CatetoryList = res.data.Data.slice(0, 9)
      state.MZGH.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'MZGH_HOTPRODUCT', 1, 9, CheckTime).then(function (res) {
      state.MZGH.HotSaleList = res.data.Data
      state.MZGH.Flage += 1
    })
    LoadAdvertList('IMAGE', 'MZGH_AREA', 1, 9, CheckTime).then(function (res) {
      state.MZGH.CatetoryArea = res.data.Data
      state.MZGH.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'MZGH_NEW_PRODUCT', 1, 9, CheckTime).then(function (res) {
      state.MZGH.NewProduct = res.data.Data
      state.MZGH.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'MZGH_HOTRECOMMEND_VERTICAL', 1, 10, CheckTime).then(function (res) {
      state.MZGH.RecommendProduct = res.data.Data
      state.MZGH.Flage += 1
    })
  },
  getMYYP: function (state, obj) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'MYYP_BANNER', 1, 100, CheckTime).then(function (res) {
      state.MYYP.Banner = res.data.Data
      state.MYYP.Flage += 1
    })
    LoadAdvertList('IMAGE', 'MYYP_CATEGORY', 1, 100, CheckTime).then(function (res) {
      state.MYYP_CATEGORY = res.data.Data
      state.MYYP.CatetoryList = res.data.Data.slice(0, 9)
      state.MYYP.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'MYYP_HOTPRODUCT', 1, 9, CheckTime).then(function (res) {
      state.MYYP.HotSaleList = res.data.Data
      state.MYYP.Flage += 1
    })
    LoadAdvertList('IMAGE', 'MYYP_AREA', 1, 9, CheckTime).then(function (res) {
      state.MYYP.CatetoryArea = res.data.Data
      state.MYYP.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'MYYP_NEW_PRODUCT', 1, 9, CheckTime).then(function (res) {
      state.MYYP.NewProduct = res.data.Data
      state.MYYP.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'MYYP_HOTRECOMMEND_VERTICAL', 1, 10, CheckTime).then(function (res) {
      state.MYYP.RecommendProduct = res.data.Data
      state.MYYP.Flage += 1
    })
  },
  getJJJZ: function (state, obj) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'JJJZ_BANNER', 1, 100, CheckTime).then(function (res) {
      state.JJJZ.Banner = res.data.Data
      state.JJJZ.Flage += 1
    })
    LoadAdvertList('IMAGE', 'JJJZ_CATEGORY', 1, 100, CheckTime).then(function (res) {
      state.JJJZ_CATEGORY = res.data.Data
      state.JJJZ.CatetoryList = res.data.Data.slice(0, 9)
      state.JJJZ.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'JJJZ_HOTPRODUCT', 1, 9, CheckTime).then(function (res) {
      state.JJJZ.HotSaleList = res.data.Data
      state.JJJZ.Flage += 1
    })
    LoadAdvertList('IMAGE', 'JJJZ_AREA', 1, 9, CheckTime).then(function (res) {
      state.JJJZ.CatetoryArea = res.data.Data
      state.JJJZ.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'JJJZ_NEW_PRODUCT', 1, 9, CheckTime).then(function (res) {
      state.JJJZ.NewProduct = res.data.Data
      state.JJJZ.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'JJJZ_HOTRECOMMEND_VERTICAL', 1, 10, CheckTime).then(function (res) {
      state.JJJZ.RecommendProduct = res.data.Data
      state.JJJZ.Flage += 1
    })
  },
  getQCBK: function (state, obj) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'QCBK_BANNER', 1, 100, CheckTime).then(function (res) {
      state.QCBK.Banner = res.data.Data
      state.QCBK.Flage += 1
    })
    LoadAdvertList('IMAGE', 'QCBK_CATEGORY', 1, 100, CheckTime).then(function (res) {
      state.QCBK_CATEGORY = res.data.Data
      state.QCBK.CatetoryList = res.data.Data.slice(0, 9)
      state.QCBK.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'QCBK_HOTPRODUCT', 1, 9, CheckTime).then(function (res) {
      state.QCBK.HotSaleList = res.data.Data
      state.QCBK.Flage += 1
    })
    LoadAdvertList('IMAGE', 'QCBK_AREA', 1, 9, CheckTime).then(function (res) {
      state.QCBK.CatetoryArea = res.data.Data
      state.QCBK.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'QCBK_NEW_PRODUCT', 1, 9, CheckTime).then(function (res) {
      state.QCBK.NewProduct = res.data.Data
      state.QCBK.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'QCBK_HOTRECOMMEND_VERTICAL', 1, 10, CheckTime).then(function (res) {
      state.QCBK.RecommendProduct = res.data.Data
      state.QCBK.Flage += 1
    })
  },
  getJYDQ: function (state, obj) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'JYDQ_BANNER', 1, 100, CheckTime).then(function (res) {
      state.JYDQ.Banner = res.data.Data
      state.JYDQ.Flage += 1
    })
    LoadAdvertList('IMAGE', 'JYDQ_CATEGORY', 1, 9, CheckTime).then(function (res) {
      state.JYDQ_CATEGORY = res.data.Data
      state.JYDQ.CatetoryList = res.data.Data.slice(0, 9)
      state.JYDQ.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'JYDQ_HOTPRODUCT', 1, 9, CheckTime).then(function (res) {
      state.JYDQ.HotSaleList = res.data.Data
      state.JYDQ.Flage += 1
    })
    LoadAdvertList('IMAGE', 'JYDQ_AREA', 1, 9, CheckTime).then(function (res) {
      state.JYDQ.CatetoryArea = res.data.Data
      state.JYDQ.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'JYDQ_NEW_PRODUCT', 1, 9, CheckTime).then(function (res) {
      state.JYDQ.NewProduct = res.data.Data
      state.JYDQ.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'JYDQ_HOTRECOMMEND_VERTICAL', 1, 10, CheckTime).then(function (res) {
      state.JYDQ.RecommendProduct = res.data.Data
      state.JYDQ.Flage += 1
    })
  },
  getWHJY: function (state, obj) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'WHJY_BANNER', 1, 100, CheckTime).then(function (res) {
      state.WHJY.Banner = res.data.Data
      state.WHJY.Flage += 1
    })
    LoadAdvertList('IMAGE', 'WHJY_CATEGORY', 1, 9, CheckTime).then(function (res) {
      state.WHJY_CATEGORY = res.data.Data
      state.WHJY.CatetoryList = res.data.Data.slice(0, 9)
      state.WHJY.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'WHJY_HOTPRODUCT', 1, 9, CheckTime).then(function (res) {
      state.WHJY.HotSaleList = res.data.Data
      state.WHJY.Flage += 1
    })
    LoadAdvertList('IMAGE', 'WHJY_AREA', 1, 9, CheckTime).then(function (res) {
      state.WHJY.CatetoryArea = res.data.Data
      state.WHJY.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'WHJY_NEW_PRODUCT', 1, 9, CheckTime).then(function (res) {
      state.WHJY.NewProduct = res.data.Data
      state.WHJY.Flage += 1
    })
    LoadAdvertList('PRODUCT', 'WHJY_HOTRECOMMEND_VERTICAL', 1, 10, CheckTime).then(function (res) {
      state.WHJY.RecommendProduct = res.data.Data
      state.WHJY.Flage += 1
    })
  },
  getMoreDate: function (state, obj) {
    var CheckTime = ''
    if (!state[obj.KindName + 'Flage']) {
      state[obj.KindName + 'Flage'] = true
      var offset = Math.floor(Number((state[obj.RouteName].RecommendProduct.length / obj.limit) + 1))
      LoadAdvertList('PRODUCT', obj.KindName, offset, obj.limit, CheckTime).then(function (res) {
        if (res.data.Data.length) {
          res.data.Data.map(function (data) {
            state[obj.RouteName].RecommendProduct.push(data)
          })
        }
        if (res.data.Data.length === obj.limit) {
          state[obj.KindName + 'Flage'] = false
        }
      })
    }
  },
  getCatetoryById: async function (state, obj) {
    var CheckTime = ''
    console.log(obj)
    let GetCateName = function () {
      LoadAdvertList('IMAGE', obj.CateName, 1, 100, CheckTime).then(function (res) {
        state[obj.CateName] = res.data.Data
      })
    }
    if (!state[obj.CateName].length) {
      await GetCateName()
    }
    LoadProductByCate(obj.id, 1, 10).then(function (resData) {
      state[obj.CateName].map(function (res, index) {
        state[obj.CateName.split('_')[0]].CatetoryProductArr.push([])
        if (Number(res.Url) === Number(obj.id)) {
          state[obj.CateName.split('_')[0]].CatetoryProductArr[index] = resData.data.Data
          console.log(state[obj.CateName.split('_')[0]].CatetoryProductArr, 123)
        }
      })
    })
  }
}

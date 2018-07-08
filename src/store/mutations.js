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
      // This.state.HomePageData[0] = {}
      // This.state.HomePageData[0].BANNER = res
      state.HomePageData.push(res)
      console.log(res)
    })
  }
}

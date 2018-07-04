import {LoadAdvertList} from '@/server'
export default {
  getHeadNavArr (state) {
    var CheckTime = ''
    LoadAdvertList('IMAGE', 'NavigationName', 1, 100, CheckTime).then(function (res) {
      console.log(res)
    })
  }
}

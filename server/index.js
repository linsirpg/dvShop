import axios from "axios"
export let LOadAdvertList = async (kind, Advert, PageSize, PageIndex, CheckTime) => {
  return axios.post('/api/Advert/LoadAdvertList', {
    Kind: kind,
    AdvertCode: Advert,
    PageIndex: PageIndex,
    PageSize: PageSize,
    CheckTime: CheckTime     
  })
}

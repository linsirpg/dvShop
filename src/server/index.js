import axios from 'axios'

export let LoadAdvertList = async (kind, Advert, PageIndex, PageSize, CheckTime) => {
  return axios.post('/api/Advert/LoadAdvertList', {
    Kind: kind,
    AdvertCode: Advert,
    PageIndex: PageIndex,
    PageSize: PageSize,
    CheckTime: CheckTime
  })
}
export let LoadProductByCate = async (id, PageIndex, PageSize) => {
  return axios.post('/api/Product/LoadProductByCate', {
    TypeId: id,
    PageIndex: PageIndex,
    PageSize: PageSize
  })
}

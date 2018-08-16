import axios from 'axios'

export let LoadAdvertList = async (Kind, AdvertCode, PageIndex, PageSize, CheckTime) => {
  return axios.post('/api/Advert/LoadAdvertList', {
    Kind,
    AdvertCode,
    PageIndex,
    PageSize,
    CheckTime
  })
}
export let LoadProductByCate = async (TypeId, PageIndex, PageSize) => {
  return axios.post('/api/Product/LoadProductByCate', {
    TypeId,
    PageIndex,
    PageSize
  })
}
export let LoadCateGroup = async (TypeId, PageIndex, PageSize) => {
  return axios.post('/api/Product/LoadCateGroup', {
    TypeId,
    PageIndex,
    PageSize
  })
}

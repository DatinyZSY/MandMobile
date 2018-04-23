// 首页相关API
import { fetch,postData } from '../../../Service/httpService'

export function getList(params){
  return fetch('/getList', params)
}

export function postData(params){
  return postData('/post', params)
}

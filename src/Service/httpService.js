import axios from 'axios'
import {API_ROOT} from '../config'

/* ajax-get */
export const fetch = (url, data={}) =>{
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: API_ROOT + url,
      params: data
    }).then(resp => {
      resolve(resp)
    }, reject)
  })
};

/* ajax-post */
export const postData = (url, data={}) =>{
  return new Promise((resolve, reject)=>{
    axios({
      method: 'post',
      url: API_ROOT + url,
      data: data
    }).then(resp => {
      resolve(resp)
    }, reject)
  })
};



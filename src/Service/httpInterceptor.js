import {API_ROOT} from '../config'

var loadingTimer = null;

// 不拦截的请求名
const unInterceptorUrl = [];

//不弹loading的请求名
const unLoadingUrl = [];

// 检测请求名是否需要拦截
function checkUrl(resp) {
  let arr = resp.config.url.split('/'), flag = true;
  unInterceptorUrl.forEach(item=>{
    if(item === arr[arr.length-1].split('?')[0]){
      flag = false
    }
  });
  return flag
}

// 检测是否不弹loading
function checkLoadUrl(resp) {
  let arr = resp.url.split('/'), flag = true;
  unLoadingUrl.forEach(item=>{
    if(item === arr[arr.length-1]){
      flag = false
    }
  });
  return flag
}

// 拦截错误请求并发送日志
function sendErrorLog(log,result) {
}

// request
export const request = (config) => {
  if(checkLoadUrl(config)){
    Indicator.open({
      text: '拼命加载中...',
      spinnerType: 'fading-circle'
    });
  }

  // 若需要登录在请求头添加token
  // if(JSON.parse(sessionStorage.getItem('wx_info'))){
  //   let token = JSON.parse(sessionStorage.getItem('wx_info')).token
  //   config.headers.token = token
  // }
  return config
};

// Error
export const Error = (error) => {
  if (error.response.status === 500) {
    Indicator.close();
    // Toast('服务器异常')
  }

  return Promise.reject(error);
};

// response
export const response = (response) => {
  // sendErrorLog('url:'+response.config.url+'data:'+JSON.stringify(response.data.data),response.data.result);
  if(response.data.result == 401 && checkUrl(response)){

  }

  clearTimeout(loadingTimer);
  loadingTimer = setTimeout(() => {
    Indicator.close();
    clearTimeout(loadingTimer);
  }, 300);

  return response;
};

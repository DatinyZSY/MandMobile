// 全局过滤器
import moment from 'moment'
function starCover(value, start, end){
  if(start + end > value.length){
    return value
  }else{
    if (start < 0) {
      start = 0
    }
    if (end < 0) {
      end = 0
    }
    let arr1 = value.substr(0, start);
    let arr2 = value.substr(value.length - end);
    let arr3 = '';
    for(let i = 0;i<value.length-(start+end);i++){
      arr3 += '*'
    }
    return arr1+arr3+arr2
  }
}

module.exports.install = function(Vue,options){
  // 保留小数点后两位
  Vue.filter('toFixTwo',(value)=>{
    if(value){
      return Number(value).toFixed(2)
    }else{
      return 0.00
    }
  });

  // 保留小数点后两位%
  Vue.filter('toFixTwoPer',(value)=>{
    if(value){
      return Number(value).toFixed(4)+'%'
    }else{
      return 0.00+'%'
    }
  });

  // ¥+保留小数点后两位
  Vue.filter('MoneyToFixTwo',(value)=>{
    if(value){
      return '¥'+Number(value).toFixed(2)
    }
  });

  // 日期YYYY/MM/DD格式
  Vue.filter('timeCon',(value)=>{
    let date = moment(value).format('YYYY/MM/DD');
    return date
  });

  // 日期YYYY-MM-DD格式
  Vue.filter('exchangeDate',value=>{
    if(value){
      let date = moment(value).format('YYYY-MM-DD');
      return date
    }
  });

  // 日期YYYY.MM.DD格式
  Vue.filter('dateCon',(value)=>{
    let date = moment(value).format('YYYY.MM.DD');
    return date
  });

  // 日期YYYY-MM-DD HH:mm:ss格式
  Vue.filter('dateTime',(value)=>{
    if(value){
      let date = moment(value).format('YYYY-MM-DD HH:mm:ss');
      return date
    }
  });

  // 日期HH:mm:ss格式
  Vue.filter('justTime',(value)=>{
    if(value){
      let date = moment(value).format('HH:mm:ss');
      return date
    }
  });

  // 十九位数字，显示前九位后四位
  Vue.filter('cardNum',(value)=>{
    if(value){
      return starCover(value,9,4)
    }
  });

  // 显示前四位后四位
  Vue.filter('commonCardNo',(value)=>{
    if(value){
      return starCover(value,4,4)
    }
  });

  // 显示手机号前三后四位
  Vue.filter('checkCardPhone',(value)=>{
    if(value){
      return starCover(value,3,4)
    }
  });
};

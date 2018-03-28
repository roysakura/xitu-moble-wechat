/**
 * Created by THINK on 2017/9/15.
 */
import axios from 'axios'

export function getBaoJia(quote_date) {
  return axios.get(`/magnet/materialquotes/`,{
    params:{
      quote_date:quote_date
    }
  });
}

export function getMonthData(name,date) {
  return axios.get(`/magnet/detail/materialquotes/`,{
    params:{
      id:name
    }
  });
}
/**
 * 切换tab获取不同的数据
 * @param name:产品的id
 * @param date:tab值
 * @returns {AxiosPromise}
 */
export function getMonthDataByMonthName(name,date,spec) {
  return axios.get(`/magnet/month/materialquotes/`,{
    params:{
      name:name,
      quote_date_month:date,
      spec:spec
    }
  });
}

export function getLookAll() {
  return axios.get(`http://m.ciyigou.com/api1.0/articleorders/`);
}

export function getSignInfo(url,currentUrl) {
  return axios.post(url,{
      url:currentUrl
    }).then((res)=>{
      return Promise.resolve(res);
},(err)=>{
    return Promise.reject(err);
  });
}

// ajax请求函数模块  返回数据是response.data

// 引入axios模块
import axios from 'axios'

export default function ajax(url,data={},type="get"){
  return new Promise(function(resolve,reject){
    // 执行异步ajax请求
    let promise;
    if(type==="get"){
      // 准备url query参数数据
      let dataStr = "";
      Object.keys(data).forEach(key=>{
        dataStr += key + "=" + data[key] + "&"
      })
      if(dataStr !== ""){
        dataStr = dataStr.substring(0,dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      }
      // 发送get请求
      promise = axios.get(url);
    }else{
      // 发送post请求
      promise = axios.post(url,data);
    }
    promise.then(function(response){
      // 成功了调用reslove
      resolve(response.data)
    }).catch(function(error){
      // 失败了调用reject
      reject(error)
    }) 
  })
}
## request.v2.js

::: tip 基于 axios 的二次封装
axios请求超时,设置重新请求的解决方法  
提示可根据应用的UI库来变更，这边展示我用的是vant-ui  
废话不多说，直接贴代码
:::

> https://github.com/axios/axios/issues/164#issuecomment-327837467

``` javascript
import {Toast} from 'vant'
import axios from 'axios'
import store from '@/store'

// create an axios instance
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  timeout: 5000 // request timeout
})

// 设置全局的请求次数，请求的间隙
http.defaults.retry = 4
http.defaults.retryDelay = 1000

http.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['authorization'] = 'Bearer'
  }
  return config
}, error => {
  console.log(`err,${error}`)
  Promise.reject(error)
})

http.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.res !== 1) {
      Toast({
        position: 'bottom',
        message: res.resMsg
      })
      return Promise.reject(res.resMsg)
    } else {
      return response.data
    }
  },
  (err) => {
    const config = err.config
    // If config does not exist or the retry option is not set, reject
    if (!config || !config.retry) return Promise.reject(err)

    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0

    // Check if we've maxed out the total number of retries
    if (config.__retryCount >= config.retry) {
      // Reject with the error
      return Promise.reject(err)
    }

    // Increase the retry count
    config.__retryCount += 1

    // Create new promise to handle exponential backoff
    const backoff = new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, config.retryDelay || 1)
    });

    // Return the promise in which recalls axios to retry the request
    return backoff.then(function () {
      return http(config)
    })
  }
)

export default http
```

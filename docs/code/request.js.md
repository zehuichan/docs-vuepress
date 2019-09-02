## request.js

::: tip 提示
提示可根据应用的UI库来变更，这边展示我用的是vant-ui  
废话不多说，直接贴代码
:::

```
import {Toast} from 'vant'
import axios from 'axios'
import store from '@/store'

// create an axios instance
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  timeout: 5000 // request timeout
})

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
  (error) => {
    console.log(`err,${error}`)
    Toast({
      position: 'bottom',
      message: error
    })
    return Promise.reject(error)
  }
)

export default http
```

> 举个栗子...

```
// api/index.js

import request from '@/utils/request'
import qs from 'qs'

export function fetchList(params) {
  return request({
    url: '/article/list',
    method: 'get',
    params: params
  })
}

// xxx/index.vue

import {fetchList} from '@/api'

// 此处省略...
  data() {
    return {
      list: []
    }
  },
  created() {
    this._fetchList()
  },
  methods: {
    _fetchList() {
      fetchList().then((res) => {
        this.list = res.list
      })
    }
  }
// 此处省略...

```

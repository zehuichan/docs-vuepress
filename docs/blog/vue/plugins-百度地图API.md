## 百度地图API

```
目录结构
src
|-- plugins
|  |-- bmap
|    |-- index.js
|    |-- bmap.js
```

### index.js

```javascript
// index.js
import bmap from './bmap'

export default {
  install(Vue) {
    Vue.prototype.$bmap = bmap
  }
}
```

### bmap.js

```javascript
// amap.js
const url = `//api.map.baidu.com/api?v=2.0&ak=您的密钥&callback=init`

export default function bmap() {
  return new Promise((resolve, reject) => {
    if (window.BMap) {
      resolve(window.BMap)
    } else {
      const script = document.createElement('script')
      script.charset = 'utf-8'
      script.async = true
      script.src = url
      script.onerror = reject
      document.head.appendChild(script)
    }
    window.init = () => {
      resolve(window.BMap)
    }
  })
}
```

### 使用方法

```javascript
// 组件中使用
export default {
    data() {
      return {
        city: {}
      }
    },
    created() {
      const self = this
      this.$bmap().then((BMap) => {
        const citySearch = new BMap.LocalCity()
        citySearch.get((result) => {
          // 查询成功，result即为当前所在城市信息
          self.city = result
        })
      })
    }
}
```

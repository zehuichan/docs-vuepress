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

const plugin = {
  install(Vue) {
    Vue.prototype.$bmap = bmap
    Vue.bmap = bmap
  },
  $bmap: bmap
}

export default plugin
export const install = plugin.install
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
      script.type = 'text/javascript'
      script.async = true
      script.src = url
      script.onerror = reject
      document.head.appendChild(script)
    }
    window.initAMap = () => {
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

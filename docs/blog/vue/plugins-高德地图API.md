## 高德地图API

```
目录结构
src
|-- plugins
|  |-- amap
|    |-- index.js
|    |-- amap.js
```

### index.js

```javascript
// index.js
import amap from './amap'

export default {
  install(Vue) {
    Vue.prototype.$amap = amap
  }
}
```

### amap.js

```javascript
// amap.js
const url = `//webapi.amap.com/maps?v=1.4.13&key=您申请的key值&callback=initAMap`

export default function amap() {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap)
    } else {
      const script = document.createElement('script')
      script.charset = 'utf-8'
      script.async = true
      script.src = url
      script.onerror = reject
      document.head.appendChild(script)
    }
    window.initAMap = () => {
      resolve(window.AMap)
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
      this.$amap().then((AMap) => {
        AMap.plugin(['AMap.CitySearch'], function () {
          const citySearch = new AMap.CitySearch()
          citySearch.getLocalCity((status, result) => {
            if (status === 'complete' && result.info === 'OK') {
              // 查询成功，result即为当前所在城市信息
              self.city = result
            }
          })
        })
      })
    }
}
```

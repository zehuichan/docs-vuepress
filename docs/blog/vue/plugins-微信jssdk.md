## 微信jssdk


[文档地址](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#1)

```
目录结构
src
|-- plugins
|  |-- jweixin
|    |-- index.js
|    |-- jweixin-1.4.0.js
|    |-- jweixin-1.6.0.js
```

### index.js

```javascript
// index.js
import wx from './jweixin-1.6.0'

function plugin(Vue) {
  if (plugin.installed) {
    return
  }
  Vue.prototype.$wx = wx
}

export default plugin
```

### jweixin-1.6.0.js

```javascript
// jweixin-1.6.0.js

// 下载至本地
// https://res2.wx.qq.com/open/js/jweixin-1.6.0.js

// 用我这个方法的需要稍微改造下js文件，就不多赘述了，直接上代码
// https://github.com/zehuichan/vant-tpl/blob/master/src/plugins/wechat/jweixin-1.6.0.js

```

### 使用方法

```javascript
// main.js

// 微信jssdk
import JWeixinPlugin from '@/plugins/jweixin'

Vue.use(JWeixinPlugin)

// 可以直接访问 wx 对象
console.log(Vue.$wx)
```

## vue

### plugins
- 微信jssdk
- 高德地图API

```javascript
// 在main.js中引入

// 微信jssdk
import WechatPlugin from '@/plugins/wechat/index'
// 高德地图API
import AmapPlugin from '@/plugins/amap/index'

Vue.use(WechatPlugin)
Vue.use(AmapPlugin)
```

### vue-cli3下增加CDN
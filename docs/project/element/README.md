## Introduction

基于潘大的 `vue-element-admin` [github仓](https://github.com/PanJiaChen/vue-element-admin) 二次开发的模板

这是我的 [github仓](https://github.com/zehuichan/vant-mall-admin) ，欢迎 start/fork

- 支持 `async/await`
- 国际化
- 支持媒体查询

修改地方 `src/layout/mixin/ResizeHandler.js`

```js
// 媒体查询
const MEDIA_QUERY = {
  'screen-xs': {
    maxWidth: 575
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599
  },
  'screen-xxl': {
    minWidth: 1600
  }
}
```
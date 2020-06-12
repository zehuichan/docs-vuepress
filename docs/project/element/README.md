## Introduction

基于 @PanJiaChen 的 `vue-element-admin` [github](https://github.com/PanJiaChen/vue-element-admin) 二次开发的模板

这是我的 [github](https://github.com/zehuichan/vant-mall-admin) ，欢迎 start/fork

- 支持 `async/await`
- 国际化
- 新增媒体查询
- 新增按钮权限指令 `v-action`

修改地方 `src/layout/mixin/ResizeHandler.js`

```js
// 媒体查询
const media_query = {
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

栗子：

```js
const permission_enum = [
    {key: 'v-action:add', label: 'desc: 新增'},
    {key: 'v-action:delete', label: 'desc: 删除'},
    {key: 'v-action:edit', label: 'desc: 修改'},
    {key: 'v-action:query', label: 'desc: 查询'},
    {key: 'v-action:get', label: 'desc: 详情'},
    {key: 'v-action:enable', label: 'desc: 启用'},
    {key: 'v-action:disable', label: 'desc: 禁用'},
    {key: 'v-action:import', label: 'desc: 导入'},
    {key: 'v-action:export', label: 'desc: 导出'}
]
```

```vue
<template>
  <tag-name v-action:add>新增</tag-name>
</template>
```
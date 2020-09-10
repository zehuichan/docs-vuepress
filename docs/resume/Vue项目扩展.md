## 管理后台路由权限实现(基于vue技术栈)

1. 使用 `router.beforeEach` 注册一个全局前置守卫

2. 在前置守卫中，调用对应接口

```js
router.beforeEach(async (to, from, next) => {
  // 获取用户信息
  const { roles } = await store.dispatch('user/getInfo')

  // 根据当前用户的角色id生成前端路由表
  // 第一种，后端返回当前用户所分配的菜单，前端直接生成前端路由表
  // 第二种，后端返回整份菜单，前端过滤生成前端路由表
  // 无论哪种方式，前端终究还是得处理后端返回的数据
  const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

  // 动态添加可访问路由
  router.addRoutes(accessRoutes)
  
  // 通过 `next()` 来释放钩子，确保所有的路由都已经挂在完成
  next({ ...to, replace: true })
})
```

3. 在 `main.js` 中引入使用

## 管理后台按钮权限实现(基于vue技术栈)

1. 角色管理分配操作权限，如：增删改查

2. 封装自定义指令权限 `v-action`

```js
// store
import store from '@/store'

const PERMISSION_ENUM = {
  'add': {key: 'add', label: '新增'},
  'delete': {key: 'delete', label: '删除'},
  'edit': {key: 'edit', label: '修改'},
  'query': {key: 'query', label: '查询'},
  'get': {key: 'get', label: '详情'},
  'enable': {key: 'enable', label: '启用'},
  'disable': {key: 'disable', label: '禁用'},
  'import': {key: 'import', label: '导入'},
  'export': {key: 'export', label: '导出'}
}

export default {
  inserted(el, binding, vnode) {
    const actionName = binding.arg

    // 获取 `store` 里面的可操作权限，`permissions`
    const permissions = store.getters && store.getters.permissions
    const elVal = vnode.context.$route.meta.permissions

    // 根据当前 `vnode` 的上下文所配置的路由元信息 `$route.name` 字段，`permissionId`
    const permissionId = vnode.context.$route.name.toLowerCase()

    // 通过两者比对，来判断当前用户下该菜单的按钮是否有可操作权限，没有则隐藏按钮
    permissions.forEach(p => {
      if (permissionId !== p.permissionId) {
        return
      }
      if (p.actionList && !p.actionList.includes(actionName)) {
        el.parentNode && el.parentNode.removeChild(el) || (el.style.display = 'none')
      }
    })
  }
}
```

3. 用法

```vue
<template>
  <el-button type="primary" icon="el-icon-plus" v-action:add>新增</el-button>
</template>
```
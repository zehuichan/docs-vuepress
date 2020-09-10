## 常见面试

#### Vue 常用生命周期

```js
export default {
  beforeCreate() {
    // 创建前
    // 实例化 Vue 阶段
    // 不能获取到 props、 data 中定义的值，也不能调用 methods 中定义的方法
    // 都没有渲染 DOM，所以我们也不能够访问 DOM，$el、$refs都不能访问
  },
  created() {        
    // 创建后
    // 实例化 Vue 阶段
    // 都没有渲染 DOM，所以我们也不能够访问 DOM，$el、$refs都不能访问
    // 如需访问 props、data等数据的话，就需要使用此钩子函数
  },
  beforeMount() {
    // 载入前
    // 在挂载开始之前被调用，相关的 render 函数首次被调用。实例已完成以下的配置：编译模板，把 data 中定义的值和template 生成 html，注意此时还没有挂载 html 到页面上
  },
  mounted() {
    // 载入后
    // 实例被挂载后调用，这时 el 被新创建的 $el 替换了，完成模板中的 html 渲染到 文档中
    // 在此钩子函数中可以访问到 DOM
  },
  beforeUpdate() {
    // 更新前
  },
  updated() {
    // 更新后
  },
  beforeDestroy() {
    // 销毁前
    // 在此钩子函数中可以做一些定时器销毁的工作，事件的解绑
  },
  destroyed() {
    // 销毁后
  }
}
```

#### Vue 数据双向绑定的原理

Vue 内部使用了 `Object.defineProperty()` 来实现双向绑定，通过这个函数可以监听到 `set` 和 `get` 的事件。在数据变动时发布消息给订阅者，触发响应监听回调。


#### Vue 组件间参数传递

1. 父组件与子组件传值

   父传子：子组件通过 `props` 接收数据

   子传父：子组件通过 `$emit` 方法传递参数

2. 非父子组件间的数据传递，兄弟组件传值

   `eventBus` 事件中心，相当于中转站，可以用它来传递事件和接收事件。

   `vuex` 状态管理模式，集中式存储管理应用的所有组件的状态。

栗子

```js
// eventBus.js
import Vue from 'vue'  
export default new Vue() 
```

使用

```js
// xxx.vue
import eventBus from 'path/eventBus.js'

export default {
  methods: {
    add(event) {
      eventBus.$emit('add', event.target)
    },
  }
}
```

#### Vue 中的 VNode

Virtual DOM 就是用一个原生的 JS 对象去描述一个 DOM 节点，在 Vue.js 中，Virtual DOM 是用 `VNode` 这么一个 Class 去描述

#### Vue 中的 data 属性必须是函数吗？这样定义 data 属性有什么问题吗？

`data` 属性在 `Vue` 组件中必须是函数，但在实例当中则不需要是函数。由于组件很可能被实例化多次，所以 `data` 属性必须是函数。

#### Vue 中 key 值的作用

当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。key的作用主要是为了高效的更新虚拟DOM。

#### Vue 的 template 编译的理解

1. 解析模板字符串生成 AST 抽象语法树

   `const ast = parse(template.trim(), options)`

2. 优化语法树，深度遍历这个 AST 树

   `optimize(ast, options)`

3. 生成代码

   `const code = generate(ast, options)`

#### Vue 的父组件和子组件生命周期钩子执行顺序是什么

1. 加载渲染过程  

    父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted
    
2. 子组件更新过程  

    父beforeUpdate -> 子beforeUpdate -> 子updated -> 父updated
    
3. 父组件更新过程  

    父beforeUpdate -> 父updated
    
4. 销毁过程  

    父beforeDestroy -> 子beforeDestroy -> 子destroyed -> 父destroyed
    
    

#### v-if 和 v-show 的区别

`v-if` 是“真实的”条件渲染，因为它可以确保条件块内的事件侦听器和子组件在触发期间正确销毁并重新创建。

`v-show` 是基于CSS的切换，无论初始条件如何，始终呈现元素。`v-show` 不支持 `<template>` 元素，也不配合使用 `v-else`。

#### v-if 和 v-for

当它们存在于同一级节点上时，`v-for` 具有比更高的优先级 `v-if`。这意味着 `v-if` 将在循环的每次迭代中分别运行。当你只想为某些项目渲染阶段时，这将非常有用，如下所示：

```vue
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>
```

上面仅渲染了不完整的待办事项。

## VueRouter相关

#### vue-router 的两种模式

1. hash 模式

原理是 `onhashchage` 事件，可以在window对象上监听这个事件

```js
window.onhashchange = function(event){
  console.log(event.oldURL, event.newURL)
  let hash = location.hash.slice(1)
}
```

2. history 模式

利用了HTML5 History Interface 中新增的pushState()和replaceState()方法

需要后台配置支持。如果刷新时，服务器没有响应响应的资源，会刷出404


#### vue-router 有哪几种导航钩子

三种

第一种，全局导航守卫  

- 全局前置守卫

```js
router.beforeEach((to, from, next) => {
  // start progress bar
  NProgress.start()
  next()
})
```

- 全局解析守卫

```js
router.beforeResolve((to, from, next) => {
  // 根据单页面路径的指向不同，访问的接口域名也不同
  let url
  if(to.path === 'a') {
    url = 'https://www.a.com'
  } else if(to.path === 'b') {
    url = 'https://www.b.com'
  }
  store.dispatch('app/updateAppBaseApi', url)
  next()
})
```

- 全局后置守卫

```js
router.afterEach((to, from) => {
  // done progress bar
  NProgress.done()
})
```

    
第二种，路由独享的守卫

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```


第三种，组件内的守卫
- `beforeRouterEnter`
- `beforeRouterUpdate`
- `beforeRouterLeave`

```js
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```

#### vue 中404页面的设置，为什么要如此设置

页面级的错误处理由 `vue-router` 统一处理，所有匹配不到正确路由的页面都会进 `404` 页面

```js
const constantRoutes = [
  // some constant routers
  // ...

  // 必须放在最后加载
  { path: '*', redirect: '/404' }
]
```

:::warning 注意事项
`404` 页面一定要最后加载，如果放在 `constantRoutes ` 一同声明了 `404` ，后面的所有页面都会被拦截到 `404`
:::
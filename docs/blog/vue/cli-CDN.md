## vue-cli3下增加CDN

先找到 `vue.config.js` ，设置 `cdn` 常量

```js
const isProd = process.env.NODE_ENV === 'production'

const cdn = {
  // webpack build externals
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios'
  },
  css: [],
  // https://www.jsdelivr.com/
  js: [
    '//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js'
  ]
}

```

之后通过 `html-webpack-plugin` 注入到 `index.html` 之中:

```js
module.exports = {
  // ...省略一些代码

  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    // if prod, add externals
    externals: isProd ? cdn.externals : {}
  },

  chainWebpack: (config) => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    // if prod is on
    // assets require on cdn
    if (isProd) {
      config.plugin('html').tap(args => {
        args[0].cdn = cdn
        return args
      })
    }
  }
}
```

找到 `public/index.html` 。通过你配置的 `CND Config` 依次注入 `css` 和 `js`。

```html
<head>
  <!-- require cdn assets css -->
  <% for (var i in htmlWebpackPlugin.options.cdn && htmlWebpackPlugin.options.cdn.css) { %>
  <link rel="stylesheet" href="<%= htmlWebpackPlugin.options.cdn.css[i] %>"/>
  <% } %>
</head>

<body>
<!-- require cdn assets js -->
<% for (var i in htmlWebpackPlugin.options.cdn && htmlWebpackPlugin.options.cdn.js) { %>
<script type="text/javascript" src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
<% } %>
<!-- built files will be auto injected -->
</body>
```
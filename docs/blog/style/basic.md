## 页面样式初始化

### index.less|.scss

``` less
body {
  line-height: 1.5;
  font-size: 14px;
  height: 100%;
  color: #333;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

label {
  font-weight: 700;
}

html {
  height: 100%;
  box-sizing: border-box;
}

#app {
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.no-padding {
  padding: 0px !important;
}

.padding-content {
  padding: 4px 0;
}

a:focus,
a:active {
  outline: none;
}

a,
a:focus,
a:hover {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

div:focus {
  outline: none;
}

.fr {
  float: right;
}

.fl {
  float: left;
}

.pr-5 {
  padding-right: 5px;
}

.pl-5 {
  padding-left: 5px;
}

.block {
  display: block;
}

.pointer {
  cursor: pointer;
}

.inlineBlock {
  display: block;
}

.clearfix {
  &:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
}
```

### 使用方法

``` javascript
// main.js

// A modern alternative to CSS resets
import 'normalize.css/normalize.css'
// or
// import 'reset.css/reset.css'

import '@/assets/less/index.less'
```

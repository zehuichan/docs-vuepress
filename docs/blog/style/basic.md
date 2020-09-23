## 页面样式初始化

### index.less|.scss

```less
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';;
  line-height: 1.5715;
  font-size: 14px;
  color: @text;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: @background;
}

label {
  font-weight: 400;
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

.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.multi-ellipsis--l2 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
}

.multi-ellipsis--l3 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
}

// 用于展示美化示例代码
.demo-block {
  padding: 16px;
  background-color: #fff;
}

code {
  border-radius: 4px;
  padding: 16px;
  position: relative;
  display: block;
  font-size: 12px;
  font-weight: 400;
  overflow-x: auto;
  line-height: 22px;
  word-break: break-all;
  white-space: pre-wrap;
  color: #455a64;
  font-family: Consolas, Menlo, Courier, monospace;
  background: #f7f7f7;

  & + code {
    margin-top: 12px;
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

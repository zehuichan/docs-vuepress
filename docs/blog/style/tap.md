## 长按样式

### tap.css

```css
.tap-active {
  tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
}

.tap-active:active {
  background-color: #ececec;
}
```

```css
.tap-active {
  position: relative;
}

.tap-active::before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: #000;
  border: inherit;
  border-color: #000;
  border-radius: inherit;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  content: ' ';
}

.tap-active:active::before {
  opacity: 0.1;
}
```

### 使用方法

```html
<div class="card tap-active"></div> 
```

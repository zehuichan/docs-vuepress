## <!DOCTYPE> 作用

1. `<!DOCTYPE>` 声明位于文档的最前面，出于 `<html>` 标签之前。告知浏览器的解析器，用什么文档类型规范来解析这个文档。
2. `<!DOCTYPE>` 不存在或格式不正确会导致文档以混杂方式呈现。

## 行内元素有哪些？块级元素有哪些？空(void)元素有那些？

1. 行内元素有：`<a> <b> <span> <input> <select> <strong>`
2. 块级元素有：`<div> <ul> <ol> <li> <dl> <dt> <dd> <h1> <h2> <h3> <h4> <p>`
3. 空元素：`<br> <hr> <img> <link> <meta> <embed>`

## CSS的盒子模型有几种？各有什么特点？

两种，IE 盒子模型、标准 W3C 盒子模型

1. 标准盒模型： 内容(content)、填充(padding)、边界(margin)、边框(border)
2. IE盒模型：内容(content)部分包含了边框(border)和填充(padding)



## 水平垂直居中CSS

第一种，缺点是需要知道子元素的宽高

 ```css
  .wrapper {
    position: relative;
    width: 300px;
    height: 300px;
    border: 1px solid #000;
  }

  .box {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    width: 100px;
    height: 100px;
    background-color: red;
  }
```

第二种，还是绝对定位，但这个方法不需要子元素固定宽高

```css
  .wrapper {
    position: relative;
    width: 300px;
    height: 300px;
    border: 1px solid #000;
  }

  .box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 100px;
    height: 100px;
    background-color: red;
  }
```

第三种，flex布局

```css
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 300px;
    height: 300px;
    border: 1px solid #000;
  }

  .box {
    width: 100px;
    height: 100px;
    background-color: red;
  }
```

## 什么是BFC?

BFC全称为块格式化上下文(Block Formatting Context) 

为了便于理解，我们换一种方式来重新定义BFC。一个HTML元素要创建BFC，则满足下列的任意一个或多个条件即可：

1. float的值不是none
2. position的值不是static或者relative
3. display的值是inline-block、table-cell、flex、table-caption或者inline-flex
4. overflow的值不是visible

BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。
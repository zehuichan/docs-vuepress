## Undefined类型

Undefined类型只有一个值，那就是特殊的 `undefined`，在使用 `var` 声明变量但未对其加以初始化时，这个变量的值就是 `undefined`

栗子：

```js
var message
console.log(message === undefined) // -> true

// 或者

var message = undefined
console.log(message === undefined) // -> true

let aaa
console.log(aaa === undefined) // -> true

// 注意，如果用 const 声明一个常量，必须要赋初值，否则就会报错。
const bbb // -> Missing initializer in const declaration 常量声明中缺少初始值设定项
```

另外：

```js
var message // 默认获得undefined值

// 下面变量并没有声明
// var age

console.log(message) // -> 'undefined'
console.log(age) // -> 报错 age is not defined

console.log(typeof message) // -> 'undefined'
console.log(typeof age) // -> 'undefined'
```

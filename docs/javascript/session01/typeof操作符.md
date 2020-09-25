## typeof操作符

- `'undefined'` —— 如果这个值未定义
- `'boolean'` —— 如果这个值是布尔值
- `'string'` —— 如果这个值是字符串
- `'number'` —— 如果这个值是数值
- `'object'` —— 如果这个值是对象或null
- `'function'` —— 如果这个值是函数

栗子1：

```js
var message = 'some message'

console.log(typeof message) // -> 'string'
console.log(typeof (message)) // -> 'string'
console.log(typeof 95) // -> 'number'
```

特殊的：

```js
console.log(typeof null) // -> 'object'
```

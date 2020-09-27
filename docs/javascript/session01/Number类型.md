## Number类型

### 整数

```js
// 十进制
var isNum = 55 // 整数

// 八进制
var octalNum1 = 070 // 八进制的56
var octalNum2 = 079 // 无效的八进制数值 -> 79
var octalNum3 = 08 // 无效的八进制数值 -> 8

// 十六进制
var hexNum1 = 0xA // 十六进制的 10
var hexNum2 = 0x1f // 十六进制的 13
```

注意，在进行算术计算时，所有八进制和十六进制表示的数值最终都被转成十进制数值

### 浮点数

```js
var floatNum1 = 1.1
var floatNum2 = 0.1
var floatNum3 = .1 // 有效，但不推荐
```

```js
var floatNum1 = 1. // 小数点后面没有数字 -> 1
var floatNum1 = 10.0 // 整数 -> 10
```

### 数值范围

```js
console.log(Number.MAX_VALUE) // -> 1.7976931348623157e+308
console.log(Number.MIN_VALUE) // -> 5e-324
```

### NaN

NaN即非数值（Not a Number）是一个特殊的数值

NaN与任何值都不相等，包括NaN自己本身

```js
console.log(NaN == NaN) // -> false
console.log(NaN === NaN) // -> false
```

`isNaN()` 在接收到一个值之后，会尝试将这个值转换为数值

```js
console.log(isNaN(NaN)) // -> true
console.log(isNaN(10)) // -> false （10是一个数值）
console.log(isNaN('10')) // -> false （可以转换成数值10）
console.log(isNaN('blue')) // -> true （不能转换成数值）
console.log(isNaN(true)) // -> false （可以被转换成数值1）
```

### 数值转换

`Number()` 、 `parseInt()` 、 `parseFloat()` 这3个函数都可以把非数值转换为数值

#### Number()

`Number()` 函数的转换规则如下

- 如果是 `Boolean` 值，`true` 和 `false` 将分别被转换成为1和0
- 如果是数字值，只是简单的传入和返回
- 如果是 `null` 值，返回0
- 如果是 `undefined` ，返回 `NaN`

```js
console.log(Number('hello world')) // -> NaN
console.log(Number('')) // -> 0
console.log(Number('000011')) // -> 11
console.log(Number(true)) // -> 1
```

#### parseInt()

```js
console.log(parseInt('1234blue')) // -> 1234
console.log(parseInt('')) // -> NaN
console.log(parseInt('0xA')) // -> 10
console.log(parseInt(22.5)) // -> 22
console.log(parseInt('070')) // -> ECMAScript3 -> 56，ECMAScript5 -> 70
console.log(parseInt('70')) // -> 70
console.log(parseInt('0xf')) // -> 15
```

```js
console.log(parseInt('0xaf', 16)) // -> 175
console.log(parseInt('af', 16)) // -> 175
console.log(parseInt('af')) // -> 175

// 指定基数
console.log(parseInt('10', 2)) // -> 2 （按二进制）
console.log(parseInt('10', 8)) // -> 8 （按八进制）
console.log(parseInt('10', 10)) // -> 10 （按十进制）
console.log(parseInt('10', 16)) // -> 16 （按十六进制）
```

#### parseFloat()

```js
console.log(parseFloat('1234blue')) // -> 1234
console.log(parseFloat('0xa')) // -> 0
console.log(parseFloat('22.5')) // -> 22.5
console.log(parseFloat('22.34.5')) // -> 22.34
console.log(parseFloat('0908.5')) // -> 908.5
console.log(parseFloat('3.125e7')) // -> 31250000
```

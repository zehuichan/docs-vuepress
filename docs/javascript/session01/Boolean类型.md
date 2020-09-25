## Boolean类型

Boolean类型只有两个字面值：`true` 和 `false`，这两个值与数字值不是一回事，因此 `true` 不一定等于1，而 `false` 也不一定等于0

栗子：

```js
// 数据类型Boolean
console.log(Boolean(true)) // -> true
console.log(Boolean(false)) // -> false

// 数据类型String
console.log(Boolean('12321312dadad~@$')) // -> true
console.log(Boolean('')) // -> false

// 数据类型Number
console.log(Boolean(123)) // -> true
console.log(Boolean(Infinity)) // -> true
console.log(Boolean(-Infinity)) // -> true
console.log(Boolean(0)) // -> false
console.log(Boolean(NaN)) // -> false

// 数据类型Object
console.log(Boolean({})) // -> true
console.log(Boolean([])) // -> true
console.log(Boolean(Date)) // -> true
console.log(Boolean(null)) // -> false

// 数据类型Undefined
console.log(Boolean(undefined)) // -> false
```

下表为各种数据类型及其对应的转换规则

| 数据类型 | 转换为true的值 | 转换为false的值 |
| --- | --- | --- |
| Boolean | true | false |
| String | 任何非空字符串 | ''空字符串 |
| Number | 任何非0数字值（包括无穷大） | 0和NaN |
| Object | 任何对象 | null |
| Undefined | n/a(不适用) | undefined |

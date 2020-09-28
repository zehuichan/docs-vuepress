## String类型

### 字符字面量

| 字面量 | 含义 |
| --- | --- |
| `\n` | 换行 |
| `\t` | 制表 |
| `\b` | 空格 |
| `\r` | 回车 |
| `\f` | 进纸 |
| `\\` | 斜杠 |
| `\'` | 单引号（'），在用单引号表示的字符串中使用，例如：'He said, \'hey.\'' |
| `\"` | 双引号（"），在用单引号表示的字符串中使用，例如：'He said, \"hey.\"' |
| `\xnn` | 以十六进制代码nn表示的一个字符（其中n为0~F）。例如，\x41表示A |
| `\unnnn` | 以十六进制代码nnnn表示的一个Unicode（其中n为0~F）。例如，\u03a3表示希腊字符"Σ" |

### 转换为字符串

```js
var age = 11
console.log(age.toString()) // -> 字符串 "11"
var found = true
console.log(found.toString()) // -> 字符串 "true"
```

通过传递基数，`toString()` 可以输出以二进制、八进制、十六进制，乃至其他任意有效进制格式表示的字符串值

```js
var num = 10
console.log(num.toString()) // -> "10"
console.log(num.toString(2)) // -> "1010"
console.log(num.toString(8)) // -> "12"
console.log(num.toString(16)) // -> "a"
```

在不知道要转换的是不是 `null` 或 `undefined` 的情况下，还可以使用转型函数 `String()`，`String()` 函数遵循下列转换规则

- 如果值有 `toString()` 方法，则调用改方法（没有参数）并返回相应的结果
- 如果值是 `null` ，则返回 "null"
- 如果值是 `undefined` ，则返回 "undefined"

```js
var v1 = 10
var v2 = true
var v3 = null
var v4

console.log(v1) // -> "10"
console.log(v2) // -> "true"
console.log(v3) // -> "null"
console.log(v4) // -> "undefined"
```

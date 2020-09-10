## 原型链

每个函数都有 `prototype` 属性，除了 `Function.prototype.bind()`，该属性指向原型

每个对象都有 `__proto__` 属性，指向了创建该对象的构造函数的原型。其实这个属性指向了 `[[prototype]]`，但是 `[[prototype]]` 是内部属
性，我们并不能访问到，所以使用 `__proto__` 来访问。

对象可以通过 `__proto__` 来寻找不属于该对象的属性，`__proto__` 将对象连接起来组成了原型链。

## 闭包

闭包的定义很简单：函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。

什么是闭包: 闭包是指有权访问另外一个函数作用域中的变量的函数.可以理解为(能够读取其他函数内部变量的函数)

闭包的作用: 正常函数执行完毕后,里面声明的变量被垃圾回收处理掉,但是闭包可以让作用域里的 变量,在函数执行完之后依旧保持没有被垃圾回收处理掉

#### 栗子

```js
function A() {
  let a = 1
  function B() {
      console.log(a)
  }
  return B
}
```

#### 常见面试题

1. for 循环中打印

```js
for (var i = 0; i < 4; i++) {
  setTimeout(function() {
    console.log(i);
  }, 300);
}
```

打印出来的都是 4, 可能部分人会认为打印的是 0,1,2,3

## 浅拷贝

1. `Object.assign`

```js
let a = {
  age: 1
}
let b = Object.assign({}, a)
a.age = 2
console.log(b.age) // 1
```

2. 展开运算符（…）来解决

```js
let a = {
  age: 1
}
let b = {...a}
a.age = 2
console.log(b.age) // 1
```

## 深拷贝

1. 利用 `lodash.cloneDeep`

## this

在全局环境中，`this` 指向 `window` 对象，ES5函数中，`this` 对象是在运行时基于函数的执行环境（变量对象，如全局是 `window`），匿名函数
的执行环境具有全局性，因此其 `this` 对象通常指向 `window` （在非严格模式下），在严格模式下 `this` 指向的是 `undefined`，为了在严格模
式下 可以使用非直接调用 `eval` 的方式，如 `(0, eval)(this)`，使用了逗号运算符，括号前面就会返回 `eval`，但是和直接调用的区别就是 `this`
指向不一样。ES6的箭头函数中，`this` 对象是在函数定义的执行环境。

```js
function foo() {
  console.log(this.a)
}
var a = 1
foo()

var obj = {
  a: 2,
  foo: foo
}
obj.foo()

// 以上两者情况 `this` 只依赖于调用函数前的对象，优先级是第二个情况大于第一个情况

// 以下情况是优先级最高的，`this` 只会绑定在 `c` 上，不会被任何方式修改 `this` 指向
var c = new foo()
c.a = 3
console.log(c.a)

// 还有种就是利用 call，apply，bind 改变 this，这个优先级仅次于 new
```

## 防抖

假设一个用户一直触发这个函数，且每次触发函数的间隔小于wait，防抖的情况下只会调用一次

## 节流

而节流的情况会每隔一定时间（参数wait）调用函数

## call, apply, bind 的区别

首先说下前两者的区别。

`call` 和 `apply` 都是为了解决改变 `this` 的指向。作用都是相同的，只是传参的方式不同。

除了第一个参数外，`call` 可以接收一个参数列表，`apply` 只接受一个参数数组。

```js
let a = {
  value: 1
}
function getValue(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value)
}
getValue.call(a, 'czh', '29')
getValue.apply(a, ['czh', '29'])
```

## Promise

`Promise` 是 `ES6` 新增的语法，解决了回调地狱的问题。

可以把 `Promise` 看成一个状态机。初始是 `pending` 状态，可以通过函数 `resolve` 和 `reject` ，将状态转变为 `resolved` 或者 `rejected` 状态，状态一旦改变就不能再次变化。

`then` 函数会返回一个 `Promise` 实例，并且该返回值是一个新的实例而不是之前的实例。因为 `Promise` 规范规定除了 `pending` 状态，其他状态是不可以改变的，如果返回的是一个相同实例的话，多个 `then` 调用就失去意义了。

## async 和 await 

一个函数如果加上 `async` ，那么该函数就会返回一个 `Promise`

```js
async function test() {
  return "1";
}
console.log(test()); // -> Promise {<fulfilled>: "1"}
```

可以把 `async` 看成将函数返回值使用 `Promise.resolve()` 包裹了下。

`await` 只能在 `async` 函数中使用

```js
function sleep() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('finish')
      resolve("sleep");
    }, 2000);
  });
}
async function test() {
  let value = await sleep();
  console.log("object");
}
test()
```

上面代码会先打印 `finish` 然后再打印 `object` 。因为 `await` 会等待 `sleep` 函数 `resolve` ，所以即使后面是同步代码，也不会先去执行同步代码再来执行异步代码。
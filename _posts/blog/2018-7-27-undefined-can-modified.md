---
layout: post
title: Undefined可以被修改
categories: [Shell]
description: undefined可以左右变量被修改其值 
keywords: undefined, value
---

在全局条件下 undefined 是不可以被修改的。
在局部条件下 undefined 在某种情况下是可以被修改的。
但是它有可能在非全局作用域中被当作标识符（变量名）来使用(因为undefined不是一个保留字))，这样做是一个非常坏的主意，因为这样会使你的代码难以去维护和排错。

```javascript
// 不要这样做！

// 打印 'foo string' PS：说明undefined的值和类型都已经改变
(function() {
var undefined = 'foo';
console.log(undefined, typeof undefined)
})()

// 打印 'foo string' PS：说明undefined的值和类型都已经改变
(function(undefined) {
console.log(undefined, typeof undefined)
})('foo')

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined
```
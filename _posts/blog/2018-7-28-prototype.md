---
layout: post
title: 原型链简析
categories: [Blog, Todo]
description: simple introduction of javascript prototype 
keywords: prototype, link
---
## 对象的产生 ##
JS中一切皆对象，本人也不同意这种说法，应该是除了undefined和null，详见[知乎](https://www.zhihu.com/question/264157543/answer/277450960),[博客园](http://www.cnblogs.com/myvin/p/4660138.html)
JS中变量的声明有两种方式：**字面量**和**new表达式**
对象通过字面量的方式进行声明，本质上还是通过new关键字来实现
那么new关键字是在使用时，到底为我们做了哪些功能，请继续阅读下一节
## new的内部机制 ##
我们这里利用伪代码形式来模拟
[引用](https://blog.csdn.net/gongzhuxiaoxin/article/details/52625842)
```javascript
function Animal (name) {
    this.name = name;
};
var cat = new Animal('cat');
// 使用伪代码模拟工作流程
new Animal('cat') = {
    var obj = {};
    obj.__proto__ = Animal.prototype;
    var result = Animal.call(obj, "cat");
    return typeof result === 'object' ? result : obj;
}
```
>1. 创建一个空对象obj;
>2. 将obj的__proto__属性指向Animal的原型对象prototype，此时便建立了obj对象的原型链：obj->Animal.prototype->Object.prototype->null [如果你不了解JS原型链，请先阅读：JS原型和原型链](http://www.cnblogs.com/onepixel/p/5024903.html)
>3. 在obj对象的执行环境调用Animal函数并传递参数“cat”。 相当于var result = obj.Animal("cat")。当这句执行完之后，obj便产生了属性name并赋值为"cat"。
>4. 考察第3步返回的返回值，如果无返回值或者返回一个非对象值，则将obj返回作为新对象；否则会将返回值作为新对象返回

__proto__ prototype
call, apply

## 继承(原型链) ##


http://www.cnblogs.com/onepixel/p/5024903.html#4028310

http://www.cnblogs.com/llcMite/p/8642956.html

https://github.com/lin-xin/blog/issues/7

https://github.com/mqyqingfeng/Blog/issues/2

https://juejin.im/post/58f94c9bb123db411953691b

https://www.jianshu.com/p/dee9f8b14771

https://zhuanlan.zhihu.com/p/22787302

https://juejin.im/entry/5987c729f265da3e2b330da7

https://segmentfault.com/a/1190000009443651

https://blog.csdn.net/zhaoruda/article/details/79381423

http://caibaojian.com/javascript-class.html

https://blog.csdn.net/dalangzhonghangxing/article/details/59109622

https://www.cnblogs.com/gromimiss/p/6066268.html

http://www.cnblogs.com/myvin/p/4660138.html

http://www.cnblogs.com/onepixel/p/5024903.html#4028310

http://www.cnblogs.com/llcMite/p/8642956.html

https://www.cnblogs.com/djdliu/p/6993051.html

https://www.cnblogs.com/leezhxing/p/4275474.html

https://www.cnblogs.com/chenjinxinlove/p/8467752.html

https://www.cnblogs.com/DF-fzh/p/5619319.html

https://www.cnblogs.com/pengwenfan/p/8847585.html

https://www.cnblogs.com/deryck/p/4164623.html

https://www.jb51.net/article/61014.htm

https://www.jb51.net/article/55951.htm

https://blog.csdn.net/qq563969790/article/details/76690962

https://segmentfault.com/a/1190000009443651

https://blog.csdn.net/u012468376/article/details/53127929

https://segmentfault.com/a/1190000008959943

https://github.com/mqyqingfeng/Blog

https://github.com/mqyqingfeng/Blog/issues/7

https://juejin.im/user/58e4b9b261ff4b006b3227f4/posts

https://juejin.im/post/59eff1fb6fb9a044ff30a942

https://juejin.im/post/5b5a9451f265da0f6a036346#heading-6

https://github.com/mqyqingfeng/Blog/issues/27

https://blog.csdn.net/gongzhuxiaoxin/article/details/52625842



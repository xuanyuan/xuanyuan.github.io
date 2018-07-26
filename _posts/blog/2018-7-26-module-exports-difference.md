---

layout: post

title: module.exports和exports小结

categories: Blog

description: module.exports和exports小结

keywords: module.exports, exports小结

---

先上官档

exports#

Added in: v0.1.12

A reference to the module.exports that is shorter to type. See the section about the exports shortcut for details on when to use exports and when to use module.exports.

https://nodejs.org/docs/latest-v9.x/api/modules.html#modules_exports

exports作为module.exports引用，如果重新赋值将不在绑定到之前的值

    // foo.js
    exports = module.exports = {a: 1};
    exports = {a: 2};
    console.log(exports == module.exports); // false

    // bar.js
    var foo = require('./foo');
    console.log(foo.a); // print 1

上面代码表明模块代码真正导出的是module.exports

    // foo.js
    exports = module.exports = {a: 1};
    exports.a = 2;

    // bar.js
    var foo = require('./foo');
    console.log(foo.a); // print 2

上面的代码表明module.exports和exports具有相同引用，指向同一块内存区域。修改引用所指向的值时会做出，另一个也会改变


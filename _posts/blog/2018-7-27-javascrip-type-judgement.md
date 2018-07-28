JavaScript类型

基本数据类型有这五种: Undefined、Null、String、Number、Boolean。凑齐五个召唤神龙

引用类型有这几种：Object、Array、RegExp、Date、Function、
特殊的基本包装类型(String、Number、Boolean)以及单体内置对象(Global、Math) 。
```javascript
var toString = Object.prototype.toString
```
>判断类型的时候经常会看到使用上面的方式，一直疑惑为什么要用到原型，通过查看MDN文档解释，苦思冥想后才明白是用利用对象继承的未作修改的toString方法，来得出类型。

摘录如下

>每个对象都有一个toString()方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。默认情况下，toString()方法被每个Object对象继承。如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中type是对象的类型。
```javascript
var o = new Object();
o.toString(); // returns [object Object]
```
### Null ###
```javascript
var isNull = function (obj) {
    return obj === null;
}
```
### Undefined ###
```javascript
// 判断已声明变量是否未赋值，判断未声明变量会报错
var isUndefined = function (obj) {
    // 不能使用
    return obj === void 0;
}
```

### Boolean ###
```javascript
var isBoolean = function (obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
}
```
### number ###
var isNumber = function (obj) {
    return toString.call(obj) === '[object Number]';
}

### string ###
var isString = function (obj) {
    return toString.call(obj) === '[object String]';
}

### object ###
```javascript
var isObject = function (obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}
```


参考

https://juejin.im/post/5aba32d9f265da239e4e1b6c
/**
 * Created with Software Dept.
 *
 * User: zhangdj
 * Date: 2018/7/26
 * Time: 19:45
 * Description:
 */

var isNull = function (obj) {
    return obj === null;
}

// 判断已声明变量是否未赋值，判断未声明变量会报错
var isUndefined = function (obj) {
    // 不能使用
    return obj === void 0;
}
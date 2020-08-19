(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
* 1.npm init 初始化生成package.json文件
* 2.下载browserify
*       全局：npm install browserify -g
*       局部：npm install browserify --save-dev
* 3.打包处理
*       browserify src/app.js -o dist/bundle.js
* */

let obj = require("./module3")
console.log(obj);
},{"./module3":4}],2:[function(require,module,exports){
exports.k = 6
},{}],3:[function(require,module,exports){
let k = require("./module1")
let k2 = k.k + 1
exports.k = k2
},{"./module1":2}],4:[function(require,module,exports){
let k = require("./module2")
module.exports={
    name:'module3',
    age : k.k
}
},{"./module2":3}]},{},[1]);

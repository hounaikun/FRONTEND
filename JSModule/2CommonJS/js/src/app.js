/*
* 1.npm init 初始化生成package.json文件
* 2.下载browserify（Browserify 可以让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码）
*       全局：npm install browserify -g
*       局部：npm install browserify --save-dev
* 3.打包处理
*       browserify src/app.js -o dist/bundle.js
* 4.index.html 引入bundle.js
* */

let obj = require("./module3")
console.log(obj);
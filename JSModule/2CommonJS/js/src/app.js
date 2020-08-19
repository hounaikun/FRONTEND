/*
* 1.npm init 初始化生成package.json文件
* 2.下载browserify
*       全局：npm install browserify -g
*       局部：npm install browserify --save-dev
* 3.打包处理
*       browserify src/app.js -o dist/bundle.js
* 4.index.html 引入bundle.js
* */

let obj = require("./module3")
console.log(obj);
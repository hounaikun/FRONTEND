/*
* 1、npm init
* 2、下载、安装webpack
* 3、运行指令
*   开发环境指令：webpack src/index.js -o bundle/built.js --mode=development
*       功能：webpack 能够编译打包 js 和 json 文件，并且能将 es6 的模块化语法转换成 浏览器能识别的语法。
*   生产环境指令：webpack src/index.js -o bundle/built.js --mode=production
*       功能：在开发配置功能上多一个功能，压缩代码。
* 4.结论
*   webpack 能够编译打包 js 和 json 文件。 能将 es6 的模块化语法转换成浏览器能识别的语法。 能压缩代码。
* 5.问题
*   不能编译打包 css、img 等文件。 不能将 js 的 es6 基本语法转化为 es5 以下语法。
* */
import data from "./data.json"
console.log(data);

function add(x,y) {
    console.log(x + y);
}
add(1,2)
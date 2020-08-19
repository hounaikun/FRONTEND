/*
* 1.npm init 初始化,生成package.json文件
* 2.安装babel-cli,babel-preset-es2015和browserify  (cli : command line interface)
*       npm install babel-cli browserify -g
*       npm install babel-preset-es2015 --save-dev
*       preset 预设（将es6转换成es5的所有插件打包）
* 3.定义.babelrc文件  run control
*       {
*           "presets":["es2015]
*       }
* 4.编码
* 5.编译
*      使用Babel将ES6编译为ES5代码（但包含CommonJS语法）：babel js/src -d js/lib
*      使用browerify编译js：browserify js/lib/app.js -o js/lib/bundle.js
* 6.页面引入测试
* 7.引入第三方模块（jQuery）
*       7.1下载jQuery模块
*           npm install jquery@1 --save    //@1代表是1.xxx最新的版本，不加@1则下载最新的
*       7.2在app.js中引入并使用
* */
import m1 from "./module1.js"
import {a,fun} from "./module2.js"

console.log(a);
fun()
console.log(m1);
console.log($);

/*
* 规范：
*   1.CommonJS
*       说明：
*           http://wiki.commonjs.org/wiki/Modules/1.1
*           每个文件都可当作一个模块
*           在服务器端：模块的加载是运行时同步加载的
*           在浏览器端：模块需要提前编译打包处理app.js(打包工具-Browserify)
*       实现：node.js
*   2.AMD
*       说明：
*           https://github.com/amdjs/amdjs-api/wiki/AMD
*           Asynchronous Module Definition(异步模块定义)
*           专门用于浏览器端，模块的加载是异步的
*       基本语法：
*           定义暴露模块：
*               //定义没有依赖的模块
*               define(function(){
*                   return 模块;
*               })
*               //定义有依赖的模块
*               define(['module1','module2'],function(m1,m2)){
*                   return 模块
*               }
*           引入使用模块：
*               require(['module1','module2'],function(m1,m2)){
*                   使用m1,m2
*               }
*       使用浏览器端：
*           Require.js
*           http://www.requirejs.cn（访问不了）
*           http://www.ruanyifeng.com/blog/2012/11/require_js.html（访问不了）
*           https://requirejs.org/
*   3.CMD
*   4.ES-6
* */
/*
*  在node中，通过require() 函数来引入外部的模块
*       require() 可以传递一个文件的路径作为参数，node将会自动根据该路径来引入外部模块
*       这里路径，如果使用相对路径，必须以.或..开头
*   使用require() 引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块
*
*
*   webstorm配置node.js
*       setting -- Node.js And Npm 中配置安装好的node.js和npm路径
* */
let md = require("./2模块化")
console.log(md.x);
console.log(md.y);

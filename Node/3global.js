/*
* 在node中有一个全局对象 global ,它的作用和网页中window类似
*   在全局中创建的变量都会作为global的属性保存
*   在全局中创建的函数都会作为global的方法保存
*
*
*/
console.log(global);

/*
* 当node在执行模块中的代码时，他会首先在代码的最顶部，添加如下代码
*   function(exports,require,module,__filename,__dirname){
*
*   在代码最底部，添加如下代码
*   }
* 实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递进了5个实参
*   exports
*       -该对象用来将变量或函数暴露到外部
*   require
*       -函数，用来引入外部的模块
*   module
*       -module代表的是当前模块本身
*       -exports就是module的属性
*       -既可以使用exports导出，也可以使用module.exports导出
*   __filename
*       当前模块的完整路径
*   __dirname
*       当前模块所在文件夹的完整路径
*/


/*
* 我们使用require()引入外部模块时，使用的就是模块标识，我们可以通过模块标识找到指定模块
*   模块分为两大类
*       核心模块
*           由node引擎提供的模块
*           核心模块的标识就是，模块的名字
*       文件模块
*           由用户自己创建的模块
*           文件名模块的标识就是文件的路径（绝对路径、相对路径）
*               相对路径使用.或..开头
*
* */
let math = require("math")
// console.log(math);

/*
* arguments.callee
*   这个属性保存的是当前执行的函数对象
* */
//console.log(arguments.callee+"");
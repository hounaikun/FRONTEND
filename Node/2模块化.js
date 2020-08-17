/*
* 模块化
*   - 在node中，一个js文件就是一个模块
*   - 在Node中，每一个js文件中的js代码都是独立运行在一个函数中
*       而不是全局作用域，所以一个模块的变量和函数在其他模块中无法访问
* */
console.log("我是module01.js文件");

/*
* 我们可以通过exports 来向外部暴露变量和方法
*   只需要将暴露给外部的变量和方法设置为exports的属性即可
* */
exports.x = "我是module01.js文件的变量x"
exports.y = "我是module01.js文件的变量y"




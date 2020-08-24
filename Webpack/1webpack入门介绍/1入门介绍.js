/*
* 1.官网：https://www.webpackjs.com/concepts/
* 2.是什么？
*   本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，
*           它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。
* 3.五个核心：
*   3.1、Entry
*       入口，表示以哪个文件为入口起点开始打包，分析构建内部依赖图。
*   3.2、Output
*       输出，webpack打包后的资源bundles输出到哪里去，以及如何命名。
*   3.3、Loader
*       让webpack能够去处理那些非javascript文件(webpack自身只理解javascript)
*   3.4、Plugins
*       插件，用于执行范围更广的任务，插件的范围包括，从打包优化和压缩，一直重新定义环境的变量等。
*   3.5、Mode
*       模式，指示webpack使用相应模式的配置
*           development：能让代码本地调试 运行的环境
*           production：能让代码优化上线 运行的环境
* 4.下载、安装
*       npm install webpack webpack-cli -g //全局安装
*       npm install webpack webpack-cli -D //本地安装
* */
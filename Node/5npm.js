/*
*npm(Node Package Manager)
*   中文官网：https://www.npmjs.cn/
*   CommonJS包规范是理论，NPM是其中一种实践
*   对于Node而言，NPM帮助其完成了第三方模块的发布、安装和依赖等，借助NPM，Node与第三方模块之间形成了很好的一个生态系统
*   常用命令:
*       npm -init
*               初始化并创建package.json文件
*       npm -v
*               查看版本
*       npm
*               帮助说明
*       npm search 包名
*               搜索模块包
*       npm install 包名
*               在当前目录安装包
*       npm install 包名 -g
*               全局模式安装包
*       npm remove 包名
*               删除一个模块
*       npm install 文件路径
*               从本地安装
*       npm install 包名 -registry=地址
*               从镜像源安装
*       npm config set registry 地址
*               设置镜像源
*
*   通过npm下载的的包都放到了node_modules文件夹中，我们通过npm下载的包，直接通过包名引入即可
*
*   node在使用模块名字来引入模块时，它会首先在当前目录的node_modules中寻找是否含有该模块
*       如果有则直接使用，如果没有则去上一级目录的node_modules中寻找
*       如果有则直接使用，如果没有则再去上一级目录寻找，直到找到为止
*       直到找到磁盘的根目录，如果依然没有，则报错
*
* */
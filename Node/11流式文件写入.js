/*
* 同步，异步，简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
*
* 流式文件的写入
*   创建一个可写流
*   fs.createWriteSteam(path[,options])
*       -可以用来创建一个可写流
*       -path：文件路径
*       -options:配置的参数
* */
let fs = require("fs")
let ws = fs.createWriteStream("hello.txt");

/*
* 可以通过监听流的open和close事件来监听流的打开和关闭
*
*   on(事件字符串，回调函数)
*       - 可以为对象绑定一个事件
*   once(事件字符串，回调函数)
*       - 可以为对象绑定一个一次性的事件，该事件将会触发一次以后自动关闭
* */
ws.once("close",function () {
    console.log("流关闭了");
})
ws.once("open",function () {
    console.log("流打开了");
})

ws.write("锄禾日当午")
ws.write("汗滴禾下土")
ws.write("谁知盘中餐")
ws.write("粒粒皆辛苦1")

ws.end()
/*
* 1.同步文件读取
* 2.异步文件读取
* 3.简单文件读取
*   fs.readFile(path[,options],callback)
*       - callback（err,data）
*           err 错误对象
*           data 读取到的数据，会返回一个Buffer
*   fs.readFileSync(path[,options])
* */
let fs = require("fs");
fs.readFile("hello.txt",function (err,data) {
    if(!err){
        console.log(data.toString());
    }
})
/*
* 4.流式文件读取
*   流式文件可以分多次将文件读取到内存中
* */
let rs = fs.createReadStream("hello.txt")
rs.once("close",function () {
    console.log("流关闭了");
})
rs.once("open",function () {
    console.log("流打开了");
})
//如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
rs.on("data",function (data) {
    console.log(data.toString());
})
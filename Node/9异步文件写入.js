/*
* 异步文件写入
*   fs.open(path,flags[,mode],callback)
*       - 用来打开一个文件
*       - 异步调用的方法，结果都是通过回调函数的参数返回的
*       - 回调函数两个参数：
*           err 错误对象，如果没有错误则为null
*           fd 文件描述符
*   fs.write(fd,string[,position[,encoding]],callback)
*       - 用来异步写入一个文件
*   fs.close(fd,callback)
* */
let fs = require("fs");
fs.open("file.txt","w",function (err,fd) {
    if(!err){
        fs.write(fd,"异步方法写入内容",function (err) {
            if(!err){
                console.log("写入成功");
            }
            fs.close(fd,function (err) {
                if(!err){
                    console.log("文件已关闭");
                }
            })
        })
    }else{
        console.log(err);
    }
})
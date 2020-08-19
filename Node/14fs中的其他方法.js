let fs = require("fs")
//检查一个文件是否存在
console.log(fs.existsSync("file.txt"));
/*
* fs.stat(path,callback)
* fs.statSync(path)
*   - 获取文件状态
*   - 返回一个对象，这个对象中保存了当前对象状态的相关信息
* */
fs.stat("file.txt",function (err,stat) {
    /*
    * size 文件的大小
    * isFile() 是否是一个文件
    * isDirectory() 是否是一个文件夹（目录）
    * */
    console.log(stat);
    console.log(stat.size);
    console.log(stat.isFile());
    console.log(stat.isDirectory());
})
/*
* fs.unlink(path,callback)
* fs.unlinkSync(path)
*   删除文件
* */
// fs.unlinkSync("hello.txt")
/*
* fs.readdir(path[,options],callback)
* fs.readdirSync(path[,options])
*    读取一个目录结构
* */
fs.readdir(".",function (err,files) {
    if(!err){
        console.log(files);
    }
})
/*
* fs.truncate(path,len,callback)
* fs.truncateSync(path,len)
*   截断文件,将文件修改为指定的大小
* */

/*
* fs.mkdir(path[,mode],callback)
* fs.mkdirSync(path[,mode])
*   -创建一个目录
* fs.rmdir(path,callback)
* fs.rmdirSync(path)
*   -删除一个目录
* */

/*
* fs.rename(oldPath,newPath,callback)
* fs.renameSync(oldPath,newPath)
*   -对文件进行重命名
* */

/*
* fs.watchFile(filename[,options],listener)
*   -监视文件的修改
*   -参数
*       filename 要监视文件的名字
*       options 配置选项
*       listener 回调函数，当文件发生变化时，回调函数执行
*           在回调函数有两个参数
*               curr 当前文件的状态
*               prev 修改前文件的状态
*                   -这两个对象都是stats对象
* */
fs.watchFile("file.txt",function (curr,preview) {
    console.log("文件改变了")
})
let fs = require("fs")
let rs = fs.createReadStream("file.txt")
rs.once("close",function () {
    console.log("可读流关闭了");
})
rs.once("open",function () {
    console.log("可读流打开了");
})

let ws = fs.createWriteStream("hello.txt");
ws.once("close",function () {
    console.log("可写流关闭了");
})
ws.once("open",function () {
    console.log("可写流打开了");
})
//pipe() 可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws)
/*
* Buffer(缓冲区)
*   - Buffer的结构和数组很像，操作的方法和数组类似
*   - 数组中不能存储二进制的文件，而buffer就是专门用来存储二进制数据
*   - 使用buffer不需要引入模块，直接使用即可
*   - 在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示，
*           buffer中每一个元素的范围是00-ff
* */
const atr = "Hello World"
//将一个字符串保存到buffer中
let buf = Buffer.from(atr)
console.log(buf);
//创建一个10字节的buffer
let buffer = Buffer.alloc(10);
buffer[0] = 88
buffer[2] = 88
buffer[4] = 88
buffer[10] = 88
console.log(buffer);
//将缓冲区的数据转换为字符串
console.log(buffer.toString());
/*
* buffer的大小一旦确定，则不能修改，Buffer实际上是对底层内存的直接修改
* */

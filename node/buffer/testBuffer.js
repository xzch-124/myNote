// 1. 创建一个默认初始化数据为0的buffer
// 可选参数：指定初始化的值(16进制)
let buf1 = Buffer.alloc(10)
let buf2 = Buffer.alloc(10, 0x2)

console.log(buf1)
console.log(buf2)
// <Buffer 00 00 00 00 00 00 00 00 00 00>
// <Buffer 02 02 02 02 02 02 02 02 02 02>

// 2. 创建一个不初始化的buffer，更快，但可能造成旧数据的泄露
let buf3 = Buffer.allocUnsafe(10)
console.log(buf3)
// Node.js 可以在一开始就使用 --zero-fill-buffers 命令行选项强制填充为0
// <Buffer 00 00 00 00 00 00 00 00 00 00>
buf3.fill(0)
console.log(buf3)
// <Buffer 00 00 00 00 00 00 00 00 00 00>

// 3. buffer的转换
let buf4 = Buffer.from('hello')
let buf5 = Buffer.from([1,2,3,4])
console.log(buf4)
console.log(buf5)
console.log(buf4.toString())
// <Buffer 68 65 6c 6c 6f>
// <Buffer 01 02 03 04>
// hello

// 4. buffer的读写
let buf6 = Buffer.from([1,2,3,4])
console.log(buf6[0])
buf6[0] = 0x5
console.log(buf6)
// 1
// <Buffer 05 02 03 04>
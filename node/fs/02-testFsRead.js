const fs = require('fs')

// // 1. 异步读入
// fs.readFile('./座右铭.txt', (err, data) => {
//   if(err) {
//     console.log('读入失败')
//     return
//   }
//   console.log(data)
// })
// // 指定编码，默认buffer
// fs.readFile('./座右铭.txt', 'utf-8', (err, data) => {
//   if(err) {
//     console.log('读入失败')
//     return
//   }
//   console.log(data)
// })

// // 2. 同步读入
// let data = fs.readFileSync('./座右铭.txt');
// let data2 = fs.readFileSync('./座右铭.txt', 'utf-8');
// console.log(data)
// console.log(data2)

// 3. 流式读入
//创建读取流对象
let rs = fs.createReadStream('./观书有感.txt', 'utf-8');
//每次取出 64k 数据后执行一次 data 回调
rs.on('data', data => {
console.log(data);
console.log(data.length);
});
//读取完毕后, 执行 end 回调
rs.on('end', () => {
console.log('读取完成')
})
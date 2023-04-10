const fs = require('fs')

// // 1. 异步写入，不阻塞进程，继续执行之后的代码
// fs.writeFile('./座右铭.txt', '吾日三省吾身', (err) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log('fs.writeFile')
//   return
// })

// // 2. 同步写入，写完再继续执行
// try {
//   fs.writeFileSync('./座右铭.txt', '三人行', { flag: 'a' });
// } catch (e) {
//   console.log(e);
// }

// console.log('end')

// // 3. 追加写入
// // 等效于 flag: a
// fs.appendFile('./座右铭.txt', '\r\n为人谋而不忠乎？与朋友交而不信乎？传不习乎？', err => {
//   if (err) throw err;
//   console.log('追加成功')
// });

// fs.appendFileSync('./座右铭.txt', '\r\n温故而知新, 可以为师矣。');

// 4. 流式写入
let ws = fs.createWriteStream('./观书有感.txt');
ws.write('半亩方塘一鉴开\r\n');
ws.write('天光云影共徘徊\r\n');
ws.write('问渠那得清如许\r\n');
ws.write('为有源头活水来\r\n');
ws.end();
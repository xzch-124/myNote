const fs = require('fs')

const rs = fs.createReadStream('./观书有感.txt')

const ws = fs.createWriteStream('./dir/观书有感copy.txt')

rs.on('data', data => {
  ws.write(data)
})

rs.on('end', () => {
  console.log('读取完成')
  ws.end()
})

ws.on('close', () => {
  console.log('写入完成')
})


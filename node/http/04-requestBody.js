const http = require('http')

const server = http.createServer((request, responce) => {
  // 请求体
  // 1. 声明一个变量用于存储
  let data = ''
  // 2. 类似流式读取，绑定 data 事件
  request.on('data', chunk => {
    // 注意：chunk是一个Buffer
    // 与String相加时，自动转换为String
    data += chunk
  })
  // 3. 绑定 end 事件
  request.on('end', () => {
    console.log(data)
    responce.end('hello')
  })
})

server.listen(9000, () => {
  console.log('服务开始了...')
})
const http = require('http')

const server = http.createServer((request, responce) => {
  // requrst: 请求对象
  // reponce: 设置响应报文
  // 当接收到请求报文时，执行此回调

  responce.setHeader('content-type', 'text/html;charset=utf-8')
  responce.end('你好')
})

server.listen(9000, () => {
  console.log("服务启动了...")
})
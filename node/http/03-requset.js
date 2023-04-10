const http = require('http')

const server = http.createServer((request, responce) => {
  // 1. 获取请求方法
  console.log(request.method)
  // 2. 获取请求的url
  // 注意：不包括协议、IP、端口，是端口之后的内容
  console.log(request.url)
  // 3. 获取http版本
  console.log(request.httpVersion)
  // 4. 获取请求头
  // 返回一个对象，且key全部小写
  // 有-的key用‘’包裹
  console.log(request.headers)

  responce.end('hello')
})

server.listen(9000, () =>{
  console.log('服务启动了')
})
const http = require('http')

const server = http.createServer((request, responce) => {

  if(request.method == 'GET') {
    let url = new URL(request.url, 'http:127.0.0.1:9000')

    if(url.pathname == '/login') {
      responce.setHeader('content-type', 'text/http;charset=utf-8')
      responce.end('登录页面')
    }
    if(url.pathname == '/reg') {
      responce.setHeader('content-type', 'text/http;charset=utf-8')
      responce.end('注册页面')
    }
    responce.end('404: Not found')
  }
  responce.end('404: Not found')

})

server.listen(9000, () => {
  console.log('服务开始了...')
})
const http = require('http')

// 1. 旧版引入 url
const url = require('url')

const server = http.createServer((request, responce) => {
  // 1.1 使用url.parse解析，得到对象
  // 第二个参数设置为 true，则允许将query放入resObj
  // 否则不能解析query，即query: null
  let resObj = url.parse(request.url, true)
  console.log(resObj)
  // resObj.path = pathname + query
  // pathname = 端口后的路径 + 请求字符串
  console.log(resObj.pathname)
  console.log(resObj.query)

  responce.end('url')
})

server.listen(9000, () => {
  console.log('服务开始了...')
})
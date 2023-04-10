const http = require('http')

// 1. 旧版引入 url
const url = require('url')

const server = http.createServer((request, responce) => {
  // 2.1 创建URL对象
  let resObj = new URL(request.url, 'http://127.0.0.1:9000')
  console.log(resObj)
  console.log(resObj.pathname)
  // 使用get('key')获取对应query的value
  console.log(resObj.searchParams.get('key'))

  responce.end('url new')
})

server.listen(9000, () => {
  console.log('服务开始了...')
})
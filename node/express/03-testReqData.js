// 1. 导入express
const express = require('express')

// 2. 创建app
const app = express()

// 3. 创建路由
app.get('/', (req, res) => {
  // // 1. http模块原生操作
  // const {method, httpVersion, url, headers} = req
  // console.log(method)
  // console.log(httpVersion)
  // console.log(url)
  // console.log(headers)

  // 2. express封装的
  const {query, path, ip} = req
  // get方法的查询字符串，返回一个对象
  console.log(query)
  // 路径
  console.log(path)
  // 访问者的ip
  console.log(ip)

  // 获取请求头的内容，map
  // 例：获取host
  console.log(req.get('host'))

  res.end('hello')
})


app.listen(3000, ()=>{
  console.log('开始监听3000端口...')
})
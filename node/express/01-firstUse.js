const express = require('express')

// 1. 创建应用
const app = express()

// 2. 设置网络请求的响应方法
app.get('/', (req, res) => {
  res.end('<h1>hello express</h1>')
})

// 3. 监听端口
app.listen(3000, ()=>{
  console.log('开始监听3000端口...')
})
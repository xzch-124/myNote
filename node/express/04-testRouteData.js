// 1. 引入
const express = require('express')

// 2. 创建express app
const app = express()

// 3. 设置路由
app.get('/:id.html', (req, res) => {
  const id = req.params.id
  res.end(`hello, id: ${id}`)
})

app.listen(3000, () => {
  console.log('开始监听3000端口...')
})
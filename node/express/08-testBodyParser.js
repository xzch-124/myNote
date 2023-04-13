const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

// 处理 json 形式请求体的 中间件
// create application/json parser
const jsonParser = bodyParser.json()

// 处理 querystring 形式请求体的 中间件
// 使用后回给接下来使用的路由 request 中添加一个 body 对象 存放解析结果
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/login', (req, res) => {
  console.log(req.query)
  res.sendFile(path.resolve(__dirname, './08-from.html'))
})

// 使用 urlencodedParser 后回给接下来使用的路由 request 中添加一个 body 对象 存放解析结果
app.post('/admin', urlencodedParser, (req, res) => {
  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.end(`用户主页user:${req.body.username}`)
})

app.listen(3000, () => {
  console.log('开始监听3000端口...')
})
const express = require('express')
const path = require('path')

const app = express()

// app.get('/', (req, res) => {
//   // // 1. 原生方法
//   // res.statusCode = 400
//   // res.statusMessage = 'test'
//   // res.setHeader('xxx', 'yyy')
//   // res.write('write')
//   // res.end('end')

//   // // 2. express方法
//   // res.status(400)
//   // res.set('aa','bbb')
//   // res.send('send')

//   // res.end()
// })

app.get('/oth', (req, res) => {
  // 3. 其它响应方式
  // res.redirect('http://www.baidu.com')
  // res.download(__dirname+'/01-firstUse.js')
  // res.json({
  //   test: 'json'
  // })
  res.sendFile(__dirname+'/express.md')
})

app.listen(3000, () => {
  console.log('开始监听3000端口...')
})
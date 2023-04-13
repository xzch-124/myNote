const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

function middleWare(req, res, next) {
  const {url, ip} = req
  fs.appendFileSync(path.resolve(__dirname, './log.txt'), `url:${url}, ip:${ip}\r\n`, () => {
    console.log('is ok')
  })
  next()
}

app.use(middleWare)

app.get('/index', (req, res) =>{
  res.end('hello')
})

app.listen(3000, ()=>{
  console.log('开始监听3000端口...')
})
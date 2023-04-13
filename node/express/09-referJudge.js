const express = require('express')
const path = require('path')

const app = express()

function fn(req, res, next) {
  const referer = req.get('referer')
  console.log(referer)
  if(referer) {
    let host = new URL(referer)
    let hostname = host.hostname
    console.log(hostname)
    if(hostname !== '127.0.0.1') {
      res.end('404')
    }
    next()
  }
  next()
}
app.use(fn)

app.get('/refer',  (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'))
})

app.listen(3000, () => {
  console.log('开始监听3000端口...')
})
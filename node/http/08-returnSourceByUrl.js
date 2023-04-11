const http = require('http')
const fs = require('fs')
const path = require('path')

const extMap = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  png: 'image/png',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  mp4: 'video/mp4',
  mp3: 'audio/mpeg',
  json: 'application/json'
}

const server = http.createServer((request, responce) => {
  const { url } = request

  let { pathname } = new URL(url, 'http://127.0.0.1:80')
  // 设置网站根目录对应的服务器文件夹
  // 此时 http://127.0.0.1:80/pathname -> rootDir/pathname
  const rootDir = __dirname + '/page'
  const filePath = rootDir + pathname

  // 获取文件扩展名的方法
  let ext = path.extname(pathname).slice(1)
  // console.log(ext)
  const mimeType = extMap[ext]
  if(!mimeType) {
    mimeType = 'application/octet-stream'
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err)
      responce.end(`<h1>404 Not found</h1>`)
    }
    responce.setHeader('content-type', mimeType)
    responce.end(data)
  })
}).listen(80, () => {
  console.log('开始监听80端口...')
})

// console.log(__dirname) // 当前文件夹
// console.log(__filename) // 当前文件
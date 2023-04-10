const fs = require('fs')

// 注意：递归
// {recursive: true}
fs.mkdir('./dir', (err) => {
  if(err) throw err
  else console.log("mkdir is ok")
})

fs.mkdirSync('./testdir')

fs.readdir('./testdir', (err, data) => {
  if(err) throw err
  else console.log(data)
})

fs.rmdir('./undir', (err) => {
  if(err) throw err
  else console.log("rmdir is ok")
})
//导入 express
const express = require('express');

//创建应用对象
const app = express();

// 创建 get 路由
app.get('/home', (req, res) => {
  res.send('网站首页');
});

// 首页路由
app.get('/', (req, res) => {
  res.send('我才是真正的首页');
});

// 创建 post 路由
app.post('/login', (req, res) => {
  res.send('登录成功');
});

// 匹配所有的请求方法
app.all('/search', (req, res) => {
  res.send('1 秒钟为您找到相关结果约 100,000,000 个');
})

// 未匹配时返回202
app.all('*', (req, res) => {
  res.end('404 not found')
})

// 监听端口
app.listen(3000, () => {
  console.log('开始监听3000端口...')
})
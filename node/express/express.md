### express

express 是一个基于 Node.js 平台的极简、灵活的 WEB 应用开发框架

官方网址：https://www.expressjs.com.cn/

express 是一个封装好的工具包，封装了很多功能，便于我们开发 WEB 应用（HTTP 服务）

#### 1. 下载express

```
npm install express
```

#### 2. 使用express

```
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
```

#### 3. express路由

官方定义： **路由确定了应用程序如何响应客户端对特定端点的请求**

路由的组成：请求方法、路径、回调函数

即通过某一方式（get、post）向某网站（id+端口）请求某一路径（/...）时，路由执行对应的回调函数

在 express 中设置路由： app.(path，callback)

例：

```
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
```

#### 4. 获取请求参数

在 express 中可以使用原生http模块或express封装的方法获取 相关的请求参数

```
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
```

#### 5. 设置路由参数

以下是京东商品页的url

```
https://item.jd.com/69942221099.html
```

路径中的 69942221099 即商品id通常是可变数据，即一种路由参数

动态显示url和获取数据

```
app.get('/:id.html', (req, res) => {
  const id = req.params.id
  res.end(`hello, id: ${id}`)
})
```

动态设置路由参数：

```
'/:id.html'
```

获取路由参数

```
app.get('/:id.html', (req, res) => {
  const id = req.params.id
})
```

#### 6. 设置http返回信息

与获取请求头类似，可以使用原生和express封装的方法

```
app.get('/', (req, res) => {
  // // 1. 原生方法
  // res.statusCode = 400
  // res.statusMessage = 'test'
  // res.setHeader('xxx', 'yyy')
  // res.write('write')
  // res.end('end')

  // 2. express方法
  res.status(400)
  res.set('aa','bbb')
  res.send('send')

  res.end()
})
```

其它返回信息

注意：建议不要用根路径使用以下返回

重定向：

```
res.redirect('http://www.baidu.com')
```

下载链接

```
res.download(__dirname+'/01-firstUse.js')
```

返回json数据

```
res.json({
    test: 'json'
  })
```

展示文件内容

```
res.sendFile(__dirname+'/README.md')
```

#### 7. 中间件

是一种回调函数

可以接收 request、responce 对象并作处理

接收参数 request responce next

类似路由守卫

```
let recordMiddleware = function(request,response,next){
//实现功能代码
//.....
//执行next函数(当如果希望执行完中间件函数之后，仍然继续执行路由中的回调函数，必须调用next)
next();
}
```

每个中间件函数运行的最后异步要调用 next 函数，继续执行其它中间件函数或路由的回调

##### 路由中间件

全局路由中间件

```
app.use(fn)
```

```
app.use(function (request, response, next) {
console.log('定义第一个中间件');
next();
})
app.use(function (request, response, next) {
console.log('定义第二个中间件');
next();
})
```

给指定的路由设置

```
app.get('/路径',`中间件函数1`,`中间件函数2`,(request,response)=>{});
```

##### 静态资源中间件

常用于指定静态资源目录

```
app.use(express.static('./public'))
```

此时直接访问根目录回返回设置的静态资源根目录中的index文件

注意：

1. index.html 文件为默认打开的资源
2. 若同时定义了 './index.html' 的 get 方法，则按代码的先后顺序匹配
3. 路由一般响应动态数据，静态资源中间件响应静态数据

##### body-parser的简单使用

[body-parser - npm (npmjs.com)](https://www.npmjs.com/package/body-parser)

一个中间件的集合

实现访问 \login 显示表单，并提交到 \admin 的post方法

使用 bodyparser 的 urlencodedParser 中间件获取 post 请求的请求体

urlencodedParser 将 querystring 形式字符串解析为 对象，并添加到 resquest 中

```
// 使用 urlencodedParser 后回给接下来使用的路由 request 中添加一个 body 对象 存放解析结果
app.post('/admin', urlencodedParser, (req, res) => {
  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.end(`用户主页user:${req.body.username}`)
})
```

#### 8. 利用中间价实现防盗链

根据中间件判断请求的 host 不是指定的 host 不返回资源

例：请求一个图片资源时， 发出的请求头中有一个 refer 字段，记录了发送方的 host（主机名），根据主机名决定是否返回

#### 9.  Router

路由模块化，分文件管理路由

例：

```
//1. 导入 express
const express = require('express');
//2. 创建路由器对象
const router = express.Router();
//3. 在 router 对象身上添加路由
router.get('/', (req, res) => {
res.send('首页');
})
router.get('/cart', (req, res) => {
res.send('购物车');
});
//4. 暴露
module.exports = router;
```

使用路由

```
const express = require('express');
const app = express();
//5.引入子路由文件
const homeRouter = require('./routes/homeRouter');
//6.设置和使用中间件
app.use(homeRouter);
app.listen(3000,()=>{
console.log('3000 端口启动....');
})
```

设置路由前缀

```
app.use('/...', route)
```

此时对应的文件内，路由会默认添加此前缀

#### 10. 模板引擎 ejs

用于标签和数据分离

见 [ejs](../ejs/ejs.md)



#### 11. express-generator

在指定文件夹建立express项目

```
npm i express-generator
```

```
express -e dist
```

#### 杂项

##### 关于 queryString

[(3条消息) querystring_lightingsui的博客-CSDN博客](https://blog.csdn.net/qq_40697120/article/details/102634911)

### http

本节记录使用node创建http服务，并响应请求

#### 1. createServer

```
const server = http.createServer((request, responce) => {
  // requrst: 请求对象
  // reponce: 设置响应报文
  // 当接收到请求报文时，执行此回调

  responce.setHeader('content-type', 'text/html;charset=utf-8')
  responce.end('你好')
})
```

注意：

1. 在执行js文件的同一个命令行输入Ctrl+C停止此次服务
2. 更新返回的值必须重启服务
3. 中文乱码需要设置请求头解决
4. 一个端口号只响应一个服务
5. HTTP默认端口80；HTTPS默认端口443

#### 2. 获取请求报文

| 含义           | 语法                                                                        |
| -------------- | --------------------------------------------------------------------------- |
| 请求方法       | request.method                                                              |
| 请求版本       | request.httpVersion                                                         |
| 请求路径       | request.url                                                                 |
| URL 路径       | require('url').parse(request.url).pathname                                  |
| URL 查询字符串 | require('url').parse(request.url, true).query                               |
| 请求头         | request.headers                                                             |
| 请求体         | request.on('data', function(chunk){})<br />request.on('end', function(){}); |

注意事项：

1. request.url 只能获取路径以及查询字符串，无法获取 URL 中的域名以及协议的内容
2. request.headers 将请求信息转化成一个对象，并将属性名都转化成了『小写』

关于获取路径与查询字段

1. 引入 `const url = require('url')` （旧版，已弃用）
2. 引入新版 URL

#### 3. 设置响应报文


| 作用                                | 语法                                          |
| ----------------------------------- | --------------------------------------------- |
| 设置响应状态码                      | response.statusCode                           |
| 设置响应状态描述  （ 用的非常少 ） | response.statusMessage                        |
| 设置响应头信息                      | response.setHeader('头名', '头值')            |
| 设置响应体                          | response.write('xx')<br />response.end('xxx') |

注意：

1. responce.write()在一次请求中可以多次使用，按顺序拼接到响应体中返回
2. response.end('xxx')在一次请求中只能调用一次，通常若write返回值，则end返回空
3. response.setHeader('头名', '数组')可以按顺序设置多个键同名的kv

#### 4. 小练习

| 路径   | 返回     |
| ------ | -------- |
| \login | 登录页面 |
| \reg   | 注册页面 |

根据路径进行条件判断返回值即可

#### 5. 返回文件资源

```
let data = require('fs').readFileSync(__dirname + '/index.html');
response.end(data);
```

关于服务断返回静态资源的路径问题：

- 静态资源：图片、视频、html、css、js文件等
- 动态资源：如百度首页的信息

服务端从某个文件夹下查询并返回各种资源：静态资源目录、网站根目录

#### 6. 网页中的url

绝对路径

直接在浏览器输入的url

| 形式                   | 特点                                                                    |
| ---------------------- | ----------------------------------------------------------------------- |
| http://atguigu.com/web | 直接向目标资源发送请求，容易理解。网站的外链会用到此形式                |
| //atguigu.com/web     | 与页面 URL 的协议拼接形成完整 URL 再发送请求。大型网站用的比较多        |
| /web                   | 与页面 URL 的协议、主机名、端口拼接形成完整 URL 再发送请求。中小型网站  |

- 省略协议名：与本页面的协议相同
- 省略协议、主机、端口：与本页面进行拼接

相对路径

引入资源，与当前页面url拼接

例如当前网页 url 为 http://www.atguigu.com/course/h5.html

| 形式                | 最终的 URL                                 |
| -------------------- | ------------------------------------------ |
| ./css/app.css       | http://www.atguigu.com/course/css/app.css  |
| js/app.js           | http://www.atguigu.com/course/js/app.js    |
| ../img/logo.png     | http://www.atguigu.com/img/logo.png        |
| ../../mp4/show.mp4  | http://www.atguigu.com/mp4/show.mp4        |

url使用的场景：

包括但不限于如下场景：
a 标签 href
link 标签 href
script 标签 src
img 标签 src
video audio 标签 src
form 中的 action
AJAX 请求中的 URL

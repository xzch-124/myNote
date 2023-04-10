### fs模块

fs模块是nodejs提供的用于读写文件的模块

[文件系统 | Node.js 中文文档 | Node.js 中文网 (nodeapp.cn)](https://www.nodeapp.cn/fs.html#fs_fs_readfile_path_options_callback)

#### 常见应用

##### 1. 写文件


| 方法                        | 说明     |
| --------------------------- | -------- |
| writeFile                   | 异步写入 |
| writeFileSync               | 同步写入 |
| appendFile / appendFileSync | 追加写入 |
| createWriteStream           | 流式写入 |

1. fs.writeFile(file, data[, options], callback)
   参数说明：
   file 文件名
   data 待写入的数据
   options 选项设置 （可选）
   callback 写入回调
   返回值： undefined
2. fs.writeFileSync(file, data[, options])
   返回值： undefined
3. fs.appendFile(file, data[, options], callback)
   fs.appendFileSync(file, data[, options])返回值： undefined
4. fs.createWriteStream(path[, options])
   参数说明：
   path 文件路径
   options 选项配置（ 可选 ）
   返回值： Object

##### 2. 读文件

| 方法             | 说明     |
| ---------------- | -------- |
| readFile         | 异步读取 |
| readFileSync     | 同步读取 |
| createReadStream | 流式读取 |

1. readFile 异步读取
   语法： fs.readFile(path[, options], callback)
   参数说明：
   path 文件路径
   options 选项配置：
   callback 回调函数
   返回值： undefined
2. readFileSync 同步读取
   语法： fs.readFileSync(path[, options])
   参数说明：
   path 文件路径
   options 选项配置
   返回值： string | Buffer
3. createReadStream 流式读取
   语法： fs.createReadStream(path[, options])
   参数说明：
   path 文件路径

##### 3. 文件移动和重命名

fs.rename(oldPath, newPath, callback)
fs.renameSync(oldPath, newPath)
参数说明：
oldPath 文件当前的路径
newPath 文件新的路径
callback 操作后的回调

##### 4. 删除

fs.unlink(path, callback)
fs.unlinkSync(path)
参数说明：
path 文件路径
callback 操作后的回调

##### 5. 文件夹

| 方法                   | 说明          |
| ----------------------- | ------------- |
| mkdir / mkdirSync       |  创建文件夹  |
| readdir / readdirSync  | 读取文件夹    |
| rmdir / rmdirSync      | 删除文件夹    |

1. 创建文件夹fs.mkdir(path[, options], callback)
   fs.mkdirSync(path[, options])
   参数说明：
   path 文件夹路径
   options 选项配置（ 可选 ）
   callback 操作后的回调
2. 读取文件夹fs.readdir(path[, options], callback)
   fs.readdirSync(path[, options])
   参数说明：
   path 文件夹路径
   options 选项配置（ 可选 ）
   callback 操作后的回调
3. 删除文件夹fs.rmdir(path[, options], callback)
   fs.rmdirSync(path[, options])
   参数说明：
   path 文件夹路径
   options 选项配置（ 可选 ）
   callback 操作后的回调

##### 6. 文件状态

fs.stat(path[, options], callback)
fs.statSync(path[, options])
参数说明：
path 文件夹路径
options 选项配置（ 可选 ）
callback 操作后的回调

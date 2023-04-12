### npm

npm 全称 Node Package Manager ，『Node 的包管理工具』
npm 是 node.js 官方内置的包管理工具

即管理当前工程引用的包（代码库）的工具

#### 1. 初始化

在命令行运行 npm init

此时通过一个交互式的过程完成初始化，即建立一个 package.json 文件

即根据回答问题的方式创建一个 package.json 文件

使用参数 -y / --yes 可以创建一个全选默认值的 package.json

#### 2. 关于 package.json 的属性

以本文件夹默认初始化的 package.json 为例

```
{
  "name": "npm", / 包名，或文件名
  "version": "1.0.0", / 版本
  "description": "", / 描述，简介
  "main": "index.js", / 入口文件
  "scripts": { / 脚本
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [], / 关键词，用于发布后帮助搜索
  "author": "", / 作者
  "license": "ISC" / 开源协议
}
```

补充：版本号

**版本规范：**

[semver](https://semver.org/lang/zh-CN/)：[npm semver](https://docs.npmjs.com/misc/semver)：

X.Y.Z

主版本号：发布了不兼容的版本

次版本号：向下兼容的新增功能

修订号：向下兼容的问题修复

#### 3. 搜索包

```
npm m keywards
```

或 在 [npm (npmjs.com)](https://www.npmjs.com/) 搜索

#### 4. 安装包

```
npm i
npm install
```

直接运行此命令回按照 package-lock.json 记录的依赖的版本、缓存等信息安装所有的依赖

生产依赖和开发依赖

| 类型     | 命令                                         | 补充                                                                                 |
| -------- | -------------------------------------------- | ------------------------------------------------------------------------------------ |
| 生产依赖 | npm i -S uniq<br />npm i --save uniq         | -S 等效于 --save， -S 是默认选项<br />包信息保存在 package.json 中 dependencies 属性 |
| 开发依赖 | npm i -D less<br />npm i --save-dev less   | -D 等效于 --save-dev<br />包信息保存在 package.json 中 devDependencies 属性         |

```
npm i -S name //或默认状态下，也是安装开发依赖
npm i -D name //安装生产依赖
```

指定版本

```
npm i name@1.1.1
```

删除

```
## 局部删除
npm remove uniq
npm r uniq
## 全局删除
npm remove -g nodemon
```


#### 5. 引入包

```
const dayjs = require('dayjs')
```

实际上引入的是 ./node_modules 中对应的文件


在 require 中通过模块名和路径引入的区别

模块名：

在当前 ./node_modules 中查找；

没有则在父目录下的./node_modules中查找；

路径：

在指定路径查找


#### 6. 配置命令别名

在 package.json 中的 script 属性中添加

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

#### 7. cnpm

淘宝镜像网址https://npmmirror.com/

cnpm 服务部署在国内 阿里云服务器上 ， 可以提高包的下载速度

即 cnpm 是官方提供的一个包管理工具

| 功能         | 命令                                                                       |
| ------------ | -------------------------------------------------------------------------- |
| 初始化       | cnpm init / cnpm init                                                      |
| 安装包       | cnpm i uniq<br />cnpm i -S uniq<br />cnpm i -D uniq<br />cnpm i -g nodemon |
| 安装项目依赖 | cnpm i                                                                     |
| 删除         | cnpm r uniq                                                                |

使用npm 但配置 淘宝镜像

```
npm config set registry https://registry.npmmirror.com/
```

使用 nrm 工具配置

1. 安装 nrm

   ```
   npm i -g nrm
   ```
2. 修改镜像

   ```
   nrm use taobao
   ```
3. 检查是否配置成功（选做）
   检查 registry 地址是否为 https://registry.npmmirror.com/ , 如果 是 则表明成功

   ```
   npm config list
   ```

#### 8. 关于发布

前置条件

* 注册账号 https://www.npmjs.com/signup
* 激活账号 （ 一定要激活账号 ）
* 修改为官方的官方镜像 (命令行中运行 nrm use npm )

创建包

1. 创建文件夹，并创建文件 index.js， 在文件中声明函数，使用 module.exports 暴露
2. npm 初始化工具包，package.json 填写包的信息 (包的名字是唯一的)

发布包

1. 命令行下 npm login 填写相关用户信息
2. 命令行下 npm publish 提交包 👌

发布更新

更改代码，并更改版本号

```
npm publish
```

删除包

```
npm unpublish --force
```

条件：https://docs.npmjs.com/policies/unpublish

你是包的作者
发布小于 24 小时
大于 24 小时后，没有其他包依赖，并且每周小于 300 下载量，并且只有一个维护者

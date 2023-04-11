### CommonJS

一种模块化规范

nodejs模块化一般使用CommonJS

#### 1. 暴漏数据

1. module.exports
2. exports

例

```
module.exports = {
  msg: "我是一个模块"
}
```

```
module.exports = value
```

```
exports.key = value
```

注意：

exports = module.exports = {}

实际导出的是module.exports
exports是指向module.exports的引用
因此不能通过exports直接使用=赋值，而exports.key = value实际是向module.exports加入属性。

小结：

- 实际导出的是module.exports
- module.exports可以通过2种方式导出
- exports只能通过添加属性的方式导出

#### 2. 导入文件

```
const test = require('./me.js')
```

**require导入的数据：**

通过路径导入自定义的模块、

通过模块名直接导入node核心模块（fs/path/http等）

**require（X）的查找方式**

1. X是node的核心模块

直接引入

2. X是以 `/`  `./ ` `../` 开头的字符串

先将X作为指定路径的文件查找

* 有后缀名，查找文件 `X`
* 无后缀名，依次查找 `X.jsX.json` `X.node`

未找到，将X作为文件夹

首先 检测该文件夹下 package.json 文件中 main 属性对应的文件，
如果存在则导入，反之如果文件不存在会报错。
如果 main 属性不存在，或者 package.json 不存在依次查找

* `X/index.js` `X/index.json` `X/index.node`

未找到，报错 not found

3. X是一个文件名

**从 当前目录 开始查找 X**

**未找到 返回父目录，继续查找，**

返回到 / (根目录) 未找到，报错

#### 3. require导入文件的基本流程

1. 将相对路径转为绝对路径，定位目标文件
2. 缓存检测
3. 读取目标文件代码
4. 包裹为一个函数并执行（自执行函数）。通过 arguments.callee.toString() 查看自执行函数
5. 缓存模块的值
6. 返回 module.exports 的值

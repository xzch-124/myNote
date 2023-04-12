### yarn

yarn 是由 Facebook 在 2016 年推出的新的 Javascript 包管理工具，官方网址：https://yarnpkg.com/

速度超快：yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大
化资源利用率，因此安装速度更快
超级安全：在执行代码之前，yarn 会通过算法校验每个安装包的完整性
超级可靠：使用详细、简洁的锁文件格式和明确的安装算法，yarn 能够保证在不同系统上无差异的
工作

使用 npm 下载 yarn

```
npm i -g yarn
```

#### 1. 常见命令

| 功能            | 命令                                   |
| ---------------- | -------------------------------------- |
| 初始化           |  yarn init / yarn init -y             |
| 安装包           | yarn add uniq 生产依赖                 |
|                  | yarn add less --dev 开发依赖           |
|                  | yarn global add nodemon 全局安装       |
| 删除包          | yarn remove uniq 删除项目依赖包        |
|                  | yarn global remove nodemon 全局删除包  |
| 安装项目依赖     |  yarn                                 |
| 运行命令别名   | yarn <别名># 不需要添加 run            |

注：yarn 全局安装包的位置可以通过 yarn global bin来查看

#### 2. 配置镜像

```
yarn config set registry https://registry.npmmirror.com/
```

可以通过 yarn config list 查看 yarn 的配置项

#### 3. 与npm

npm 的锁文件为 package-lock.json
yarn 的锁文件为 yarn.lock

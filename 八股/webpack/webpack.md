### webpack

基本内容

5个主要模块：

1. entry 入口文件，可以使用相对路径
2. output 出口文件
   1. path 输出的文件夹位置，使用path.resolve(__dirname, 'dist')
   2. filename 对应入口文件打包后的输出文件
3. module 设置不同类型文件的处理方式
   1. test 一个正则用于筛选文件类型： \\/.css$\
   2. use 一个定义处理方式的loader对象数组

      use: [ "style-loader", "css-loader", "less-loader", "postcss-loader" ]
   3. loader的简写方式

      - 不使用loader的属性时，可以直接写作字符串数组
      - 写作对象形式 { loader: , }
   4. 处理不同类型资源的方法
4. plugins 插件
5. mode 生产者/开发者模式


对不同形式资源的处理

css、lass、sass

```
 module: {
    rules: [
      {
        test: /\.css$/,
        use: [ "style-loader","css-loader"]
      },
      {
        test: /\.less$/,
        use: [ "style-loader", "css-loader", "less-loader", "postcss-loader" ]
      }
    ]
  },
```

图片

```
 module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            // 将小于10kb的文件转为base64
            // 减少请求资源的次数，但内存变大
            maxSize: 10 * 1024,
          }
        },
        generator: {
          // 指定打包后的输出路径
          // 取hash前10位
          // 扩展名
          filename: "static/images/[hash:10][ext]",
        }
      },
    ]
}
```


其它文件

```
module: {
    rules: [
      {
        // 网络字体、视频
        test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
        // 将资源直接打包，不做处理
        type: "asset/resource",
        generator: {
          // 指定打包后的输出路径
          // 取hash前10位
          // 扩展名
          filename: "static/media/[hash:10][ext]",
        }
      }
    ]
}
```

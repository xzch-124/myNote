const path = require("path")

module.exports = {
  // 1.入口文件
  entry: "./src/main.js",
  // 2.出口文件
  output: {
    // 打包后入口文件的名称
    filename: "bundle.js",
    // 打包后文件的输出文件夹
    path: path.resolve(__dirname, "./build"),
    // 自动清空path目录下的文件
    clean: true
  },
  // 3.rules
  // 定义不同类型文件的处理方式和loader
  module: {
    rules: [
      {
        // 告诉webpack匹配什么文件
        test: /\.css$/,
        // 简写一: 如果loader只有一个
        // loader: "css-loader"
        // 简写二: 多个loader不需要其他属性时, 可以直接写loader字符串形式
        use: [ 
          "style-loader",
          "css-loader", 
          // 可以在这里写 loader 的选项，例如使用指定插件
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  // 自动添加浏览器前缀
                  "autoprefixer"
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [ "style-loader", "css-loader", "less-loader", "postcss-loader" ]
      },
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
  },
  // 4.plugin
  plugins: [

  ],
  // 5.模式
  mode: "development"
}
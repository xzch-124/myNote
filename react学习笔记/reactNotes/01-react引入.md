# 01-react引入

一种前端框架，采用声明式编程和组件化，使用虚拟DOM，减少对真实DOM的直接交互，与vue相比，使用jsx语法渲染DOM，更灵活。



React，用于开发Web应用

ReactNative，用于开发移动端跨平台应用

ReactVR，用于开发虚拟现实Web应用



react的依赖：

- react 包含react运行的基本代码
- react-dom 包含将jsx渲染为不同内容的代码
  - 在Web端：将jsx渲染为真实DOM
  - 在Native端：将jsx渲染为对应平台的原生组件
- babel 将jsx转换为 `React.createElement()` 函数



## 引入cdn使用react的方式

此时是一个html文件使用react的方式

在html文件中通过cdn引入 react, react-dom, babel 此时可以在 `<script>` 中写 `jsx` 

```html
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```



## react虚拟DOM



* 本质是js的Object对象
* 虚拟DOM是React在使用，因此比真实DOM“轻”
* 虚拟DOM最终由React转化为真实DOM


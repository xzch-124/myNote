# hello react 与 创建虚拟DOM

## 关于react

react有3个依赖：

react: 包含react所必须的核心代码

react-dom: react渲染在不同平台所需要的核心代码

babel: 将jsx转换成React代码的工具

对 React-dom 的解释：

web端：react-dom会将jsx最终渲染成真实的DOM，显示在浏览器中

native端：react-dom会将jsx最终渲染成原生的控件（比如Android中的Button，iOS中的UIButton）。

react 封装组件的方式：

```
class App extends React.Component {}
```

此时，在类组件的 `constructor` 中添加数据，使用 `this` 在其它方法中访问

```
constructor() {
  this.state = {}
}
```

本节作为 react 使用jsx语法作为编写html标签主要方式的引入

要在文档中使用react，需要引入的包：

```html
<!-- react核心库 -->
<script src="../React-js/react.development.js" type="text/javascript"></script>
<!-- 引入react-dom，用于支持react创建DOM -->
<script src="../React-js/react-dom.development.js" type="text/javascript"></script>
<!-- 将jsx转换为js -->
<script src="../React-js/babel.min.js" type="text/javascript"></script>
```

### 1. 创建虚拟DOM

使用原生js

```html
<!--这里使用了js来创建虚拟DOM-->
<script type="text/javascript">

  // 1.创建虚拟DOM[在这使用了js的语法]React.createElement(标签,标签属性,内容)
  const VDOM = React.createElement('h1',{id:"title"},"nihao")

</script>
</html>
```

直接使用 `React.createElement(标签,{属性},内容或子标签)`

当标签嵌套内容过多时

```js
React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello ',
    createElement('i', null, name),
    '. Welcome!'
  );
```

过于繁琐

因此，引入jsx简化创建虚拟DOM的写法

使用jsx的方法

```
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <h1>我是标题</h1>
)
```

直接使用类似  `html` 的方式编写标签，有babel 转换为js

另：

关于虚拟DOM：

1. 本质是js的Object对象
2. 虚拟DOM是React在使用，因此比真实DOM“轻”
3. 虚拟DOM最终由React转化为真实DOM

### 2. 引入组件的渲染

```
class App extends React.Component {...}
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <App/>
)
```

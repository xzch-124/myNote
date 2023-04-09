# 创建虚拟DOM的方法

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

### 1. 使用原生js语法创建虚拟DOM

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

### 2. 使用jsx语法创建虚拟DOM

```js
const VDOM = (<h1>
	Hello<i>name</i>.Welcome!
	</h1>
```

直接使用类似  `html` 的方式编写标签，有babel 转换为js

另：

关于虚拟DOM：

1. 本质是js的Object对象
2. 虚拟DOM是React在使用，因此比真实DOM“轻”
3. 虚拟DOM最终由React转化为真实DOM

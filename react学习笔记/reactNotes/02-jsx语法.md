# 02-jsx语法



## 引入：React.createaElement()

在通过 react 写 UI界面 时，原生 js 的方法是通过 `createElement()` 函数实现 $\textcolor{red}{创建 虚拟DOM}$ 的过程

关于 `createElement(type, config, childrens)` 的用法

`type` 标签或组件的类型，如： `div`  或  `App`

`config` 标签或组件的属性， 用对象键值对的方式

`childrens` 放入标签的内容，可以是文本，或子标签



例：

```js
let child1 = React.createElement('li', null, 'one');
let child2 = React.createElement('li', null, 'two');
let content = React.createElement('ul', { className: 'teststyle' }, child1, child2); // 第三个参数可以分开也可以写成一个数组
// let content = React.createElement('ul', { className: 'teststyle' }, [child1, child2]);
ReactDOM.render(
  content,
  document.getElementById('example')
);
```



因 `createElement()` 的写法在多个标签层叠嵌套时过于麻烦，引入 `jsx` 语法

## jsx

jsx语法允许在 js语句 中使用 html标签 描述组件模板，实际上 jsx 会转换为`React.createElement()`函数



jsx ----> React.cearteElement() ---> ReactElement对象，即vDOMtree ----> 真实DOM



规定：

- 只有一个根节点，通常使用div或 <></> 幽灵节点将整个 jsx 包围

- 所有标签必须闭合

- 若出现换行，需要用小括号包围 ()



### 在jsx中使用js表达式

包括:

基本变量: Number, String, Array, Object, Boolean, undefined, null

表达式: .split(), .join(), 三元表达式

函数: 此时将函数的返回值插入

注意：

**在jsx种插入数据的显示情况**

1. 插入 Number, String, Array 直接显示
2. 插入 undefined null bool 不显示
3. 不能插入 Object类型 not are value 会报错

显示undefined null bool的方法：

- 转换为字符串：toString、 String(变量)、+""

注意：这里的显示是指，在 标签的内容 中插入js变量

即 `<h2>{value}</h2>` `value` 不能是对象，但可以在 jsx 其它位置如绑定 `style` 时，使用js对象变量

同样的 value 的值是 undefined null bool 时，不能直接在页面显示，但在其它位置仍作为js代码的一部分正常使用。



### jsx 列表渲染

通常使用要展示列表数组的数组方法遍历并返回 jsx 标签实现

常用的数组方法：

遍历: reduce map forEach filter some

修改: upshift push shift pop

复制: slice([)) splice

排序: sort

注意：

`forEach` 会丢弃其回调函数的返回值，即返回 undefined

`forEach` 不会改变原数组的值

`map` 可以改变原数组的值，且其回调函数的返回值保存

因此，

```jsx
import React, {Component} from 'react'

export default class List extends Component {
  constructor() {
    super()

    this.state = {
      listValue: [
        { id: 1, name: "sad"},
        { id: 2, name: "gwf"},
        { id: 3, name: "wrtg"} 
      ]
    }
  }
  render() {
    const { listValue } = this.state
    return (
      <div>
        { listValue.map(item => {
          return (<li>{item.name}</li>)
        }) }
      </div>
    )
  }
}
```





### jsx 条件渲染

使用三元表达式或 && 实现

```jsx
<div>{ this.state.isok ? 'ok' : '' }</div>
```

```jsx
<div>{ this.state.isok && 'ok' }</div>
```

注：利用js变量作为标签内容显示的特点

当 js变量 为 空String、bool 时不显示



### jsx 样式渲染

2种

内联样式：`style` 属性

此时，将一个对象作为 `style` 属性的值，因此有 2 种写法

```jsx
render() {
  const { listValue } = this.state
  const styleObj = {
    color: 'red'
  }
  return (
    <div className=''>
      <div style={{ color: 'red' }}>{this.state.isok ? 'ok' : ''}</div>
      <div style={ styleObj }>{this.state.isok && 'ok'}</div>
      {listValue.map(item => {
        return (<li>{item.name}</li>)
      })}
    </div>
  )
}
```

注：`style={{ color: 'red' }}` 中，外层 `{} ` 表示在 jsx 中引入 js表达式；内层 `{}` 表示 js对象

因此，可以直接在 `{}` 中引入 js对象变量 `style={ styleObj }` 



对于类名，使用 className 引入

对于不同组件，分别引入其 `.css` 文件，分别处理类名样式
react通过使用jsx（使用js描述html的一种语法）描述虚拟DOM，再使用`render`函数渲染到指定的位置

react脚手架
```javascript
npx create-react-app 项目名称
```
### 1. jsx
jsx的基本语法规则：

1. 定义虚拟DOM，是一个js对象，不是字符串
2. 在虚拟DOM的标签中使用js表达式，要添加`{}`
3. 样式的类名使用`className`;react18支持`class`
4. 若使用内联样式：`style={{key:value}}`外层表示js表达式写在`{}`；内存表示写入的样式是一个js对象
5. 一个虚拟DOM只有一个根标签，如果没有根节点，可以使用`<></>`（幽灵节点）替代
6. 允许跨行，但要使用`()`
7. 标签首字母
   1. 小写字母，转换为对应的html同名元素，无则报错
   2. 大写字母，转换为对应的组件，未定义则报错

#### 1.1 jsx中使用js表达式
```javascript
const name = 'd'

<h1>你好，我叫{name}</h1>   //    <h1>你好,我叫d</h1>
```
可以使用的表达式：

1. 字符串、数值、布尔值、null、undefined、object（ [] / {} ）
2. 1 + 2、'abc'.split('')、['a', 'b'].join('-')
3. fn()


#### 1.2 列表渲染
对应于vue的`v-for`<br />在react中可以直接使用js函数，如`map`进行遍历<br />同时，与vue类似，也需要定义`:key=`用于`diff`算法
```jsx
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]
function App()
  return (
    <div className="App">
      <ul>
        { songs.map(item => <li>{item.name}</li>) }
      </ul>
    </div>
  )
}
export default App
```


#### 1.3 条件渲染
实际上是使用 三元运算符 或 `&&` 作为js表达式 在标签中实现
```jsx
{flag ? <span>this is span</span> : null}
```


#### 1.4 样式
内联样式的写法：由于需要的样式是一个 js对象， 因此可以抽离
```jsx
const styleObj = {
    color:red
}
function App() {
  return (
    <div className="App">
      <div style={ styleObj }>this is a div</div>
    </div>
  )
}
export default App
```

使用类名添加css样式：只需要对应`className`即可
```css
.title {
  font-size: 30px;
  color: blue;
}
```

```jsx
import './app.css'
const showTitle = true
function App() {
  return (
    <div className="App">
      <div className={ showTitle ? 'title' : ''}>this is a div</div>
    </div>
  )
}
export default App
```


### 2. 组件

#### 函数组件
`目标任务:`   能够独立使用函数完成react组件的创建和渲染<br />**定义：**
> 使用 JS 的函数（或箭头函数）创建的组件，就叫做`函数组件`


```jsx
function HelloFn () {
  return <div>这是我的第一个函数组件!</div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloFn />);
```
注意：

1. 函数组件返回要渲染的内容(jsx)，可以换行，使用`()`
2. 函数组件在作为reader函数的参数使用时，使用闭合的标签
3. 函数组件的首字母大写

即，函数式组件首字母大写、有返回值，在使用时作为闭合的标签使用

另：

render函数使用函数式组件时，先调用函数返回要渲染的解构

使用babel将jsx转换为js时，默认使用了严格模式，则此时函数组件的`this = null`


#### 类组件
`目标任务:`   能够独立完成类组件的创建和渲染
> 使用 ES6 的 class 创建的组件，叫做类（class）组件


```jsx
// 引入React
import React from 'react'

// 定义类组件
class HelloFn extends React.Component {
  render () {
    return <div>这是我的第一个类组件!</div>
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloFn />);
```
注意：

1. 类组件继承`React.Component`
2. 类组件必须实例化`render()`
3. 类组件的命名首字母大写
4. 类组件在作为reader函数的参数使用时，使用闭合的标签

即，类组件首字母大写、继承`React.Component`并实例化`render`方法，在使用时作为闭合的标签使用

另：

在render渲染类组件时，先创建组件实例，并自动调用实例的`render`方法

此时的`render`函数`this = 组件对象`



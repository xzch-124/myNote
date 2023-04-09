# 02-jsx

### jsx

jsx的基本语法规则：

1. 定义虚拟DOM，是一个js对象，不是字符串，因此可以直接写标签，不写引号
2. 在虚拟DOM的标签中使用js表达式，要添加 `{}`
3. 样式的类名使用 `className`;react18支持 `class`
4. 若使用内联样式：`style={{key:value}}`外层表示js表达式写在 `{}`；内存表示写入的样式是一个js对象
5. 一个虚拟DOM只有一个根标签，如果没有根节点，可以使用 `<></>`（幽灵节点）替代
6. 允许跨行，但要使用 `()`
7. 标签首字母
   1. 小写字母，转换为对应的html同名元素，无则报错
   2. 大写字母，转换为对应的组件，未定义则报错

#### 1. jsx中使用js表达式

```javascript
const name = 'd'

<h1>你好，我叫{name}</h1>   //    <h1>你好,我叫d</h1>
```

可以使用的表达式：

1. 字符串、数值、布尔值、null、undefined、object（ [] / {} ）
2. 1 + 2、'abc'.split('')、['a', 'b'].join('-')
3. fn()

#### 2. 列表渲染

对应于vue的 `v-for`在react中可以直接使用js函数，如 `map`进行遍历

同时，与vue类似，也需要定义 `:key=`用于 `diff`算法

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

#### 3. 条件渲染

实际上是使用 三元运算符 或 `&&` 作为js表达式 在标签中实现

```jsx
{flag ? <span>this is span</span> : null}
```

#### 4. 样式

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

使用类名添加css样式：只需要对应 `className`即可

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



#### jsx的注释


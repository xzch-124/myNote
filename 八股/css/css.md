### css八股

#### BFC

[【CSS系列】BFC是什么，如何触发，能解决什么问题？ - 掘金 (juejin.cn)](https://juejin.cn/post/7019685391485796365)

块状格式化上下文

BFC的子元素不会对外面的元素产生影响

触发条件：

* **float** :left | right
* **overflow** :hidden | scroll | auto; （不是visible）
* **display** :inline-block | table-cell | table-caption | flex | grid ;（ 非none 非inline 非block）
* **position** : absolute | fiexed ;（ 非relative）

能解决什么问题：

* margin 重合问题
* margin 塌陷问题
* 高度塌陷问题


#### 关于清浮动


**具体方法：**

1. **在父元素最后设置一个空的 块级子元素，并设置 **
   clear: both

```
.clear {
  clear: both;
}
```

2. **父元素设置** `<span class="ne-text">overflow: hidden;</span>`
3. **伪元素完成增加空盒子**

```
.box:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
```

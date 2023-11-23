---
title: 样式覆盖
---

### 解除样式隔离

Want 的所有组件都开启了 `addGlobalClass: true` 让小程序接受外部样式的影响，h5自身可通过 Vue 的 `:deep(className)` 让父组件更改子组件样式

> 在页面中使用 Want 组件时，可直接在页面的样式文件中覆盖样式

```html
<w-button type="primary">主要按钮</w-button>
```

```css
.wan-button--primary {
  font-size: 20px;
  background-color: pink;
}
```

### 使用外部样式类

Want 开放了大量的外部样式类供开发者使用，具体的样式类名称可查阅对应组件的“外部样式类”部分。需要注意的是普通样式类和外部样式类的优先级是未定义的，因此使用时请添加!important以保证外部样式类的优先级。

```html
<w-cell
  title="单元格"
  value="内容"
  title-class="cell-title"
  value-class="cell-value"
/>
```

```css
.cell-title {
  color: pink !important;
  font-size: 20px !important;
}

.cell-value {
  color: green !important;
  font-size: 12px !important;
}
```

---
title: Checkbox 复选框
---

# {{ $frontmatter.title }}

>在一组备选项中进行多选。

## 代码演示

### 基础用法

通过`v-model`绑定复选框的勾选状态。

```html
<template>
  <w-checkbox v-model="checked" @change="onChange">复选框</w-checkbox>
</template>
<script setup>
import { ref } from 'vue'
const checked = ref(true)
function onChange(event) {
  checked.value = event
}
<script>
```

### 禁用状态

通过设置`disabled`属性可以禁用复选框。

```html
<w-checkbox disabled v-model="checked" @change="onChange">
  复选框
</w-checkbox>
```

### 自定义形状

将`shape`属性设置为`square`，复选框的形状会变成方形。

```html
<w-checkbox v-model="checked" shape="square" @change="onChange">
  复选框
</w-checkbox>
```

### 自定义颜色

通过`checked-color`属性可以自定义选中状态下的图标颜色。

```html
<w-checkbox
  v-model="checked"
  checked-color="#07c160"
  @change="onChange"
>
  复选框
</w-checkbox>
```

### 自定义大小

通过`icon-size`属性可以自定义图标的大小。

```html
<w-checkbox v-model=="checked" icon-size="25px">复选框</w-checkbox>
```

### 自定义图标

通过 icon 插槽自定义图标。

```html
<template>
  <w-checkbox use-icon-slot v-model="checked" @change="onChange">
    自定义图标
    <template #icon>
      <image slot="icon" :src="checked ? activeIcon : inactiveIcon" />
    </template>
  </w-checkbox>
</template>
<script setup>
import { reactive } from 'vue'
const state = reactive({
  checked: true,
  activeIcon: '//img.yzcdn.cn/icon-active.png',
  inactiveIcon: '//img.yzcdn.cn/icon-normal.png',
})
function onChange(event) {
  state.checked = event
}
</script>
```

### 禁用文本点击

通过设置`label-disabled`属性可以禁用复选框文本点击。

```html
<w-checkbox v-model="checked" label-disabled>复选框</w-checkbox>
```

### 复选框组

需要与`w-checkbox-group`一起使用，选中值是一个数组，通过`value`绑定在`w-checkbox-group`上，数组中的项即为选中的`Checkbox`的`name`属性设置的值。

```html
<template>
  <w-checkbox-group v-model="result" @change="onChange">
    <w-checkbox name="a">复选框 a</w-checkbox>
    <w-checkbox name="b">复选框 b</w-checkbox>
    <w-checkbox name="c">复选框 c</w-checkbox>
  </w-checkbox-group>
</template>
<script setup>
import { ref } from 'vue'
const result = ref('a', 'b')
function onChange(event) {
  result.value = event
}
</script>
```

### 限制最大可选数

```html
<w-checkbox-group v-model="result" @change="onChange" :max="2">
  <w-checkbox name="a">复选框 a</w-checkbox>
  <w-checkbox name="b">复选框 b</w-checkbox>
  <w-checkbox name="c">复选框 c</w-checkbox>
</w-checkbox-group>
```

### 搭配单元格组件使用

此时你需要再引入`Cell`和`CellGroup`组件，并通过 checkbox 的 toggle 方法手动触发切换。

```html
<template>
  <w-checkbox-group v-model="state.result3" @change="onChange">
    <w-cell-group >
      <w-cell
        v-for="(item, index) in state.list"
        :key="item"
        :title="`复选框 ${ item }`"
        value-class="value-class"
        clickable
        @click="toggle(index)"
      >
        <w-checkbox ref="checkboxRefs" :name="item" />
      </w-cell>
    </w-cell-group>
  </w-checkbox-group>
</template>
<script setup>
import { reactive, ref } from 'vue'

const checkboxRefs = ref(null)
const state = reactive({
  list: ['a', 'b', 'c'],
  result: ['a', 'b'],
})

function onChange(event) {
  state.result = event
}

function toggle(index) {
	checkboxRefs.value[index].toggle()
}
</script>
```

```css
.value-class {
  flex: none !important;
}
```

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标识 Checkbox 名称 | _string_ | - |
| shape | 形状，可选值为 `round` `square` | _string_ | `round` |
| value | 是否为选中状态 | _boolean_ | `false` |
| disabled | 是否禁用单选框 | _boolean_ | `false` |
| label-disabled | 是否禁用单选框内容点击 | _boolean_ | `false` |
| label-position | 文本位置，可选值为 `left` | _string_ | `right` |
| use-icon-slot | 是否使用 icon slot | _boolean_ | `false` |
| checked-color | 选中状态颜色 | _string_ | `#1989fa` |
| icon-size | icon 大小 | _string \| number_ | `20px` |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 在表单内提交时的标识符 | _string_ | - |
| value | 所有选中项的 name | _Array_ | - |
| disabled | 是否禁用所有单选框 | _boolean_ | `false` |
| max | 设置最大可选数 | _number_ | `0`（无限制） |
| direction | 排列方向，可选值为 `horizontal` | _string_ | `vertical` |

### Checkbox Event

| 事件名      | 说明                     | 回调参数     |
| ----------- | ------------------------ | ------------ |
| change | 当绑定值变化时触发的事件 | 当前组件的值 |

### Checkbox 外部样式类

| 类名         | 说明           |
| ------------ | -------------- |
| custom-class | 根节点样式类   |
| icon-class   | 图标样式类     |
| label-class  | 描述信息样式类 |

### CheckboxGroup Event

| 事件名      | 说明                     | 回调参数     |
| ----------- | ------------------------ | ------------ |
| change | 当绑定值变化时触发的事件 | 当前组件的值 |

### Checkbox Slot

| 名称 | 说明       |
| ---- | ---------- |
| -    | 自定义文本 |
| icon | 自定义图标 |

### Checkbox 方法

Checkbox 实例可调用的方法。

| 方法名 | 参数 | 返回值 | 介绍         |
| ------ | ---- | ------ | ------------ |
| toggle | -    | -      | 切换选中状态 |



---
title: Cascader 级联选择
---

# {{ $frontmatter.title }}

>级联选择框，用于多层级数据的选择，典型场景为省市区选择。

## 代码演示

### 基础用法

级联选择组件可以搭配 Field 和 Popup 组件使用，示例如下：

```html
<template>
  <w-field
    :value="fieldValue"
    is-link
    readonly
    label="地区"
    placeholder="请选择所在地区"
    @tap="onClick"
  />
  <w-popup :show="show" round position="bottom">
    <w-cascader
      v-if="show"
      :value="cascaderValue"
      title="请选择所在地区"
      :options="options"
      @close="onClose"
      @finish="onFinish"
    />
  </w-popup>
</template>
<script setup>
import { ref } from 'vue'

const options = [
  {
    text: '浙江省',
    value: '330000',
    children: [{ text: '杭州市', value: '330100' }],
  },
  {
    text: '江苏省',
    value: '320000',
    children: [{ text: '南京市', value: '320100' }],
  },
]

const show = ref(false)
const options = ref(false)
const fieldValue = ref(false)
const cascaderValue = ref(false)

function onClick() {
  show.value = true
}

function onClose() {
  show.value = false
}

function onFinish(e) {
  const { selectedOptions, value } = e;
  fieldValue.value = selectedOptions
      .map((option) => option.text || option.name)
      .join('/');
  
  cascaderValue.value = value
}
</script>
```
### 自定义颜色

通过 `active-color` 属性来设置选中状态的高亮颜色。

```html
<w-cascader
  :value="cascaderValue"
  title="请选择所在地区"
  :options="options"
  active-color="#ee0a24"
  @close="onClose"
  @finish="onFinish"
/>
```

### 异步加载选项

可以监听 `change` 事件并动态设置 `options`，实现异步加载选项。

```html
<template>
  <w-field
    :value="fieldValue"
    is-link
    readonly
    label="地区"
    placeholder="请选择所在地区"
    @tap="onClick"
  />
  <w-popup :show="show" round position="bottom">
    <w-cascader
      v-if="show"
      :value="cascaderValue"
      title="请选择所在地区"
      :options="options"
      @close="onClose"
      @change="onChange"
      @finish="onFinish"
    />
  </van-popup>
</template>
<script setup>
import { reactive } from 'vue'

const options = reactive([
  {
    text: '浙江省',
    value: '330000',
    children: [],
  }
])

function onChange(e) {
  const { value } = e;
  if (value === options[0].value) {
    setTimeout(() => {
      const children = [
        { text: '杭州市', value: '330100' },
        { text: '宁波市', value: '330200' },
      ];
      options[0].children = children
    }, 500);
  }
}
</script>
```

### 自定义字段名

通过 `field-names` 属性可以自定义 `options` 里的字段名称。

```html
<template>
  <w-cascader
    :value="state.code"
    title="请选择所在地区"
    :options="state.options"
    :field-names="state.fieldNames"
  />
</template>
<script setup>
import { reactive } from 'vue'

const state = reactive({
  code: '',
  fieldNames: {
    text: 'name',
    value: 'code',
    children: 'items',
  },
  options: [
    {
      name: '浙江省',
      code: '330000',
      items: [{ name: '杭州市', code: '330100' }],
    },
    {
      name: '江苏省',
      code: '320000',
      items: [{ name: '南京市', code: '320100' }],
    },
  ],
})
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 顶部标题 | _string_ | - |
| value | 选中项的值 | _string \| number_ | - |
| options | 可选项数据源 | _CascaderOption[]_ | `[]` |
| placeholder | 未选中时的提示文案 | _string_ | `请选择` |
| active-color | 选中状态的高亮颜色 | _string_ | `#1989fa` |
| swipeable | 是否开启手势左右滑动切换 | _boolean_ | `false` |
| closeable | 是否显示关闭图标 | _boolean_ | `true` |
| show-header | 是否展示标题栏 | _boolean_ | `true` |
| close-icon | 关闭图标名称或图片链接，等同于 w-con 组件的 name 属性 | _string_ | `cross` |
| field-names | 自定义 `options` 结构中的字段 | _CascaderFieldNames_ | `{ text: 'text', value: 'value', children: 'children' }` |

### CascaderOption 数据结构

`options` 属性是一个由对象构成的数组，数组中的每个对象配置一个可选项，对象可以包含以下值：

| 键名               | 说明                     | 类型                        |
| ------------------ | ------------------------ | --------------------------- |
| text               | 选项文字（必填）         | _string_                    |
| value              | 选项对应的值（必填）     | _string \| number_          |
| color              | 选项文字颜色             | _string_                    |
| children           | 子选项列表               | _CascaderOption[]_          |
| disabled           | 是否禁用选项             | _boolean_                   |
| className          | 为对应列添加额外的 class | _string \| Array \| object_ |

### Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中项变化时触发 | event：_{ value: string \| number, selectedOptions: CascaderOption[], tabIndex: number }_ |
| finish | 全部选项选择完成后触发 | event：_{ value: string \| number, selectedOptions: CascaderOption[], tabIndex: number }_ |
| close | 点击关闭图标时触发 | - |
| click-tab | 点击标签时触发 | event：_{ tabIndex: number, title: string }_ |

### Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| title | 自定义顶部标题 | - |

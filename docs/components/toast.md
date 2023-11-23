---
title: Toast 轻提示
---

# {{ $frontmatter.title }}

>在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

## 代码演示

### 文字提示

```html
<template>
  <w-toast ref="toastRef" />
<template>
<script setup>
import { ref } from 'vue';
import Toast from '@/uni_modules/wan-framework/utils/toast';
const toastRef = ref(null);
Toast({
  ref: toastRef.value,
  message: '我是提示文案，建议不超过十五字~'
});
</script>
```

### 加载提示

使用 `Toast.loading` 方法展示加载提示，通过 `forbidClick` 属性可以禁用背景点击，通过 `loadingType` 属性可以自定义加载图标类型。

```javascript
Toast.loading({
  ref: toastRef.value,
  message: '加载中...',
  forbidClick: true,
});

// 自定义加载图标
Toast.loading({
  ref: toastRef.value,
  message: '加载中...',
  forbidClick: true,
  loadingType: 'spinner',
});
```

### 成功/失败提示

```javascript
Toast.success({ ref: toastRef.value, message: '成功文案' });
Toast.fail({ ref: toastRef.value, message: '失败文案' });
```

### 动态更新提示

```html
<template>
  <w-toast ref="toastRef" />
<template>
<script setup>
import { ref } from 'vue';
import Toast from '@/uni_modules/wan-framework/utils/toast';
const toastRef = ref(null);
const toast = Toast.loading({
  ref: toastRef.value,
  duration: 0, // 持续展示 toast
  forbidClick: true,
  message: '倒计时 3 秒',
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toast.setData({
      message: `倒计时 ${second} 秒`,
    });
  } else {
    clearInterval(timer);
    Toast.clear();
  }
}, 1000);
</script>
```
### OnClose 回调函数

```javascript
Toast({
  ref: toastRef.value,
  type: 'success',
  message: '提交成功',
  onClose: () => {
    console.log('执行OnClose函数');
  },
});
```

## API

### 方法

| 方法名 | 参数 | 返回值 | 介绍 |
| --- | --- | --- | --- |
| Toast | `options` | toast 实例 | 展示提示 |
| Toast.loading | `options` | toast 实例 | 展示加载提示 |
| Toast.success | `options` | toast 实例 | 展示成功提示 |
| Toast.fail | `options` | toast 实例 | 展示失败提示 |
| Toast.clear | `clearAll` | `void` | 关闭提示 |
| Toast.setDefaultOptions | `options` | `void` | 修改默认配置，对所有 Toast 生效 |
| Toast.resetDefaultOptions | - | `void` | 重置默认配置，对所有 Toast 生效 |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| ref | vue组件实例，即用ref属性取到的引用 | VueInstance | `wan-toast` |
| type | 提示类型，可选值为 `loading` `success` `fail` `html` | _string_ | `text` |
| position | 位置，可选值为 `top` `middle` `bottom` | _string_ | `middle` |
| message | 内容 | _string_ | `''` |
| mask | 是否显示遮罩层 | _boolean_ | `false` |
| forbidClick | 是否禁止背景点击 | _boolean_ | `false` |
| loadingType | 加载图标类型, 可选值为 `spinner` | _string_ | `circular` |
| zIndex | z-index 层级 | _number_ | `1000` |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | _number_ | `2000` |
| onClose | 关闭时的回调函数 | _Function_ | - |

### Slot

| 名称 | 说明       |
| ---- | ---------- |
| -    | 自定义内容 |

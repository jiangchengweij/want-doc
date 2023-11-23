---
title: 主题定制
---

# {{ $frontmatter.title }}
>各端小程序基本都支持CSS变量，所以这使得用**CSS变量**来实现定制主题变为可能。对于不支持CSS变量的设备，定制主题不会生效，不过不必担心，默认样式仍会生效。

### 样式变量

定制使用的 CSS 变量 与 Less 变量 同名，下面是一些基本的样式变量，所有可用的颜色变量请参考[配置文件](https://github.com/jiangchengweij/want/blob/main/uni_modules/want/components/common/style/var.scss)。

```scss
// Component Colors
$text-color: #323233;
$border-color: #ebedf0;
$active-color: #f2f3f5;
$background-color: #f8f8f8;
$background-color-light: #fafafa;
```

## 定制方法

### 定制单个组件的主题样式

通过CSS为组件设置变量

```html
<w-button custom-class="my-button">
  默认按钮
</w-button>
```

```css
.my-button {
  --button-border-radius: 10px;
  --button-default-color: #f2f3f5;
}
```

或通过 style 属性来设置 CSS 变量，这使你能够轻松实现主题的动态切换

```html
<template>
  <w-button :style="buttonStyle">
    默认按钮
  </w-button>
</template>
<script setup>
import { ref } from 'vue'
const buttonStyle = ref(`
  "--button-border-radius": "10px";
  "--button-default-color": "green";
`)
onReady(() => {
  setTimeout(() => {
    buttonStyle = `
      --button-border-radius: 2px;
      --button-default-color: pink;
    `;
  }, 2000);
})
</script>
```

### 定制多个组件的主题样式

与单个组件的定制方式类似，只需用一个 container 节点包裹住需要定制的组件，并将 CSS 变量 设置在 container 节点上

```html
<template>
  <view class="container">
    <w-button @click="onClick">
      默认按钮
    </w-button>

    <w-toast ref="toastRef" />
  </view>
</template>
<script setup>
import { ref } from 'vue'
import Toast from '@/uni_modules/want/components/utils/toast'

const toastRef = ref(null)

function onClick() {
  Toast({ ref: toastRef.value, message: '我是提示文案，建议不超过十五字~' });
}
</script>
<style>
.container {
  --button-border-radius: 10px;
  --button-default-color: #f2f3f5;
  --toast-max-width: 100px;
  --toast-background-color: pink;
}
</style>
```

### 定制全局主题样式

在全局CSS文件中，写入 CSS 变量，即可对全局生效

```css
page {
  --button-border-radius: 10px;
  --button-default-color: #f2f3f5;
  --toast-max-width: 100px;
  --toast-background-color: pink;
}
```

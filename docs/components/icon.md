---
title: Icon 图标
---

# {{ $frontmatter.title }}

>基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。

## 代码演示

### 基础用法

`Icon`的`name`属性支持传入图标名称或图片链接。

```html
<w-icon name="close" />
<w-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

### 提示信息

设置`dot`属性后，会在图标右上角展示一个小红点。设置`info`属性后，会在图标右上角展示相应的徽标。

```html
<w-icon name="chat" dot />
<w-icon name="chat" info="9" />
<w-icon name="chat" info="99+" />
```

### 图标颜色

设置`color`属性来控制图标颜色。

```html
<w-icon name="chat" color="red" />
```

### 图标大小

设置`size`属性来控制图标大小。

```html
<w-icon name="chat" size="50px" />
```

### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。例如，可以在 `app.scss`(自行定义的全局样式) 文件中引入。

```css
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```html
<!-- 通过 class-prefix 指定类名为 my-icon -->
<w-icon class-prefix="my-icon" name="extra" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | _string_ | - |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| info | 图标右上角文字提示 | _string \| number_ | - |
| color | 图标颜色 | _string_ | `inherit` |
| size | 图标大小，如 `20px`，`2em`，默认单位为`px` | _string \| number_ | `inherit` |
| custom-style | 自定义样式 | _string_ | - |
| class-prefix | 类名前缀 | _string_ | `wan-icon` |

### Events

| 事件名     | 说明           | 参数 |
| ---------- | -------------- | ---- |
| click | 点击图标时触发 | -    |

### 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| custom-class | 根节点样式类 |
| info-class | 图标右上角文字样式类 |


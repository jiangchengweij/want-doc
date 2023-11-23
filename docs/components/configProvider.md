---
title: ConfigProvider 全局配置
---

# {{ $frontmatter.title }}

>用于配置 Vant Weapp 组件的主题样式

## 代码演示

以 Button 组件为例，开发者工具查看组件的样式，可以看到 `.wan-button--primary` 类名上存在以下变量：

```css
.wan-button--primary {
  color: var(--button-primary-color, #fff);
  background: var(--button-primary-background-color, #07c160);
  border: var(--button-border-width, 1px) solid var(
      --button-primary-border-color,
      #07c160
    );
}
```

### 自定义 CSS 变量

#### 通过 CSS 覆盖

你可以直接在代码中覆盖这些 CSS 变量，Button 组件的样式会随之发生改变：

```css
/* 添加这段样式后，Primary Button 会变成红色 */
page {
  --button-primary-background-color: red;
}
```

#### 通过 ConfigProvider 覆盖

`ConfigProvider` 组件提供了覆盖 CSS 变量的能力，你需要在根节点包裹一个 `ConfigProvider` 组件，并通过 `theme-vars` 属性来配置一些主题变量。

```vue
<template>
  <w-config-provider :theme-vars="state.hemeVars">
	  <w-cell-group>
	    <w-field label="评分">
				<template #input>
					<view style="width: 100%">
					  <w-rate v-model="state.rate" @change="onChange('rate', $event)" />
					</view>
				</template>
	    </w-field>
	    <w-field label="滑块" :border="false">
				<template #input>
					<view style="width: 100%">
					  <w-slider v-model="state.slider" @change="onChange('slider', $event)" />
					</view>
				</template>
	    </w-field>
	  </w-cell-group>
    <view style="margin: 16px">
      <w-button round block type="primary">提交</w-button>
    </view>
  </w-config-provider>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
	rate: 4,
	slider: 50,
	themeVars: {
		rateIconFullColor: '#07c160',
		sliderBarHeight: '4px',
		sliderButtonWidth: '20px',
		sliderButtonHeight: '20px',
		sliderActiveBackgroundColor: '#07c160',
		buttonPrimaryBorderColor: '#07c160',
		buttonPrimaryBackgroundColor: '#07c160',
	},
})
function onChange(key, event) {
	state[key] = event
}
</script>
```

## API

### Props

| 参数       | 说明           | 类型     | 默认值 |
| ---------- | -------------- | -------- | ------ |
| theme-vars | 自定义主题变量 | Object | -      |



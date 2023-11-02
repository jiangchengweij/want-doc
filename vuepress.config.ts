import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  base: '/wei_document/',
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    // 在这里进行配置
    navbar: [
      {
        text: 'WeiUi',
        link: '/weiui',
      },
    ],
    sidebar: {
      '/weiui': [
        {
          text: '开发指南',
          children: ['/weiui/home']
        },
        {
          text: '基础组件',
          children: ['/weiui/button']
        }
      ]
    }
  }),
})

// - text: 开发指南
// children: 
//   - text: 介绍
//     link: /weiui/home
//   - text: 快速上手
//     link: /quickstart
// - text: 基础组件
// children: 
//   - Button 按钮


import { defineConfig } from 'vitepress'
import SidebarConfig from './sidebar.mjs' 

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Want",
  description: "UniApp开源组件库",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    logo: './logo.png',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    sidebar: {
      '/': SidebarConfig
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

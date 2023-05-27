import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "L-Pig's Blog",
  description: "小朱的博客",
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
  },
  markdown: {
    lineNumbers: true,
  },
 
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    logo: '/hero.svg',
    outlineTitle: '导航栏',
    outline: 'deep',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    footer: {
      copyright: `L-Pig | 版权所有 © 2022-${new Date().getFullYear()} <a target="_blank" href="https://github.com/coder-xiaozhu">coder-xiaozhu</a>`,
    },
    nav: [
      { text: 'Java', link: '/Java/' },
      { text: 'Go', link: '/Go/' }
    ],
    sidebar: getSidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/coder-xiaozhu' }
    ],
  }
})

function getSidebar(){
  return {
    "/Java/": javaSidebar(),
    "/Go/":goSidebar()
  }
}

function javaSidebar() {
  return [
    {
      text: 'Java',
      items: [
        { text: 'First', link: '/Java/first' },
      ]
    }
  ]
}

function goSidebar() {
  return [
    {
      text: 'Go',
      items: [
        { text: 'First', link: '/Go/first' },
      ]
    }
  ]
}
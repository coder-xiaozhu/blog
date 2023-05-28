import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "L-Pig's Blog",
  description: "小朱的博客",
  lastUpdated: true,
  useWebFonts: false,
  base: '/vitepress',
  outDir: 'build/.vuepress/dist',
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
    lastUpdatedText: '最后一次更新',

    outlineTitle: '导航栏',
    outline: 'deep',
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    footer: {
      copyright: `L-Pig | 版权所有 © 2022-${new Date().getFullYear()} <a target="_blank" href="https://github.com/coder-xiaozhu">coder-xiaozhu</a>`,
    },
    nav: [
      { text: 'Java', link: '/Java/' },
      { text: 'Go', link: '/Go/' },
      { text: 'Redis', link: '/Redis/' }
    ],
    sidebar: getSidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/coder-xiaozhu' }
    ],
  }
})

function getSidebar() {
  return {
    "/Java/": javaSidebar(),
    "/Go/": goSidebar(),
    "/Redis/": redisSidebar()
  }
}

function javaSidebar() {
  return [
    {
      text: 'Java',
      items: [
        { text: 'SpringBoot打包后不能读取classpath下文件', link: '/Java/springboot-package' },
        { text: 'SpringBoot-Jar包瘦身', link: '/Java/thin-jar' }
      ]
    }
  ]
}

function goSidebar() {
  return [
    {
      text: 'Go',
      items: [
        { text: 'Go实现枚举', link: '/Go/enum' },
      ]
    }
  ]
}

function redisSidebar() {
  return [
    {
      text: 'Redis',
      items: [
        { text: '缓存穿透、缓存击穿、缓存雪崩', link: '/Redis/cache' }
      ]
    }
  ]

}
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "L-Pig's Blog",
  description: "小朱的博客",
  lastUpdated: true,
  useWebFonts: false,
  base: '/blog',
  outDir: 'build/.vuepress/dist',
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
  },
  markdown: {
    lineNumbers: true,
  },
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/blog/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/blog/favicon.ico' }],
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
      { text: 'Redis', link: '/Redis/' },
      { text: 'MySQL', link: '/MySQL/' },
      { text: 'MQ', link: '/MQ/' },
      { text: '杂项', link: '/Sundry/' }
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
    "/Redis/": redisSidebar(),
    "/MySQL": mysqlSidebar(),
    "/MQ": mqSidebar(),
    "/Sundry/": sundrySidebar()
  }
}

function javaSidebar() {
  return [
    {
      text: 'Java',
      items: [
        { text: 'SpringBoot打包后不能读取classpath下文件', link: '/Java/springboot-package' },
        { text: 'SpringBoot-Jar包瘦身', link: '/Java/thin-jar' },
        { text: '浅谈@SpringBootApplication', link: 'Java/@SpringBootApplication' },
        { text: 'Feign', link: '/Java/feign-global-config' },
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

function mysqlSidebar() {
  return [
    {
      text: 'MySQL',
      items: [
        { text: 'MySQL事务', link: '/MySQL/mysql-transaction' },
        { text: 'MySQL索引失效', link: '/MySQL/index-lose-efficacy' }
      ]
    }
  ]
}

function mqSidebar() {
  return [
    {
      text: 'MQ',
      items: [
        { text: 'Kafka安装', link: '/MQ/kafka-install' }
      ]
    }
  ]
}

function sundrySidebar() {
  return [
    {
      text: '杂项',
      items: [
        { text: 'Linux常用命令', link: '/Sundry/linux-command' },
        { text: 'Docker常用命令', link: '/Sundry/docker-command' },
        { text: 'Docker安装Redis', link: '/Sundry/docker-install-redis' },
        { text: 'CentOS-8配置阿里云yum源', link: '/Sundry/centos-yum' },
        { text: 'Nginx安装错误: No package nginx available 问题', link: '/Sundry/centos-install-nginx' },
        { text: 'Nginx Permission denied 问题', link: '/Sundry/nginx-permission-denied' }
      ]
    }
  ]
}
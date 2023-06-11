import { defineConfig } from 'vitepress'
import anchor from 'markdown-it-anchor'
import  tasklist from 'markdown-it-task-lists'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "L-Pig's Blog",
  description: "小朱的博客",
  lastUpdated: true,
  // useWebFonts: false,
  // base: '/blog',
  base: '',
  outDir: 'build/.vuepress/dist',
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(anchor)
      md.use(tasklist, {enabled : false, label: true, labelAfter: true})
    }
  },
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
      copyright: `L-Pig | 版权所有 © 2022-${new Date().getFullYear()} <a target="_blank" href="https://github.com/L-Pig">L-Pig</a>`,
    },
    nav: [
      {
        text: '后端', items: [
          { text: 'Java', link: '/java/', activeMatch: '/java/' },
          { text: 'Go', link: '/go/', activeMatch: '/go/' },
          { text: 'Redis', link: '/redis/', activeMatch: '/redis/' },
          { text: 'MySQL', link: '/mysql/', activeMatch: '/mysql/' },
          { text: 'MQ', link: '/mq/', activeMatch: '/mq/' }
        ]
      },
      { text: '数据结构', link: '/data-structure/', activeMatch: '/data-structure/' },
      // { text: '前端',items: [
      //   { text: 'Vue', link: '/vue/' },
      //   { text: 'JavaScript', link: '/js/' },
      //   { text: 'CSS', link: '/css/' },
      //   { text: 'HTML', link: '/html/' },  
      //   { text: 'TypeScript', link: '/ts/'}
      // ]},
      { text: '杂项', link: '/sundry/', activeMatch: '/sundry/' }
    ],
    sidebar: getSidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/coder-xiaozhu' }
    ],
  }
})

function getSidebar() {
  return {
    "/java/": javaSidebar(),
    "/go/": goSidebar(),
    "/redis/": redisSidebar(),
    "/mysql/": mysqlSidebar(),
    "/mq/": mqSidebar(),
    "/sundry/": sundrySidebar(),
    "/data-structure/": dataStructureSidebar()
  }
}

function javaSidebar() {
  return [
    {
      text: 'Java',
      items: [
        { text: 'SpringBoot打包后不能读取classpath下文件', link: '/java/springboot-package' },
        { text: 'SpringBoot-Jar包瘦身', link: '/java/thin-jar' },
        { text: '浅谈@SpringBootApplication', link: 'java/@SpringBootApplication' },
        { text: 'Feign', link: '/java/feign-global-config' },
      ]
    }
  ]
}

function goSidebar() {
  return [
    {
      text: 'Go',
      items: [
        { text: 'Go实现枚举', link: '/go/enum' },
        { text: 'Go常用库', link: '/go/common-library' },
      ]
    }
  ]
}

function redisSidebar() {
  return [
    {
      text: 'Redis',
      items: [
        { text: '缓存穿透、缓存击穿、缓存雪崩', link: '/redis/cache' }
      ]
    }
  ]
}

function mysqlSidebar() {
  return [
    {
      text: 'MySQL',
      items: [
        { text: 'MySQL事务', link: '/mysql/mysql-transaction' },
        { text: 'MySQL索引失效', link: '/mysql/index-lose-efficacy' }
      ]
    }
  ]
}

function mqSidebar() {
  return [
    {
      text: 'MQ',
      items: [
        { text: 'Kafka安装', link: '/mq/kafka-install' }
      ]
    }
  ]
}

function sundrySidebar() {
  return [
    {
      text: '杂项',
      items: [
        { text: 'Linux常用命令', link: '/sundry/linux-command' },
        { text: 'zsh和oh-my-zsh安装', link: '/sundry/install-zsh' },
        { text: 'Docker常用命令', link: '/sundry/docker-command' },
        { text: 'Git常用命令', link: '/sundry/git-command' },
        { text: 'Docker安装Redis', link: '/sundry/docker-install-redis' },
        { text: 'CentOS-8配置阿里云yum源', link: '/sundry/centos-yum' },
        { text: 'Nginx安装错误: No package nginx available 问题', link: '/sundry/centos-install-nginx' },
        { text: 'Nginx Permission denied 问题', link: '/sundry/nginx-permission-denied' }
      ]
    }
  ]
}

function dataStructureSidebar(){
  return [
    {
      text: '数据结构',
      items: [
        { text: '稀疏数组', link: '/data-structure/sparse_array' },
        { text: '队列', link: '/data-structure/queue' },
      ]
    }
  ]
}

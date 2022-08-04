const {defaultTheme} = require('@vuepress/theme-default')
const {activeHeaderLinksPlugin} = require('@vuepress/plugin-active-header-links')

module.exports = {
  port: 3000,
  lang: 'zh-CN',
  title: 'Healer、loser',
  description: '学习笔记',
  base: "/healer/",
  head: [['link', {rel: 'icon', href: '/images/logo.png'}]],

  //主题
  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: '个人笔记',
        children: [
          {
            text: '个人笔记',
            children: [
              {
                text: 'HTML',
                link: '/guide/html/html',
              },
              {
                text: 'CSS',
                link: '/guide/css/selected',
              },
              {
                text: 'JS',
                link: '/guide/js/regExp',
              }
            ],
          },
        ],
      },
    ],
    sidebar: {
      '/guide/html/': [
        'html',
      ],
      '/guide/css/': [
        'selected',
        'import',
        'text',
        'boxModel',
        'bgc',
        'table',
        'float',
        'position',
        'flex',
        'grid',
        'transform',
        'transition',
        'keyframes',
        'media',
        'viewport',
      ],
      '/guide/js/': [
        'base',
        'operator',
        'basicType',
        'array',
        'symbol',
        'set',
        'map',
        'func',
        'regExp'
      ],
    }
  }),
  
  plugins: [
    activeHeaderLinksPlugin({
      // 配置项
    }),
  ],
}

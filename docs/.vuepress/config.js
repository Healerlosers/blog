const {defaultTheme} = require('@vuepress/theme-default')
const {activeHeaderLinksPlugin} = require('@vuepress/plugin-active-header-links')
const {searchPlugin} = require('@vuepress/plugin-search')

module.exports = {
  port: 3000,
  lang: 'zh-CN',
  title: 'Healer、loser',
  description: '学习笔记',
  base: "/blog/",
  head: [['link', {rel: 'icon', href: '/images/logo.png'}]],
  //主题
  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: 'Web',
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
                link: '/guide/js/base',
              }
            ]
          }
        ],
      },
      {
        text: 'Git',
        link: '/guide/git/git',
      },
      {
        text: 'Typescript',
        link: '/guide/ts/setting',
      },
      {
        text: '工具',
        children: [
          {
            text: '工具软件',
            children: [
              {
                text: 'npm',
                link: '/guide/tool/npm',
              },
              {
                text: 'yarn',
                link: '/guide/tool/yarn',
              }, {
                text: 'nvm',
                link: '/guide/tool/nvm',
              },
              
            ]
          }
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
        'scope',
        'object',
        'prototype',
        'class',
        'module',
        'regExp',
        'promise',
        'task',
        'promiseCore',
        'dom',
        'coordinate',
        'event',
        'ajax',
        'canvas',
      ],
      '/guide/git/': [
        'git',
      ],
      '/guide/ts/': [
        'setting',
        'baseType',
        'assertion',
        'class_interfaces',
        'generics',
        'decorators',
        'module',
        'webpack',
        'typeTool',
      ],
      '/guide/tool/': [
        'npm',
        'yarn',
        'nvm',
      ],
    }
  }),
  
  
  plugins: [
    activeHeaderLinksPlugin({
      // 配置项
    }),
    searchPlugin({
      // 排除首页
      isSearchable: (page) => page.path !== '/',
      // 配置项
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
}
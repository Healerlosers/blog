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
            text: 'SubGroup',
            children: [
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
      '/guide/js/': [
        'base',  /* /foo/one.html */
        'regExp'   /* /foo/two.html */
      ],
    }
  }),
  
  plugins: [
    activeHeaderLinksPlugin({
      // 配置项
    }),
  ],
}

/*
// SidebarItem
{
  text: '',
    link: '/guide/js/base',
},
{
  text: '正则',
    link: '/guide/js/regExp',
},*/

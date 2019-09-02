module.exports = {
  base: '/',
  title: '前端日常积累',
  description: '记录点滴',
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}]
  ],
  host: '0.0.0.0',
  port: 9527,
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
    displayAllHeaders: true, // 默认值：false
    sidebarDepth: 0,
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    sidebar: [
      // ['url', '标题'],
      ['/', '简介'],
      {
        title: 'javascript',
        collapsable: false,
        children: [
          // ['url', '标题'],
          ['/javascript/', 'javascript相关'],
        ]
      },
      {
        title: 'code',
        collapsable: false,
        children: [
          ['/code/', 'code相关'],
          ['/code/request.js', 'axios封装v1'],
          ['/code/request.v2.js', 'axios封装v2'],
        ]
      },
      {
        title: 'style',
        collapsable: false,
        children: [
          ['/style/', '样式相关'],
        ]
      },
      {
        title: 'vue',
        collapsable: false,
        children: [
          ['/vue/', 'vue相关'],
        ]
      },
      {
        title: 'webpack',
        collapsable: false,
        children: [
          ['/webpack/', 'webpack相关'],
        ]
      },
    ]
  }
}

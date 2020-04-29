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
    nav: [
      {text: 'Home', link: '/'},
      {text: '积累', link: '/blog/'},
      {text: '项目', link: '/project/'},
      {text: 'GitHub', link: 'https://github.com/zehuichan'},
    ],
    sidebar: {
      '/blog/': [
        ['javascript/', 'javascript'],
        {
          title: '代码块',
          collapsable: false,
          children: [
            ['code/FastClick', 'FastClick用法'],
            ['code/图片转base64', '图片转base64'],
            ['code/request.js', 'request.js'],
            ['code/request.v2.js', 'request.v2.js'],
          ]
        },
        {
          title: 'css',
          collapsable: false,
          children: [
            ['style/basic', '页面样式初始化'],
            ['style/tap', '长按样式'],
            ['style/debug', 'debug.css'],
          ]
        },
        {
          title: 'vue',
          collapsable: false,
          children: [
            ['vue/', '简介'],
            ['vue/plugins-微信jssdk', '微信jssdk'],
            ['vue/plugins-高德地图API', '高德地图API'],
            ['vue/plugins-百度地图API', '百度地图API'],
          ]
        },
        ['webpack/', 'webpack'],
        {
          title: '小程序',
          collapsable: false,
          children: [
            ['mp/小程序接入腾讯云即时通讯IM', '小程序接入腾讯云即时通讯IM']
          ]
        },
        {
          title: 'wechat',
          collapsable: false,
          children: [
            ['wechat/', '简介'],
            ['wechat/API-chooseWXPay', 'chooseWXPay'],
            ['wechat/API-chooseImage', 'chooseImage'],
          ]
        },
        ['git/', 'git'],
      ],
      '/project/': []
    }
  }
}

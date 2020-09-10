console.log(process.env.NODE_ENV)

module.exports = {
  base: '/gh-pages/',
  title: '前端日常积累',
  description: '记录点滴',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
    displayAllHeaders: true, // 默认值：false
    sidebarDepth: 0,
    lastUpdated: '上次更新', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: '积累',
        link: '/blog/'
      },
      {
        text: '项目',
        link: '/project/'
      },
      {
        text: '关于我',
        link: '/resume/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/zehuichan'
      },
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
            ['style/unit', '原子样式'],
            ['style/var', '一些样式声明'],
            ['style/tap', '长按样式'],
            ['style/debug', 'debug.css'],
          ]
        },
        {
          title: 'vue',
          collapsable: false,
          children: [
            ['vue/', 'Introduction'],
            ['vue/plugins-微信jssdk', '微信jssdk'],
            ['vue/plugins-高德地图API', '高德地图API'],
            ['vue/plugins-百度地图API', '百度地图API'],
            ['vue/cli-CDN', 'CDN'],
          ]
        },
        ['webpack/', 'webpack'],
        {
          title: '小程序',
          collapsable: false,
          children: [
            ['mp/基于uniapp架构的小程序模板', '基于uniapp架构的小程序模板'],
            ['mp/小程序接入腾讯云即时通讯IM', '小程序接入腾讯云即时通讯IM']
          ]
        },
        {
          title: 'wechat',
          collapsable: false,
          children: [
            ['wechat/', 'Introduction'],
            ['wechat/API-chooseWXPay', 'chooseWXPay'],
            ['wechat/API-chooseImage', 'chooseImage'],
          ]
        },
        ['git/', 'git'],
      ],
      '/project/': [
        {
          title: '基于vant-ui组件库',
          collapsable: false,
          children: [
            ['vant/', 'Introduction'],
            ['vant/vant-tpl', 'vant-tpl'],
            ['vant/vant-mall-tpl', 'vant-mall-tpl'],
          ]
        },
        {
          title: '基于element-ui组件库',
          collapsable: false,
          children: [
            ['element/', 'Introduction'],
            ['element/vant-mall-admin', 'vant-mall-admin'],
          ]
        }
      ],
      '/resume/': [
        ['简历', '简历'],
        ['HTML和CSS', 'HTML和CSS'],
        ['JS', 'JS'],
        ['浏览器', '浏览器'],
        ['框架通识', '框架通识'],
        ['Vue', 'Vue'],
        ['Vue项目扩展', 'Vue项目扩展'],
        ['React', 'React'],
        ['小程序', '小程序'],
        // ['20200504', '20200504'],
        // ['20200529', '20200529'],
        // ['20200615,20200622', '20200615,20200622'],
        // ['20200625', '20200625'],
        // ['20200811', '20200811'],
        // ['20200826', '20200826'],
      ]
    }
  },
  plugins: [
    '@vuepress/last-updated',
    '@vuepress/back-to-top',
    '@vuepress/nprogress'
  ]
}

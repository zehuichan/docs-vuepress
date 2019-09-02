module.exports = {
  title: '前端日常积累',
  description: '记录点滴',
  base: '/',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
    displayAllHeaders: true, // 默认值：false
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    sidebar: [
      ['/', '简介'],
      {
        title: "vue",
        collapsable: false,
        children:[
          ['/vue/Vue 定义全局函数.md', 'Vue 定义全局函数'],
        ]
      },
    ]
  }
}

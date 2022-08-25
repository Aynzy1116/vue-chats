module.exports = {
  devServer: {
    open: true, // 是否自动弹出浏览器页面
    host: 'localhost',
    port: '8080',
    https: false,
    hotOnly: false,
    // 配置代理实现跨域
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: false // 严格模式开启（默认true）或者关闭（false）
}

/**
 * @name 区分环境的URL配置
 * @doc https://umijs.org/docs/guides/proxy
 */

export default {
  // 开发环境
  dev: {
    // 设置路由前缀，通常用于部署到非根目录。
    base: '/',
    // 配置 webpack 的 publicPath。当打包的时候，webpack 会在静态文件路径前面添加 publicPath 的值，当你需要修改静态文件地址时，比如使用 CDN 部署，把 publicPath 的值设为 CDN 的值就可以。如果使用一些特殊的文件系统，比如混合开发或者 cordova 等技术，可以尝试将 publicPath 设置成 ./ 相对路径。
    publicPath: '/',
    // http api base url
    apiUrl: '',
  },

  // 测试环境
  test: {
    base: '/',
    publicPath: '/',
    apiUrl: 'https://xxxxx.com',
  },

  // 正式环境
  prod: {
    base: '/',
    publicPath: '/person-info/dist/',
    apiUrl: 'https://xxxxx.com',
  },
};

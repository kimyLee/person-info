/**
 * @name 代理的配置
 * @see 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 *
 * @doc https://umijs.org/docs/guides/proxy
 */
export default {
  /**
   * @name 详细的代理配置
   * @doc https://github.com/chimurai/http-proxy-middleware
   */
  dev: {
    '/api/': {
      // 要代理的地址
      target: 'https://127.0.0.1:4000',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
      pathRewrite: { '^/api': '/api' },
      https: { hosts: ['127.0.0.1', 'localhost'] },
    },
  },
  test: {
    '/api/': {
      target: 'https://127.0.0.1:4000',
      changeOrigin: true,
      pathRewrite: { '^/api': '/api' },
    },
  },
  prod: {
    '/api/': {
      target: 'https://127.0.0.1:4000',
      changeOrigin: true,
      pathRewrite: { '^/api': '/api' },
      https: { hosts: ['127.0.0.1', 'localhost'] },
    },
  },
};

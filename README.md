# Template-web

这个项目是基于[Ant Design Pro](https://pro.ant.design)初始化的 web 中后台前端项目模板

## 前置了解

- Web (html, css, javaScript)
- TypeScript 带类型的 JavaScript
- Node.js
- Webpack
- React
- React-Route
- proxy 反向代理
- fabric 严格但是不严苛的 lint 规则集（提供了严格但是不严苛的 lint 规则集，包含 eslint，stylelint，prettier 三种工具）

## Docs

- [Ant Design Pro](https://pro.ant.design)
- [Ant Design 前端组件库](https://ant.design)
- [Umi](https://umijs.org)
- [Ant Design Chart 简单好用的 React 图表库](https://charts.ant.design)
- [ProComponents 是基于 Ant Design 而开发的模板组件](https://procomponents.ant.design)
- [UseModel 简易数据流](https://v3.umijs.org/zh-CN/plugins/plugin-initial-state)
- [Dva 首先是一个基于 redux 和 redux-saga 的数据流方案](https://dvajs.com/)
- [Ant Design CssInJs](https://ant-design.github.io/cssinjs/)

## Package.json script

```bash

# Install pnpm
# npm g install pnpm

# Install `node_modules`:
pnpm install

# Start
pnpm run start:dev

# Build
pnpm run build

# openapi 生成 service 接口文件
pnpm run openapi

# Lint  check code style
pnpm run lint

# Test code
pnpm test

## 其他


```

## 文件目录结构

```
├── config                   # umi 配置，包含路由，构建, path 等配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets                 # 本地静态资源
│   ├── components             # 业务通用组件
│   ├── e2e                    # 集成测试用例
│   ├── layouts                # 通用布局
│   ├── models                 # 全局 dva model
│   ├── pages                  # 业务页面入口和常用模板
│   ├── services               # 后台接口服务
│   │   ├── manual               # 手动定义接口目录
│   │   └── swagger              # openapi 生成目录
│   ├── utils                  # 工具库
│   ├── locales                # 国际化资源
│   ├── constants.ts           # 常量文件
│   ├── global.ts              # 全局 JS
│   ├── global.less            # 全局样式
│   ├── service-worker.js
│   ├── requestErrorConfig.ts
│   ├── access.ts              # 权限控制
│   └── app.tsx                # getInitialState  layout request 运行配置
├── tests                      # 测试工具
├── README.md
└── package.json
```

## API 数据结构定义

## github action

## dockerfile

## 一些问题

- [国际化](https://pro.ant.design/zh-CN/docs/i18n)

  - pnpm run i18n-remove 去除国际化， 并且手动删除 locales 中非必要的文件和字段

- [数据 Mock]()

- [useLocation]

  - > > 推荐使用 useLocation, 而不是直接访问 history.location. 两者的区别是 pathname 的部分。 history.location.pathname 是完整的浏览器的路径名；而 useLocation 中返回的 pathname 是相对项目配置的 base 的路径。举例：项目如果配置 base: '/testbase', 当前浏览器地址为 https://localhost:8000/testbase/page/apple , history.location.pathname 为 /testbase/page/apple, useLocation().pathname 为 /page/apple

- [版本支持]
  - > > antd-pro 6.0.0 版本[删除对 IE 的支持，如果对 IE 有需求，请使用旧版本，（react，antd 都将不支持的 ie11]()https://github.com/ant-design/ant-design-pro/releases ，必要时候可以 [ant Design Pro 5.2 版本 ](https://preview.pro.ant.design/dashboard/analysis) 移植需要所需要的功能模块， [私有仓库地址](https://github.com/cubyfun-inc/template-block-web), 后续随 antd-pro 版本更新本仓库。

## Github action 的 CI/CD 集成

## 待办

- 全量模板 （搬运 导航栏 的 搜索相关组件）
- requestErrorConfig 文件
- github action

TODO：

1. 最小化模版
2. 不同升级方案：教程
3.

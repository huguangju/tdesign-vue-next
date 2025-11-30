export default {
  lang: 'zh-CN',
  base: '/tdesign-vue-next/',
  title: 'TDesign Vue Next 学习指南',
  description: '系统学习与二次开发指南',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '资源', link: '/ecosystem/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '01 总览',
          collapsed: false,
          items: [
            { text: '总览', link: '/guide/01-overview/' },
            { text: '项目结构', link: '/guide/01-overview/project-structure' },
            { text: '工作区与脚本', link: '/guide/01-overview/workspace-and-scripts' },
          ],
        },
        {
          text: '02 运行与构建',
          collapsed: false,
          items: [
            { text: '运行与构建', link: '/guide/02-run-build/' },
            { text: '安装依赖', link: '/guide/02-run-build/installation' },
            { text: '开发站点', link: '/guide/02-run-build/dev-site' },
            { text: '构建库产物', link: '/guide/02-run-build/build-library' },
            { text: '测试与覆盖率', link: '/guide/02-run-build/tests-coverage' },
            { text: 'Playground 独立联调', link: '/guide/02-run-build/playground' },
          ],
        },
        {
          text: '03 组件架构',
          collapsed: false,
          items: [
            { text: '组件架构', link: '/guide/03-component-architecture/' },
            { text: '文件与约定', link: '/guide/03-component-architecture/files-and-conventions' },
            { text: 'Props 设计', link: '/guide/03-component-architecture/props-design' },
            { text: '事件机制', link: '/guide/03-component-architecture/events' },
            { text: '插槽模式', link: '/guide/03-component-architecture/slots' },
            { text: '常用 Hooks', link: '/guide/03-component-architecture/hooks' },
            { text: '注册与安装', link: '/guide/03-component-architecture/registration-and-install' },
          ],
        },
        {
          text: '04 样式与主题',
          collapsed: false,
          items: [
            { text: '样式与主题', link: '/guide/04-style-theme/' },
            { text: 'CSS 变量', link: '/guide/04-style-theme/css-variables' },
            { text: '主题切换', link: '/guide/04-style-theme/theme-switch' },
            { text: '覆盖策略', link: '/guide/04-style-theme/override-strategies' },
            { text: '组件样式入口', link: '/guide/04-style-theme/component-style-entry' },
          ],
        },
        {
          text: '05 国际化',
          collapsed: false,
          items: [
            { text: '国际化', link: '/guide/05-i18n/' },
            { text: '资源位置', link: '/guide/05-i18n/resources' },
            { text: 'ConfigProvider', link: '/guide/05-i18n/config-provider' },
            { text: '组件级覆盖', link: '/guide/05-i18n/per-component-overrides' },
          ],
        },
        {
          text: '06 测试方案',
          collapsed: false,
          items: [
            { text: '测试方案', link: '/guide/06-tests/' },
            { text: '单元测试', link: '/guide/06-tests/unit-tests' },
            { text: '快照测试', link: '/guide/06-tests/snapshot-tests' },
            { text: '覆盖率', link: '/guide/06-tests/coverage' },
          ],
        },
        {
          text: '07 文档与示例',
          collapsed: false,
          items: [
            { text: '文档与示例', link: '/guide/07-docs-examples/' },
            { text: 'Markdown 解析管线', link: '/guide/07-docs-examples/md-pipeline' },
            { text: '示例容器语法', link: '/guide/07-docs-examples/demo-syntax' },
            { text: '示例位置与结构', link: '/guide/07-docs-examples/examples-location' },
          ],
        },
        {
          text: '08 构建与发布',
          collapsed: false,
          items: [
            { text: '构建与发布', link: '/guide/08-build-release/' },
            { text: 'Rollup 构建', link: '/guide/08-build-release/rollup-build' },
            { text: 'Vite 站点', link: '/guide/08-build-release/vite-site' },
            { text: 'Babel 与 PostCSS', link: '/guide/08-build-release/babel-postcss' },
            { text: 'Changelog 与发布', link: '/guide/08-build-release/changelog-release' },
          ],
        },
        {
          text: '09 实践',
          collapsed: false,
          items: [
            { text: '实践', link: '/guide/09-practices/' },
            { text: '重写 Button', link: '/guide/09-practices/rewrite-button' },
            { text: '重写 Input', link: '/guide/09-practices/rewrite-input' },
            { text: '重写 Select', link: '/guide/09-practices/rewrite-select' },
            { text: '修改现有组件', link: '/guide/09-practices/modification-guide' },
            { text: '新组件模板', link: '/guide/09-practices/new-component-template' },
          ],
        },
        {
          text: '10 规范与流程',
          collapsed: false,
          items: [
            { text: '规范与流程', link: '/guide/10-dev-specs/' },
            { text: 'ESLint 与 Prettier', link: '/guide/10-dev-specs/eslint-prettier' },
            { text: '提交规范', link: '/guide/10-dev-specs/commit-convention' },
            { text: 'PR 审核', link: '/guide/10-dev-specs/pr-review' },
            { text: 'CI 工作流', link: '/guide/10-dev-specs/ci-workflows' },
          ],
        },
        {
          text: '11 路径速查',
          collapsed: false,
          items: [{ text: '路径速查', link: '/guide/11-path-quickref/' }],
        },
        {
          text: '12 代码参考',
          collapsed: false,
          items: [{ text: '代码参考', link: '/guide/12-code-references/' }],
        },
      ],
    },
    outline: 'deep',
  },
};

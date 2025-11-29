## Playground 独立联调环境

- 目标：在本仓库内创建独立包，直接联调源码（无打包），快速验证组件样式与交互

### 步骤
- 初始化包：`packages/playground/package.json`，添加 `dev/build/preview` 脚本
- Vite 别名：`packages/playground/vite.config.ts`
  - `'tdesign-vue-next'`、`'@tdesign/components'` → `../components`
  - `'@tdesign/common-style'` → `../common/style`
- 样式入口：在 `src/main.ts` 引入
  - `@tdesign/components/style/index.js`
  - `@tdesign/common-style/web/_global.less`
  - `@tdesign/common-style/web/theme/_index.less`
- 类型与路径：
  - `tsconfig.json`：添加 `baseUrl` 与 `paths` 指向 `../components/index.ts`
  - `src/env.d.ts`：`declare module '*.vue'`
- 入口与示例：
  - `src/main.ts`：`createApp(App).use(TDesign).mount('#app')`
  - `src/App.vue`：演示 `Button/Input/Select/Tabs`
- 运行：`pnpm -C packages/playground dev`（默认端口 `17002`）

### 验证
- 在浏览器查看组件样式与交互；修改 `packages/components/*` 源码，Playground 实时生效

### 故障排查
- TS2307：为 `paths` 与 `env.d.ts` 提供模块声明
- 样式未生效：确认已引入 `@tdesign/common-style` 与组件样式入口


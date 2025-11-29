## 阶段目标与产出

- 明确组件架构、样式与主题、国际化、测试与文档的实现细节
- 完成 2–3 个基础组件的“对照重写 + 测试通过”实践
- 掌握构建与发布流程，形成可复用的二次开发规范与模板

## 开发环境与运行

- 包管理：`pnpm`（工作区），首次安装：`pnpm i -w`
- 站点开发：`pnpm dev:vue`（文档与示例），或进入 `packages/tdesign-vue-next/site` 执行 `pnpm dev`
- 组件构建：`pnpm build:vue`（Rollup 多产物）
- 单测与覆盖率：`pnpm test:vue`、`pnpm -F @tdesign/vue-next-test run test:unit-coverage`

## 源码分析（2–3 周）

### 组件架构

- 目录巡检：`packages/components/<name>/`，重点文件：`*.tsx`（主实现）、`props.ts`、`type.ts`、`index.ts`、`style/index.js`、`__tests__`、`_example`
- 入口聚合：`packages/components/components.ts`、`packages/components/index.ts`（全量注册）、`packages/components/plugins.ts`（消息、通知、对话框等插件）
- 安装与按需：`packages/shared/utils/withInstall.ts`（`app.use(Component)`）, 自动按需：`packages/auto-import-resolver`

### Props/事件/插槽

- Props：以 `props.ts` 为准（脚本生成），类型在 `type.ts`，函数事件采用 `onXxx` 作为 prop（而非 `emits`）
- 事件：组件内部直接绑定到根节点或具体交互节点（示例：`Button` 的 `onClick`）
- 插槽：统一 `TNode` + `useContent/useTNodeJSX` 渲染；命名插槽如 `suffix`、`action`（示例：`Tabs`）

### 样式与主题

- 变量来源：Web `packages/common/style/web/theme/_index.less`（含 `light/dark/font/radius/size`），Mobile 结构对齐
- CSS 变量前缀：`--td-*`（如 `--td-brand-color-*`、`--td-text-color-*`）；全局入口：`packages/components/style/index.js`
- 暗色切换：设置 `document.documentElement.setAttribute('theme-mode','dark')`
- 覆盖机制：优先通过 CSS 变量覆写，其次在构建层通过 Less `modifyVars`

### 国际化（i18n）

- 资源：`src/_common/js/global-config/locale/*.ts`（`zh_CN` 默认）
- 使用：`<t-config-provider :global-config="cfg">` 注入，组件通过 `useConfig('component')` 读取；部分组件支持 `locale` 局部覆盖（如 `Upload`）

### 测试方案

- 单测框架：`vitest`（组件与站点），旧版 `jest`（`src/_common`）
- 组件单测位置：`packages/components/**/__tests__/*.test.tsx`
- 快照测试：SSR/CSR 在 `packages/tdesign-vue-next/test/src/snap/*.test.ts`
- 覆盖率生成：`packages/tdesign-vue-next/test/vitest.config.ts`，脚本 `generate-coverage.ts` 写入站点配置

### 文档与示例

- 文档来源：组件自带 `*.md` + 公共文档 `packages/common/docs/web/api/*.md`
- Markdown 解析：`packages/tdesign-vue-next/site/plugins/td-doc-to-vue/*`（`:: BASE_DOC ::` 替换、`::: demo` 示例容器、原始代码引入）
- 示例位置：`_example/*.vue`、`_example-ts/*.vue`，在线编辑器集成（Stackblitz/CodeSandbox）

## 核心实现分析

### 构建工具链

- 库打包：`internal/builds/vue-next/*`（Rollup 多产物：`es/esm/lib/cjs/umd`；样式策略 `single/multi/source/ignore`；类型复制与路径重写）
- 站点：`packages/tdesign-vue-next/site/vite.config.ts`（Vue/Vue-JSX/PWA、自定义文档插件与别名）
- Babel：`babel.config.js`（`@vue/babel-plugin-jsx`、`preset-env`）；PostCSS 通过 Rollup 插件处理，无独立 `postcss.config`

### 提交与 CI

- 提交规范：`commitlint.config.js` + `cz-git`，范围自动采集 `packages/components/*`
- Hooks：`husky`（`prepare-commit-msg`、`commit-msg`、`pre-commit`）
- CI：`.github/workflows/pull-request.yml`（lint/test/build）、`auto-changelog.yml`、`auto-release.yml`

### Changelog 与发布

- 本地生成：`script/generate-changelog.js`
- 发布流程：`PUBLISH.md`（`release/x.y.z` -> PR -> 合并 -> 标签 -> npm 发布），站点预览/部署流水线齐备

## 实践（1–2 周）

### 组件对照重写（建议：Button / Input / Select）

- 目标：在 `playground` 或独立包中按现有规范重写，功能一致 + 所有相关测试通过
- 步骤：
  - Button：类名、状态、波纹、`icon/suffix`、`ghost/variant/theme/shape/size`、`onClick` 行为
  - Input：受控值、前后置内容（`prefix/suffix`）、`clearable`、`status` 与尺寸、事件（`onChange/onClear/onEnter`）
  - Select：受控/非受控、`options`/`keys`、过滤与远程、下拉定位、`onChange/onRemove`、多选 Tag
- 验证：为每个组件编写或复用 `vitest` 单测与快照；运行 `pnpm test:vue` + 覆盖率脚本

### 修改现有组件功能

- 添加新 prop：在目标组件 `props.ts` 与 `type.ts` 增加定义，并在 `*.tsx` 实现逻辑；补充文档与示例
- 扩展功能：例如为 `Tabs` 增加键盘可访问性或排序动画；确保 `useVModel` 与事件一致
- 回归验证：更新/新增测试，快照通过；站点示例可视检查

### 新组件（简单）

- 规范：复制 `script/init` 的模板（`component.tsx.tpl`、`component.md.tpl`），在 `packages/components/<name>/` 创建
- 最小实现：Props/插槽/样式入口/文档与示例/单测；在 `components.ts` 聚合导出，并支持 `withInstall`

## 二次开发准备（1 周）

### 工具链与配置

- 深入 `vite.config.ts` 与 `internal/builds`：梳理别名、产物映射、样式策略；确认不使用顶层 Webpack（仅 `src/_common/style/mobile` 演示使用）
- Babel 规则与 JSX：确认 TS/JSX 转换边界与测试环境（`env.test`）
- PostCSS：如需自定义插件（`autoprefixer`/`postcss-nesting`），在 Rollup 插件层配置

### 代码风格与流程

- ESLint/Prettier：使用根配置，必要时在子包覆写；保持 `no-console` 等核心约束
- 提交规范：启用 `cz-git` 交互；按模块设置 `scope`；走 PR 模板与自查清单

### 主题与样式扩展

- 主题变量体系：在 `packages/common/style/web/theme` 扩展新 Token（色彩/尺寸/圆角等），或通过 CSS 变量在应用侧覆写
- 主题切换：约定 `theme-mode` 属性；站点示例新增切换入口以验证

### 组件扩展机制

- 继承/包装：以 `withInstall` 和聚合导出为基，提供新组件或插件；必要时在 `auto-import-resolver` 增加解析规则
- 注册方案：支持全量与按需；为插件（Message/Dialog 等）维持 `install + 全局属性` 模式

## 每周检查清单

- 周度产出：笔记（组件/样式/国际化/测试/文档）、实践代码、测试报告、站点截图
- 必过项：`pnpm lint`、`pnpm test:vue`、`pnpm build:vue`、示例渲染正常

## 路径速查（用于学习）

- 组件示例：`packages/components/*/_example/*.vue`
- 主题变量：`packages/common/style/web/theme/_index.less`
- 国际化：`src/_common/js/global-config/locale/*.ts`
- 单测配置：`packages/tdesign-vue-next/test/vitest.config.ts`
- 文档插件：`packages/tdesign-vue-next/site/plugins/td-doc-to-vue/*`
- 构建脚本：`internal/builds/vue-next/*`
- 提交规范：`commitlint.config.js`、`.husky/*`、`.github/workflows/*`

如需我按此计划开始执行（从组件架构与 Button/Tabs 深入分析并输出实践清单），请确认。

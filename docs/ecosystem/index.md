## 资源

- 目的：为组件开发者提供高质量外部资料与工程入口，避免信息堆砌。

### 指南版入口

- 周边资源（章节化）：`/guide/13-ecosystem-resources/`

### 快速预览

- 启动文档：`pnpm run docs:dev`
- 预览地址示例：`http://127.0.0.1:5173/tdesign-vue-next/`（端口依环境而定）

### 官方概览

- <https://tdesign.tencent.com/about/introduce>

### 技术与架构

- 概述：技术选型与工程体系，统一多栈实现的底层约束与工具。
- 链接：
  - <https://tdesign.tencent.com/about/tech>
- 核心要点：
  - TypeScript、LESS 为开发与样式基础
  - Vite（本地站点）、Rollup（库打包）
  - Jest/Cypress 测试体系
  - Monorepo，`packages/common` 子仓库复用 UI（HTML/CSS）

### 组件开发流程

- 概述：从需求到发布的闭环，确保多技术栈产物一致。
- 链接：
  - <https://tdesign.tencent.com/about/new-component>
- 核心要点：
  - 需求收集与评审（通用性、必要性）
  - API 评审与生成（保持跨栈一致）
  - UI 在 `common` 中实现与复用
  - 各栈组件逻辑开发、CR、验收、发布
  - `git submodule` 保持 UI 同步一致

### API 与规范（多栈一致）

- 概述：统一描述自定义节点与事件，降低跨栈心智负担。
- 链接：
  - <https://github.com/Tencent/tdesign/wiki/Component-API-Guide>
- 核心要点：
  - TNode：统一自定义节点（Vue 插槽/Props、React children/content）
  - 事件命名：Vue Emit 中划线、Props 小驼峰；React 小驼峰
  - 属性透传：父组件包含子组件 Props（如 Select 透传 PopupProps）

### 样式与命名规范

- 概述：BEM 命名与状态类，降低样式权重与污染。
- 链接：
  - <https://github.com/Tencent/tdesign-common/blob/develop/css-naming.md>
  - <https://github.com/Tencent/tdesign-common/blob/develop/naming.md>
- 核心要点：
  - BEM：`t-[block]__[element]--[modifier]`
  - 状态类：`t-is-*`（active/disabled/loading/...）需与元素/块联合使用
  - 设计/组件命名同步，分类一致（Basic/Layout/Data/Input/…）

### 主题与暗色模式

- 概述：CSS Variables 提供完整 Design Token，支持暗色与主题定制。
- 链接：
  - <https://github.com/Tencent/tdesign-common/blob/develop/theme.md>
  - <https://github.com/Tencent/tdesign-common/blob/develop/dark-mode.md>
- 核心要点：
  - CSS 变量覆盖：`--td-*` Token（颜色、字体、圆角、阴影、尺寸）
  - 主题生成器导出 CSS 覆盖
  - 暗色模式：`document.documentElement.setAttribute('theme-mode','dark')`
  - Less 变量精细化：从 ESM 产物引入样式后按需 `modifyVars`

### 构建产物与安装

- 概述：多产物适配不同场景（UMD/ESM/CJS），样式按需引入。
- 链接：
  - <https://github.com/Tencent/tdesign-common/blob/develop/develop-install.md>
- 核心要点：
  - `dist`：UMD + CSS（含 `.min` 与 `*.map`）
  - `es`/`esm`：ES Modules，支持 tree-shaking；`style/` 产出 CSS 或 less 入口
  - `lib`：不包含样式，搭配 `dist` 的 CSS 使用
  - `ejs`：CommonJS
  - `sideEffects` 配置指明样式副作用，利于 tree-shaking

### 设计指南：高频任务

- 概述：中后台高频任务的交互模式与组件选型参考。
- 链接：
  - <https://tdesign.tencent.com/design/offices-task>
- 核心要点：
  - 数据筛选与查询：一次性提交 vs 实时生效，折叠条件与模版
  - 表格批量操作：所见即所得 vs 选择后触发
  - 效果预览：异步集中预览 vs 同步局部预览
  - 新手指引：阻断式 vs 非阻断式 vs 主动触发
  - 数据导入、状态流转：列表/详情的任务流转方式

### 贡献与协作（Vue3 仓库）

- 概述：Monorepo 工作区与本地调试入口。
- 链接：
  - <https://github.com/Tencent/tdesign-vue-next/blob/develop/CONTRIBUTING.md>
- 核心要点：
  - 关键路径：`packages/components`、`packages/tdesign-vue-next/site`、`packages/common`
  - 常用脚本：`pnpm run init`、`pnpm run dev:vue`

### 深度文章 / 案例

- <https://mp.weixin.qq.com/s?__biz=Mzg3MjYwODA1OA==&mid=2247509185&idx=1&sn=c7c8042d25be79e4c19c84d9eeceb921&poc_token=HKD7KmmjYWNr3LR1uUzXojPpoHsYSdA04l4xBxnO>

### Vue Next 概览与更多资源

- 概述：集中查看组件列表、设计与 API 页面导航。
- 链接：
  - <https://tdesign.tencent.com/vue-next/overview>
- 常用入口：
  - 开发站点：`pnpm run dev:vue` → `http://127.0.0.1:17000/vue-next/`
  - 组件页例：`/vue-next/components/button`
  - 单例调试：`/vue-next/demos/button/base`

> 以上链接为高相关入口，兼顾工程实践与规范说明。

## 资源

- 目的：为 Vue3 组件开发（tdesign-vue-next）提供高质量、可追溯的外部资料。

### 官方概览
- 介绍：TDesign 是腾讯内部沉淀的企业级设计体系，强调完整、一致、易用。
- 链接：
  - https://tdesign.tencent.com/about/introduce

### 技术与架构
- 介绍：技术栈选型与工程工具，理解 TypeScript/LESS、Vite/Rollup、Jest/Cypress 等。
- 链接：
  - https://tdesign.tencent.com/about/tech

### 组件开发流程
- 介绍：从需求到生产上线的流程；API 评审、角色分工、子仓库 UI 复用。
- 链接：
  - https://tdesign.tencent.com/about/new-component

### API 与规范
- 介绍：跨技术栈一致性的 API 设计（TNode、事件命名、属性透传等）。
- 链接：
  - https://github.com/Tencent/tdesign/wiki/Component-API-Guide

### 贡献与协作
- 介绍：Monorepo 结构、子仓库初始化与开发、站点本地运行。
- 链接：
  - https://github.com/Tencent/tdesign-vue-next/blob/develop/CONTRIBUTING.md

### 深度文章 / 案例
- 介绍：工程协作与实践思考的长文，便于理解背景与取舍。
- 链接：
  - https://mp.weixin.qq.com/s?__biz=Mzg3MjYwODA1OA==&mid=2247509185&idx=1&sn=c7c8042d25be79e4c19c84d9eeceb921&poc_token=HKD7KmmjYWNr3LR1uUzXojPpoHsYSdA04l4xBxnO

### 样式与命名规范
- 介绍：BEM 命名与状态类，降低样式权重与污染。
- 链接：
  - https://github.com/Tencent/tdesign-common/blob/develop/css-naming.md
  - https://github.com/Tencent/tdesign-common/blob/develop/naming.md
- 要点：`t-[block]__[element]--[modifier]`、`t-is-*` 状态类与分类一致性。

### 主题与暗色模式
- 介绍：CSS Variables 提供 Design Token，支持暗色与主题定制。
- 链接：
  - https://github.com/Tencent/tdesign-common/blob/develop/theme.md
  - https://github.com/Tencent/tdesign-common/blob/develop/dark-mode.md
- 要点：`--td-*` Token 覆盖、主题生成器、`theme-mode=dark`、Less `modifyVars`。

### 构建产物与安装
- 介绍：多产物适配不同场景（UMD/ESM/CJS），样式按需引入。
- 链接：
  - https://github.com/Tencent/tdesign-common/blob/develop/develop-install.md
- 要点：`dist`(UMD+CSS)、`es/esm`(ESM+style)、`lib`(逻辑)、`sideEffects` 指明样式副作用。

### 设计指南：高频任务
- 链接：
  - https://tdesign.tencent.com/design/offices-task
- 要点：筛选/表格批量/预览/指引/导入与流转等模式选择。

### Vue Next 概览与更多资源
- 链接：
  - https://tdesign.tencent.com/vue-next/overview
- 常用入口：
  - 组件本地站点：`pnpm run dev:vue` → `http://127.0.0.1:17000/vue-next/`
  - 组件页示例：`/vue-next/components/button`
  - 单例调试：`/vue-next/demos/button/base`

### 站内互链
- 生态总览页：`/ecosystem/`（与本页内容相互补充，避免重复）。

> 说明：以上链接与 Vue3 组件开发高度相关；仅保留关键入口，避免过度堆砌。

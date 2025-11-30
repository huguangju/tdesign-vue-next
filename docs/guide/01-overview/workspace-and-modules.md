## 目标

- 快速理解 Monorepo 工作区与 `tdesign-vue-next` 的模块产物与入口。

## 关键路径

- 工作区根：`package.json`（Node>=18、文档脚本） `tdesign-vue-next/package.json:14`、`package.json:31-33`
- 组件包产物：`packages/tdesign-vue-next/package.json:13-17`（CJS/ESM/Typings/UMD）
- 副作用标识：`packages/tdesign-vue-next/package.json:30-37`（样式与打包副作用）

## 操作步骤

1. 查看组件包入口：
   - `main=cjs/index-lib.js`
   - `module=es/index.mjs`
   - `typings=es/index.d.ts`
   - `unpkg/jsdelivr=dist/tdesign.min.js`
2. 了解包含目录：`files=[es, esm, cjs, lib, dist, helper, global.d.ts]`
3. 确认 `sideEffects` 用途：`.vue`、`dist/*` 与 `es/**/style/**` 保持副作用，利于按需样式引入与 tree-shaking 正确性。

## 验证

- 文档站点：`pnpm run docs:dev` → 侧边栏出现“工作区与模块产物总览”。
- 库构建：`pnpm run build:vue` → 输出包含 CJS/ESM/UMD，与入口对齐。

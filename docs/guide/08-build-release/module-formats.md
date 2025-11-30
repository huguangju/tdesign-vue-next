## 目标

- 明确 CJS/ESM/UMD 产物与使用场景，快速定位入口文件。

## 关键路径

- 入口映射：`packages/tdesign-vue-next/package.json:13-17`

## 模块格式与入口

- CommonJS（CJS）：`main=cjs/index-lib.js`，适配传统打包与 Node 环境。
- ES Modules（ESM）：`module=es/index.mjs`，利于 tree-shaking 与现代打包器。
- UMD/浏览器：`unpkg/jsdelivr=dist/tdesign.min.js`，CDN 直接引用（含 CSS）。
- Typings：`typings=es/index.d.ts`，IDE 类型提示与编译。

## 包含目录（files）

- `es/`、`esm/`、`cjs/`：不同模块格式的编译产物。
- `lib/`：逻辑产物（不含样式），与 `dist` 的 CSS 搭配使用。
- `dist/`：UMD 与 CSS 产物，适合直接浏览器引入。
- `helper/`、`global.d.ts`：IDE/类型相关辅助。

## 验证

- 构建库：`pnpm run build:vue`，确认产物与入口映射一致。

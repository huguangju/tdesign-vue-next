## 目标

- 解释 `sideEffects` 配置对样式与打包的影响，确保按需引入与摇树优化正确共存。

## 关键路径

- 配置位置：`packages/tdesign-vue-next/package.json:30-37`

## 说明

- 标记副作用的文件/目录：
  - `*.vue`：组件文件存在渲染副作用。
  - `dist/*`：UMD 产物与样式需保留。
  - `site/*`、`examples/*`：开发/示例相关文件。
  - `es/**/style/**`、`esm/**/style/**`：样式入口存在副作用，保证按需样式正常引入。

## 操作步骤

1. 在使用 ESM 按需引入组件时，确保样式入口被正确打包（副作用不被移除）。
2. 使用 CDN/UMD 时，搭配 `dist` 中 CSS 引入，避免样式缺失。

## 验证

- 构建并预览：`pnpm run docs:build`、`pnpm run docs:preview`，组件样式是否完整。

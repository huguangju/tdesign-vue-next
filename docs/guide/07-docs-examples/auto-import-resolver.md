## 目标

- 结合 `@tdesign-vue-next/auto-import-resolver` 与 unplugin 工具，减少手动引入组件与样式。

## 关键路径

- 包位置：`packages/auto-import-resolver`（构建脚本：根 `package.json:29`）。

## 使用示例

- Vite（`unplugin-vue-components`）：配置 Resolver 以自动引入组件，并保证样式按需加载。
- webpack 或其他构建：同理配置 `unplugin-auto-import` 与组件 Resolver。

## 操作步骤

1. 安装并配置相关 unplugin 插件与 Resolver。
2. 验证开发站点中组件无需手动 `import` 即可使用。
3. 样式副作用：结合 `sideEffects` 说明，确保样式被正确引入而不被摇树优化移除。

## 验证

- 文档站点或示例：新建页面引用若干组件，确认无需显式 `import` 且样式正常。

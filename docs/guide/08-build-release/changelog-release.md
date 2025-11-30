## Changelog 与发布

- 流程：`release/x.y.z` → PR → 合并 → 发布
- 工具：`script/generate-changelog.js`、`.github/workflows/*`
- 验证：生成 `CHANGELOG.md` 并完成 npm 发布

## 版本与产物对齐

- 当前包版本：`tdesign-vue-next@1.17.5`（`packages/tdesign-vue-next/package.json:3`）
- 发布 registry：`publishConfig.registry=https://registry.npmjs.org/`（`packages/tdesign-vue-next/package.json:38-40`）
- 引擎约束：Node>=18（`packages/tdesign-vue-next/package.json:51`）
- 入口与格式：参见 `guide/08-build-release/module-formats.md`

## 发布前核对清单

- Changelog 更新并覆盖关键变更与破坏性变更。
- 对齐入口与类型：`main/module/typings/unpkg/jsdelivr` 映射正确。
- `sideEffects` 与样式产物检查，保证按需样式可用。
- 文档与示例可运行：`pnpm docs:dev`、`pnpm dev:vue`。

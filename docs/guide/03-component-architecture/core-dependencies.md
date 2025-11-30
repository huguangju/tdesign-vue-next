## 目标

- 认识核心依赖的作用与典型使用面，便于按需引入与问题定位。

## 关键路径

- 依赖声明：`packages/tdesign-vue-next/package.json:55-69`

## 依赖与用途

- `dayjs`：日期/时间处理（选择器、格式化、区间比较）。
- `lodash-es`：通用工具函数（集合/对象/函数式工具），ESM 版本利于 tree-shaking。
- `mitt`：轻量事件总线（跨组件通信、全局消息总线）。
- `sortablejs`：拖拽排序（列表/表格行拖拽）。
- `tdesign-icons-vue-next`：图标库（900+ 图标，组件化使用）。
- `tinycolor2`：颜色运算（ColorPicker、主题生成）。
- `validator`：字符串/表单校验（Input、Form 规则校验）。
- `@babel/runtime`：辅助运行时（polyfill/语法支持，打包体积友好）。

## 操作步骤

1. 按需引入：优先使用组件封装后的 API，避免直接耦合底层库。
2. ESM 优先：使用 `lodash-es` 等 ESM 版本，保证更佳的 tree-shaking。
3. 校验与图标：图标与校验规则统一在组件层封装，避免业务重复配置。

## 验证

- 运行示例：`pnpm run dev:vue` → 在相关组件页验证依赖功能是否正常（如拖拽、日期选择）。

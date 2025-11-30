## 目标

- 将 Playground 联调内容沉淀到指南并适配 VitePress 结构
- 接入最小可用的 VitePress 配置与侧边栏（对齐 Vue 文档风格）
- 补充站点主题与首页（hero/feature 卡片 + 待办清单），统一侧边栏默认展开

## 目录结构与章节映射

- 指南入口：`docs/guide/index.md`
- 章节（01–12）：每目录 `index.md` + 子主题文件
- 顶层主页：`docs/index.md`（home 布局）
- 侧边栏映射 `/guide/` 下的 12 个章节分组，全部 `collapsed:false`

## 接入 VitePress 的配置文件

- `docs/.vitepress/config.ts`
  - 基本项：`lang/title/description/lastUpdated`
  - `themeConfig.nav`: 导航指向 `/guide/`
  - `themeConfig.sidebar`: 映射 12 个章节与子主题
  - `outline: 'deep'`
  - 为避免 ESM-only 报错，当前以默认对象导出（不使用 `defineConfig`）
- `docs/.vitepress/env.d.ts`
  - 引用 `vitepress/client` 类型以支持 TS 开发

## 主题与首页

- 主题入口：`docs/.vitepress/theme/index.ts` 引入默认主题与自定义样式
- 自定义样式：`docs/.vitepress/theme/custom.css`
  - 品牌色变量对齐 Vue 文档绿色系：
    - `--vp-c-brand-1: #42b883`
    - `--vp-c-brand-2: #33a06f`
    - `--vp-c-brand-3: #2c8f66`
- 首页：`docs/index.md`
  - frontmatter 使用 `layout: home`
  - hero 与 actions：指向指南与 Playground 联调
  - feature 卡片：列出 12 个章节入口
  - 待办清单：勾选已完成项，列出后续事项

## Playground 联调内容归档

- 文档：`docs/guide/02-run-build/playground.md`
  - 目的与收益：源码联调、快速验证
  - 步骤：包初始化、Vite 别名、样式入口、TS 路径与类型、入口与示例、运行命令
  - 排查：TS2307、样式未生效时的检查项
- 引用：
  - 在 `docs/guide/02-run-build/index.md` 增加链接
  - 在 `docs/guide/09-practices/index.md` 引导先使用 Playground 再做练习

## 操作步骤（一次性执行）

1. 创建/更新指南章节：`docs/guide/01–12` 的目录与子主题占位
2. 重命名指南入口：`docs/guide/tdesign-vue-next-learning.md` → `docs/guide/index.md`
3. 创建 VitePress 配置：`docs/.vitepress/config.ts` 与 `env.d.ts`
4. 创建主题与样式：`docs/.vitepress/theme/index.ts` 与 `custom.css`
5. 改造首页：`docs/index.md` 使用 `home` 布局并填充 hero/features/todo
6. 修复 Markdownlint MD032：列表与上下文之间插入空行

## 验证

- 开发预览：
  - `pnpm docs:dev` → 访问 `http://localhost:5173/`
  - 首页显示 hero/feature 卡片，链接跳转正确
  - 左侧侧栏分组默认展开，样式按品牌色生效
- 构建与预览：
  - `pnpm docs:build` → 产物输出到 `docs/.vitepress/dist`
  - `pnpm docs:preview` 本地预览生产版本

## 附录：脚本与依赖

- 安装：`pnpm -w add -D vitepress`
- 脚本（根 `package.json`）：
  - `docs:dev`: `vitepress dev docs`
  - `docs:build`: `vitepress build docs`
  - `docs:preview`: `vitepress preview docs`

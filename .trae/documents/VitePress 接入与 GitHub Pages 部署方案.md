# VitePress 接入与 GitHub Pages 部署方案

## 目标

- 使用当前仓库的 GitHub Pages 自动部署 VitePress 文档，访问路径 `https://huguangju.github.io/tdesign-vue-next/`
- 按独立项目站点模式：无需跨仓库写入博客主站，仅设置 `base` 与工作流
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
  - 部署到 GitHub Pages 时，设置基础路径：`base: '/tdesign-vue-next/'`
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
5. 改造首页：`docs/index.md` 使用 `home` 布局并填充 hero/features/todo`
6. 修复 Markdownlint MD032：列表与上下文之间插入空行

## GitHub Pages 部署

### 将进行的修改

- VitePress 基础路径：更新 `docs/.vitepress/config.ts`，新增 `base: '/tdesign-vue-next/'`
- GitHub Actions 工作流：新增 `/.github/workflows/docs-deploy.yml`
- 触发：
  - `push` 到 `learning` 与 `main` 分支
  - `workflow_dispatch` 手动触发
- 权限：`contents: read`、`pages: write`、`id-token: write`
- 任务：
  - build：checkout → setup pnpm/node → `pnpm i -w` → `pnpm docs:build` → 上传构建产物 `docs/.vitepress/dist`
  - deploy：使用 `actions/deploy-pages` 部署到 GitHub Pages

### 仓库设置

- 在仓库 Settings → Pages：选择 “Use GitHub Actions” 作为发布来源

### 工作流内容（新增文件）

```yaml
name: Deploy Docs

on:
  push:
    branches: [learning, main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup PNPM
        uses: pnpm/action-setup@v2
        with:
          version: 9

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'

      - name: Install
        run: pnpm i -w --frozen-lockfile

      - name: Build VitePress
        run: pnpm docs:build

      - name: Upload Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    runs-on: ubuntu-latest
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 验证

- 开发预览：`pnpm docs:dev` → 访问 `http://localhost:5173/`
- 构建与预览：`pnpm docs:build` 输出到 `docs/.vitepress/dist`；`pnpm docs:preview` 本地预览生产版本
- 推送验证：提交到 `learning` 分支，检查 Actions 流水线是否成功；确认 Pages URL 指向 `https://huguangju.github.io/tdesign-vue-next/`

## 附录：脚本与依赖

- 安装：`pnpm -w add -D vitepress`
- 脚本（根 `package.json`）：
  - `docs:dev`: `vitepress dev docs`
  - `docs:build`: `vitepress build docs`
  - `docs:preview`: `vitepress preview docs`


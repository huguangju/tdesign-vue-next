## 变更目标

- 使用当前仓库的 GitHub Pages 自动部署 VitePress 文档，访问路径 `https://huguangju.github.io/tdesign-vue-next/`
- 按独立项目站点模式：无需跨仓库写入博客主站，仅设置 `base` 与工作流

## 将进行的修改

1) VitePress 基础路径

- 更新 `docs/.vitepress/config.ts`：新增 `base: '/tdesign-vue-next/'`

2) GitHub Actions 工作流

- 新增 `/.github/workflows/docs-deploy.yml`
- 触发：
  - `push` 到 `learning` 与 `main` 分支
  - `workflow_dispatch` 手动触发
- 权限：`contents: read`、`pages: write`、`id-token: write`
- 任务：
  - build：checkout → setup pnpm/node → `pnpm i -w` → `pnpm docs:build` → 上传构建产物 `docs/.vitepress/dist`
  - deploy：使用 `actions/deploy-pages` 部署到 GitHub Pages

3) 仓库设置

- 在仓库 Settings → Pages：选择 “Use GitHub Actions” 作为发布来源

## 工作流内容（新增文件）

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

## 验证步骤

- 本地：`pnpm docs:build` 与 `pnpm docs:preview` 验证构建产物
- 推送：提交到 `learning` 分支，检查 Actions 流水线是否成功；确认 Pages URL 指向 `https://huguangju.github.io/tdesign-vue-next/`

若确认，我将：

- 更新 `docs/.vitepress/config.ts` 的 `base`
- 新增 `/.github/workflows/docs-deploy.yml` 文件，并推送测试一次工作流（你可在 Settings → Pages 开启 Actions 发布）

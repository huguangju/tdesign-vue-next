import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
// 使用工作目录避免 __dirname 在 ESM 中的解析问题
const componentsRoot = resolve(process.cwd(), '../components');
const commonStyleRoot = resolve(process.cwd(), '../common/style');

export default defineConfig({
  server: {
    port: 17002,
    host: '0.0.0.0',
    open: true,
  },
  resolve: {
    alias: {
      'tdesign-vue-next': componentsRoot,
      '@tdesign/components': componentsRoot,
      '@tdesign/common-style': commonStyleRoot,
    },
  },
  plugins: [vue(), vueJsx()],
});

import { createApp } from 'vue';
import TDesign from 'tdesign-vue-next';
import App from './App.vue';
import '@tdesign/components/style/index.js';
import '@tdesign/common-style/web/_global.less';
import '@tdesign/common-style/web/theme/_index.less';

createApp(App).use(TDesign).mount('#app');

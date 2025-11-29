<template>
  <div class="app">
    <section class="row">
      <t-button theme="primary" :on-click="onClick">Primary Button</t-button>
      <t-button variant="outline">Outline</t-button>
      <t-button :loading="loading" @click="toggleLoading">Loading</t-button>
    </section>

    <section class="row">
      <t-input v-model="text" placeholder="请输入" clearable />
      <t-select v-model="selectValue" :options="options" filterable :popup-props="{ overlayClassName: 'pg-select' }" />
    </section>

    <section class="row">
      <t-tabs :value="tab" :on-change="(v: string) => (tab = v)">
        <t-tab-panel value="tab1" label="选项一">面板一内容</t-tab-panel>
        <t-tab-panel value="tab2" label="选项二">面板二内容</t-tab-panel>
      </t-tabs>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(false);
const text = ref('');
const tab = ref('tab1');
const selectValue = ref<string | number>('');
const options = [
  { label: '北京', value: 'bj' },
  { label: '上海', value: 'sh' },
  { label: '深圳', value: 'sz' },
];

function toggleLoading() {
  loading.value = !loading.value;
}

function onClick() {
  // 演示事件触发
  console.info('Button clicked');
}
</script>

<style scoped>
.app {
  padding: 24px;
}
.row {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 24px;
}
</style>

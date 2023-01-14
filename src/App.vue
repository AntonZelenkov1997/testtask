<script setup lang="ts">
import { ref } from 'vue';
import AirList from '@/components/AirList.vue';
import AirContent from '@/components/AirContent.vue';
import airData from './data/airData';

import { ProductKeys } from './components/types';
import type { ProductDefaultAttribute } from './components/types';

const data = ref(airData);
const selectedAirItem = ref();

const addAirItem = (value: ProductKeys) => {
  const defaultFields: ProductDefaultAttribute = {
    code: 'new code',
    name: 'new field'
  };

  switch (value) {
    case ProductKeys.color: {
      selectedAirItem.value?.attributes.push({
        ...defaultFields,
        [ProductKeys.color]: 'color'
      });
      return;
    }
    case ProductKeys.size: {
      selectedAirItem.value?.attributes.push({
        ...defaultFields,
        [ProductKeys.size]: {
          width: 0,
          height: 0
        }
      });
      return;
    }
    case ProductKeys.weight: {
      selectedAirItem.value?.attributes.push({
        ...defaultFields,
        [ProductKeys.weight]: 0
      });
      return;
    }
    default: {
      return null;
    }
  }
};
</script>

<template>
  <div class="app">
    <AirList
      :items="data"
      class="app__sidebar"
      @click="(item) => (selectedAirItem = item)"
    />
    <AirContent
      v-if="selectedAirItem"
      :item="selectedAirItem"
      @click="addAirItem"
    />
  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  gap: 20px;

  &__sidebar {
    width: auto;
  }
}
</style>

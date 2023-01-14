<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Product } from './types';
import { ProductKeys } from './types';

import { isColorProduct, isSizeProduct, isWeightProduct } from './typeGuards';

defineProps<{
  item: Product;
}>();

const emit = defineEmits(['click']);

const selectRef = ref<HTMLSelectElement>();

const addAirItem = (value: HTMLSelectElement['value'] | undefined) => {
  if (value) emit('click', value as ProductKeys);
};

const Keys = computed(() => ProductKeys);
</script>

<template>
  <div class="air-content">
    <span class="air-content__header"> {{ item.name }}</span>

    <div
      class="air-content__detail"
      v-for="attr in item.attributes"
      :key="attr.code"
    >
      <div class="air-content__field">
        <span class="title">code:</span>
        <input :value="attr.code" />
      </div>

      <div class="air-content__field">
        <span class="title">name:</span>
        <input :value="attr.name" />
      </div>

      <div v-if="isColorProduct(attr)" class="air-content__field">
        <span class="title">{{ Keys.color }}:</span>
        <input :value="attr.color" />
      </div>

      <div v-if="isSizeProduct(attr)" class="air-content__field">
        <span class="title">{{ Keys.size }}:</span>
        <span>
          <input :value="attr.size.width" type="number" /> x
          <input :value="attr.size.height" type="number" />
        </span>
      </div>

      <div v-if="isWeightProduct(attr)" class="air-content__field">
        <span class="title">{{ Keys.weight }}:</span>
        <input :value="attr.weight" type="number" />
      </div>
    </div>

    <div class="air-content__add-field">
      <label>
        type
        <select ref="selectRef">
          <option :value="Keys.color">{{ Keys.color }}</option>
          <option :value="Keys.size">{{ Keys.size }}</option>
          <option :value="Keys.weight">{{ Keys.weight }}</option>
        </select>
      </label>

      <button @click="addAirItem(selectRef?.value)">Add</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.air-content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;

  &__header,
  &__title {
    font-weight: bold;
  }

  &__detail {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__field {
    display: flex;
    gap: 5px;
  }

  &__add-field {
    display: flex;
    gap: 10px;
  }
}
</style>

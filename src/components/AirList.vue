<script setup lang="ts">
import { ref } from 'vue';
import type { Product } from './types';

defineProps<{
  items: Product[];
}>();

const emit = defineEmits(['click']);

const selectedItem = ref();

const onClick = (item: Product) => {
  selectedItem.value = item;
  emit('click', item);
};
</script>

<template>
  <div class="air-list">
    <span
      v-for="(item, i) in items"
      :key="i"
      class="air-list__item"
      :class="{ 'air-list__item_selected': item === selectedItem }"
      @click="onClick(item)"
    >
      {{ item.name }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.air-list {
  display: flex;
  flex-direction: column;
  border: 1px solid lightblue;

  &__item {
    padding: 10px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    min-width: 250px;

    &:hover {
      background-color: #f0f0ff;
    }

    &_selected {
      background-color: lightskyblue;
    }
  }
}
</style>

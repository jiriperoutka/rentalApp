<script setup lang="ts">
import CardItem from "../../components/CardItem.vue";

const { data: items, err } = useFetch("http://localhost:3001/items");
const { isDarkMode } = useDarkMode();
</script>

<template>
  <div :style="isDarkMode ? { backgroundColor: '#062F4F' } : null">
    <CardItem
      v-for="item in items"
      :key="item.id"
      :name="item.name"
      :author="item.author"
      :customer_name="item.customer_name"
      :customer_surename="item.customer_surename"
      :in_stock="item.in_stock"
      :id="item.id"
      :year="item.year"
      :sortiment_name="item.sortiment_name"
    />
  </div>
</template>

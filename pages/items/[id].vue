<script setup lang="ts">
const route = useRoute();
const paramsId = route.params.id;
const { data: test, err } = useFetch(`http://localhost:3001/items/${paramsId}`);
</script>

<template>
  <div>
    <div>Ahoj z detailu {{ test }}</div>
    <div>{{ test }}</div>
  </div>
</template>

<style></style>

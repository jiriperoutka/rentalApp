<script setup lang="ts">
const { data: items, error } = useAsyncData("items", async () => {
  let response;
  try {
    response = await $fetch(`http://localhost:3001/items`);
  } catch (e) {}
  return response;
});
</script>

<template>
  <div>
    <h1>Doporučení</h1>
    <div class="carousel-wrapper">
      <section class="carousel-item" v-for="item in items" :key="item.id">
        <Recommended
          :imgURL="item.img"
          :rating="item.rating"
          :category_name="item.array_category"
          :name="item.name"
          :author="item.author"
          :year="item.year"
          :sortiment="item.sortiment_name"
          :description="item.description"
          :id="item.id"
        />
      </section>
      <Modal class="modal" />
    </div>
  </div>
</template>

<style scoped>
.modal {
}
.carousel-wrapper {
  width: 100vw;
  overflow: auto;
}
.carousel-item {
  display: inline-block;
  width: 100vw;
}
</style>

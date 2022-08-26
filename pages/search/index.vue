<script setup lang="ts">
const route = useRoute();

const test = ref(route.query.search ? route.query.search : ``);

const { data: dataItems, refresh, error } = useAsyncData(
  new Date().getMilliseconds().toString(),
  async () => {
    let response;
    try {
      console.log(test.value);
      response = await $fetch(`http://localhost:3001/items/search/${test.value}`);
    } catch (e) {}
    return response;
  }
);

watch(test, refresh());
</script>

<template>
  <div>
    <h2>Výsledky vyhledávání pro: {{ test }}</h2>
    <Search class="search" />
    <button>TEST</button>

    <section class="searched-items" v-for="item in dataItems" :key="item.id">
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
  </div>
</template>

<style scoped>
h2 {
  margin-top: 50px;
  font-size: x-large;
}
.searched-items {
  margin-top: 200px;
}
</style>

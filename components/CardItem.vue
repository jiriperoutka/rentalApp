<script setup lang="ts">
interface itemsProps {
  name: String;
  year: Number;
  author: String;
  in_stock: Boolean;
  sortiment_name: String;
  customer_name: String;
  customer_surename: String;
  id: Number;
}

const props = defineProps<itemsProps>();
const { isDarkMode } = useDarkMode();
</script>

<template>
  <div
    class="item-container"
    :style="isDarkMode ? { border: 'solid 2px #813772', color: 'white' } : null"
  >
    <div class="item-edit"><a :href="`/items/${id}`">Editovat</a></div>
    <div class="item-container-card">
      <div class="item-card-img-container">
        <div v-if="sortiment_name === 'Knihy'">
          <img class="item-card-img" src="../assets/Book_icon.svg" alt="" />
        </div>
        <div v-else-if="sortiment_name === 'CD'">
          <img class="item-card-img" src="../assets/CD_icon.svg" alt="" />
        </div>
        <div v-else>
          <img class="item-card-img" src="../assets/Muvie_icon.svg" alt="" />
        </div>
      </div>

      <div class="item-container-details">
        <h2>{{ name }}</h2>
        <h3>Rok{{ year }}</h3>
        <h3>{{ customer_name }} {{ customer_surename }}</h3>
      </div>
    </div>
    <div class="item-card-IsInStock item-card-InStock" v-if="in_stock === true">
      Vypůjčit
    </div>
    <div class="item-card-IsInStock item-card-IsOutStock" v-else>Vypůjčeno</div>
  </div>
</template>

<style scoped>
.item-container {
  margin-top: 1rem;
  border: 1px solid black;
  margin: 20px 30px 0px 30px;
}
.item-edit {
  margin-top: 1rem;
}

a {
  margin-left: 80vw;
  text-decoration: none;
  color: white;
  border: 1px solid black;
  background-color: cornflowerblue;
  border-radius: 5px;
}
.item-card-IsInStock {
  width: 250px;
  height: 50px;
  color: white;
  border-radius: 15px;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: 20px;
}
.item-card-IsOutStock {
  background-color: #b82601;
}
.item-card-InStock {
  background-color: #813772;
}
.item-container-card {
  display: flex;
}
</style>

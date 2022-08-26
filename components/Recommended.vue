<script setup lang="ts">
import useDarkMode from "../composables/useDarkMode";
import useModal from "../composables/useModal";
//const { data: categoryList } = useFetch("http://localhost:3001/category/list/items");

const { isDarkMode } = useDarkMode();
const { toggleModal } = useModal();

interface recomendedProps {
  imgURL: String;
  rating: Number;
  category_name: String[];
  name: String;
  author: String;
  year: String;
  sortiment: String;
  description: String;
  id: Number;
}

const props = defineProps<recomendedProps>();
</script>

<template>
  <div class="recommended-section-container">
    <section class="left-section-container">
      <img
        class="left-section-container-img"
        :src="`http://localhost:3001/${imgURL}`"
        alt=""
      />
      <div class="left-section-container-rating">
        <img v-if="rating === 5" src="../assets/rating5.svg" alt="" />
        <img v-else-if="rating === 4" src="../assets/rating4.svg" alt="" />
        <img v-else-if="rating === 3" src="../assets/rating3.svg" alt="" />
        <img v-else-if="rating === 2" src="../assets/rating2.svg" alt="" />
        <img v-else-if="rating === 1" src="../assets/rating1.svg" alt="" />
        <img v-else src="../assets/rating0.svg" alt="" />
      </div>
      <div class="left-section-container-types">
        <div class="left-section-container-types">
          <div
            class="left-section-container-types-type"
            v-for="(category, index) in category_name"
            :key="index"
          >
            {{ category }}
          </div>
        </div>
      </div>
    </section>
    <section
      class="right-section-container"
      :style="isDarkMode ? { color: 'white' } : null"
    >
      <h2>{{ name }}</h2>
      <h3>Režisér: {{ author }}</h3>
      <h3>Rok: {{ year }}</h3>
      <h3>Kategorie: {{ sortiment }}</h3>
      <h4 class="right-section-container-description">"{{ description }}"</h4>
      <button @click="toggleModal(id)" class="right-section-container-borrow">
        Vypůjčit
      </button>
    </section>
  </div>
</template>

<style scoped>
.right-section-container-description {
  border: 1px solid white;
  padding: 10px;
  width: 500px;
  display: inline-block;
}
h2 {
  position: relative;
}
h2::before {
  content: "";
  position: absolute;
  left: 7%;
  bottom: 0px;
  width: 150px;
  height: 14px;
  transform: skew(-12deg) translateX(-50%);
  background: rgba(238, 111, 87, 0.5);
  z-index: -1;
}
.right-section-container-borrow {
  width: 150px;
  height: 50px;
  background-color: #813772;
  border-radius: 25px;
  color: white;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-left: 70%;
  font-size: x-large;
}
.recommended-section-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}
.left-section-container-img {
  height: 300px;
  margin-top: 20px;
}
.left-section-container-types {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
}
.left-section-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  padding-right: 10%;
}
.left-section-container-types-type {
  width: 80px;
  height: 25px;
  background-color: #813772;
  border-radius: 15px;
  color: white;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-left: 10px;
}
.left-section-container-rating {
  margin-top: 10px;
}
</style>

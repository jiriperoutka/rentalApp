<script setup lang="ts">
import useDarkMode from "../composables/useDarkMode";

const { isDarkMode } = useDarkMode();
</script>

<template>
  <body>
    <div
      class="body"
      :style="isDarkMode ? { backgroundColor: '#062F4F', color: 'white' } : null"
    >
      <Search />
      <div class="Home">
        <!-- <img clas="main-img" src="../assets/main_pic.jpg" alt="" /> -->
      </div>
      <div class="selection-section">
        <NuxtLink to="/items/search/knihy"
          ><img class="selection-section-item" src="../assets/Book_icon.svg" alt=""
        /></NuxtLink>
        <NuxtLink to="/items/search/cd"
          ><img class="selection-section-item" src="../assets/CD_icon.svg" alt=""
        /></NuxtLink>
        <NuxtLink to="/items/search/dvd"
          ><img class="selection-section-item" src="../assets/Muvie_icon.svg" alt=""
        /></NuxtLink>
      </div>
      <Carusel class="carusel" />
    </div>
  </body>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: white;
  color: black;
}
.selection-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: -25vh;
}
.selection-section-item {
  width: 150px;
}
.Home {
  background-image: url("../assets/main_pic.jpg");
  width: 100vw;
  height: 80vh;
}
.carusel {
  margin-top: 100px;
}
</style>

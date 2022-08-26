<script setup lang="ts">
import useDarkMode from "../composables/useDarkMode";

const { isDarkMode } = useDarkMode();
</script>

<template>
  <nav :style="isDarkMode ? { backgroundColor: 'black' } : null">
    <div class="nav-img">
      <NuxtLink to="/"><img src="../assets/RentalAppLogo.svg" alt="" /></NuxtLink>
    </div>
    <div class="nav-menu-container">
      <NuxtLink class="links" to="/items">Items</NuxtLink>
      <NuxtLink class="links" to="/orders">Vypůjčky</NuxtLink>
      <DarModeSwich />
    </div>
  </nav>
</template>

<style scoped>
.nav-menu-container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
}
nav {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  background-color: cornflowerblue;
  color: white;
}
.links {
  color: white;
  margin-right: 20px;
  text-decoration: none;
}
</style>

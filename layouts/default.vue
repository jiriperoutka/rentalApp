<script setup lang="ts">
import useDarkMode from "../composables/useDarkMode";

const { isDarkMode } = useDarkMode();
</script>

<template>
  <body :style="isDarkMode ? { backgroundColor: '#062F4F', color: 'white' } : null">
    <div>
      <Nav />
      <slot />
    </div>
  </body>
</template>

<style>
body {
  background-color: white;
}
</style>

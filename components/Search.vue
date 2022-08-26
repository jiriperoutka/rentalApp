<script setup>
let input = ref("");

const emit = defineEmits(["test_"]);

function searchItem() {
  emit("remove");
  return navigateTo({
    path: "/search",
    query: {
      search: input.value,
    },
  });
}
</script>

<template>
  <div class="input-wrapper">
    <input
      type="text"
      v-model="input"
      placeholder="Zadejte hledný výraz..."
      @keyup.enter="searchItem"
    />
  </div>
</template>

<style scoped>
.input-wrapper {
  position: absolute;
  left: 25vw;
  top: 25vh;
}

input {
  width: 50vw;
  height: 40px;
  background-color: white;
  border: 2px solid #813772;
  border-radius: 40px;
  color: black;
  padding-left: 50px;
  background-image: url("../assets/lupa_icon.svg");
  background-repeat: no-repeat;
  padding-left: 40px;
}
</style>

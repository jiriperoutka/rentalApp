<script setup lang="ts">
import useModal from "../composables/useModal";

const { isActive } = useModal();

const { data: customers } = useFetch("http://localhost:3001/customer");
const customerID = ref();

async function updateItem(id, customerID) {
  const updatedObject = {
    customer_id: customerID,
    in_stock: false,
  };
  await $fetch(`http://localhost:3001/items/${id}`, {
    method: "PUT",
    body: updatedObject,
  });
}
</script>

<template>
  <div class="modal-div" v-show="isActive">
    <div>x</div>
    <div class="modal-div-container">
      <h2>Vyberte jméno osoby která si položku vypůjčí</h2>
      <select v-model="customerID">
        <option disabled value="">Please select one</option>
        <option
          v-for="customer in customers"
          :key="customer.id"
          :customerID="customer.id"
          :value="customer.id"
        >
          {{ customer.name }} {{ customer.surename }}
        </option>
      </select>
      <button @click="updateItem(id, customerID)">Potvrdit volbu</button>
    </div>
  </div>
</template>

<style scoped>
h2 {
}
button {
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
  margin-left: 40%;
  font-size: x-large;
}
.modal-div {
  border: solid 1px black;
  width: 300px;
  height: 200px;
}
.modal-div-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
</style>

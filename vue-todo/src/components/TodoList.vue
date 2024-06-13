<script setup lang="ts">
import { ref } from 'vue'
import { useItemStores } from '../stores/itemStore.ts'
defineProps<{
  msg: string
}>()

const { items, addItem, deleteItem, updateItem } = useItemStores()

let addText = ref('')

const createNewItem = (name: string) => {
  addItem(name)
  addText.value = ''
}

</script>

<template>
  <div class="container">
    <h2>{{ msg }}</h2>
    <div class="listItem" v-for="(item, index) in items" :key="item.id">
      <span class="itemDetails">{{ item.name }}</span>
      <span class="itemDetails">{{ index }}</span>
      <div v-on:click="deleteItem(index)" class="listButton">Delete</div>
      <div v-on:click="updateItem(index, 'newName')" class="listButton">Update</div>
    </div>
    <div>
      <span>Name: </span>
      <input v-model="addText" />
    </div>
    <div class="addBtn" v-on:click="createNewItem(addText)">
      <h2>Add</h2>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.listItem {
  padding: 5px;
  display: flex;
  justify-content: space-evenly;
  border: 2px solid ghostwhite;
  width: 30vw;
}

.itemDetails {
  width: 10vw;
}

.listButton {
  padding: 5px;
  background-color: gray;
  color: black;
  border-radius: 50px;
}

.addBtn {
  padding: 5px;
  margin-top: 10px;
  background-color: gray;
  color: black;
  border-radius: 10px;
  width: 5vw;
  text-align: center;
}
</style>

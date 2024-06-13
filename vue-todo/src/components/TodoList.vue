<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
  msg: string
}>()

const test = ref([
  { id: 1, name: 'item 1' },
  { id: 2, name: 'item 2' },
  { id: 3, name: 'item 3' }
])

const addText = ref('')
const addThenReset = () => {
  test.value.push({ name: addText.value })
  addText.value = ''
}
</script>

<template>
  <div class="container">
    <h2>{{ msg }}</h2>
    <div class="listItem" v-for="(item, index) in test" :key="item.id">
      <span>{{ item.name }}</span>
      <span>{{ index }}</span>
      <div v-on:click="test.splice(index, 1)" class="listButton">Delete</div>
    </div>
    <div>
      <span>Name: </span>
      <input v-model="addText" />
    </div>
    <div class="addBtn" v-on:click="addThenReset">
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

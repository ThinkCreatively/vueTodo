<script setup lang="ts">
import { ref } from 'vue'
import { useItemStores } from '../stores/itemStore'
defineProps<{
  msg: string
}>()

const { items, addItem, deleteItem, updateItem } = useItemStores()

let addText = ref('')
let canUpdate = ref(false)
let updateText = ref('')

const createNewItem = (name: string) => {
  addItem(name)
  addText.value = ''
}

const setUpdateTrue = () => {
  canUpdate.value = true
}

const actuallyUpdate = (index: number, updatedName: string) => {
  updateItem(index, updatedName)
  updateText.value = ''
  canUpdate.value = false
}
</script>

<template>
  <div class="container">
    <h2>{{ msg }}</h2>
    <div class="listItem" v-for="(item, index) in items" :key="item.id">
      <span class="itemDetails" v-if="!canUpdate">{{ item.name }}</span>
      <input v-if="canUpdate" v-model="updateText" />
      <span class="itemDetails">{{ index }}</span>
      <div class="listButton" v-on:click="deleteItem(index)">Delete</div>
      <div class="listButton" v-if="!canUpdate" v-on:click="setUpdateTrue">Update</div>
      <div class="listButton" v-if="canUpdate" v-on:click="actuallyUpdate(index, updateText)">
        Confirm
      </div>
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
  cursor: pointer;
}
</style>

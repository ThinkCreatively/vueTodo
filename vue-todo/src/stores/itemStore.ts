import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useItemStores = defineStore('items', () => {
  const items = ref([
    { id: 1, name: 'item 1' },
    { id: 2, name: 'item 2' },
    { id: 3, name: 'item 3' }
  ])

  let idCounter = items.value.length - 1

  const addItem = (name: string) => {
    items.value.push({ id: idCounter, name: name })
    idCounter++
  }

  const deleteItem = (index: number) => {
    items.value.splice(index, 1)
  }

  const updateItem = (index: number, newName: string) => {
    items.value[index].name = newName
  }

  return { items, addItem, deleteItem, updateItem }
})

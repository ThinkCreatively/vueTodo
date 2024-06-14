<script setup lang="ts">
import { useCounterStore } from './stores/counter'
import TodoList from './components/TodoList.vue'
import imageSection from './components/imageSection.vue'

const store = useCounterStore()
const increment = () => {
  store.increment()
}
</script>

<template>
  <header class="test">
    <h2>This is my Vue Todo App</h2>
    <h3>All for learning purposes</h3>
    <div style="margin-top: 5vw">Testing State with Pinia, current count: {{ store.count }}</div>
    <div class="counterBtn" v-on:click="increment">Click me to increment counter</div>
  </header>
  <main>
    <TodoList msg="Things todo" />
  </main>
  <!-- <imageSection /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
}

main {
  width: 50vw;
}

.counterBtn {
  background-color: gray;
  color: black;
  border-radius: 20px;
  padding: 5px;
  margin-top: 5px;
  cursor: pointer;
}

.imageContainer {
  display: flex;
  justify-content: center;
  border: 2px solid red;
}

.test {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>

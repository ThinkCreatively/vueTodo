<script setup lang="ts">
import TodoList from './components/TodoList.vue'
import { useCounterStore } from './stores/counter.ts'

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
    <div v-on:click="increment">Click me to increment counter</div>
  </header>
  <main>
    <TodoList msg="Things todo" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

main {
  width: 50vw;
}

.test {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>

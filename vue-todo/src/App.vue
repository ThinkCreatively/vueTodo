<script setup lang="ts">
import TodoList from './components/TodoList.vue'
</script>

<template>
  <header class="test">
    <h2>This is my Vue Todo App</h2>
    <h3>All for learning purposes</h3>
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

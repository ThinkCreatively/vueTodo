<script setup>
import { ref, watchEffect } from 'vue'

let imageUrl = ref('')

const randomNumFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const getData = async () => {
  try {
    fetch('https://dog.ceo/api/breeds/image/random/12')
      .then((res) => res.json())
      .then((data) => {
        let randomNum = randomNumFromInterval(0, 11)
        imageUrl.value = data.message[randomNum]
      })
  } catch (err) {
    console.log('this is the error: ', err)
  }
}

watchEffect(async () => getData())
</script>

<template>
  <img class="image" :src="imageUrl" alt="Picture of Dog" />
</template>

<style scoped>
.image {
  height: 25vw;
  width: 25vw;
}
</style>

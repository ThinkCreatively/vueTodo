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
        let randomNum = randomNumFromInterval(0, 12)

        imageUrl.value = data.message[randomNum]
      })
      .then(() => console.log(imageUrl.value))
  } catch (err) {
    console.log('this is the error: ', err)
  }
}

watchEffect(async () => getData())
</script>

<template>
  <img :src="imageUrl" alt="Picture of Dog" />
</template>

<style scoped></style>

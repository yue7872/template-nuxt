<script setup lang="ts">
const sayHi = () => {
  useHi();
};
</script>
<template>
  <div mt-100px>
    <a h-60px cursor-pointer text-lightblue @click="sayHi">Hello</a>
  </div>
</template>

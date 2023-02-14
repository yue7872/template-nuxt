<script setup lang="ts">
const sayHi = () => {
  useHi();
};
</script>
<template>
  <div mt-100px>
    <a h-60px cursor-pointer text-lightblue hover-color-red select-none @click="sayHi">Hello</a>
  </div>
</template>

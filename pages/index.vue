<script setup lang="ts">
const route = useRoute();

definePageMeta({
  layout: "default",
  title: "首页",
});
useHead({
  title: `${route.meta.title} - index`,
});
</script>
<template>
  <div font-serif>
    <Hello></Hello>
  </div>
</template>

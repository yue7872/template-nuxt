<script setup lang='ts'>
const route = useRoute();

useHead({
  title: 'mynuxt',
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.png',
    },
  ],
  htmlAttrs: {
    lang: 'zh-cn',
  },
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
@import url(~/style/common.less);
</style>

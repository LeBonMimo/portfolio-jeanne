<template>
  <NuxtLink :to="'/' + id" class="sale-project">
    <div class="sale-project-img">
      <img :src="coverUrl" alt="cover des projets en vente">
    </div>
    <div class="sale-project-description">
      <h3>{{ title }}</h3>
      <p>{{ technique }}, {{ date }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  id: {
    id: String
  },

  title: {
    type: String
  },

  technique: {
    type: String
  },

  date: {
    type: String
  },

  coverUrl: {
    tye: String
  },
})
</script>

<style lang="scss" scoped>
  @use "@/assets/css/news.scss";
</style>
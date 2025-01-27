<template>
  <NuxtLink :to="'/' + id" class="project">
    <div class="project-img">
      <img :src="coverUrl" alt="cover 1">
    </div>
    <div class="project-description">
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
  @use "@/assets/css/projects.scss";
</style>
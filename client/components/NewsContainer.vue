<template>
  <div class="news-project">
    <div class="news-description">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({

  title: {
    type: String
  },

  description: {
    type: String
  },
})
</script>

<style lang="scss" scoped>
  @use "@/assets/css/news.scss";
</style>
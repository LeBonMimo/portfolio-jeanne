<template>
  <div class="project-item-container">
    <div class="project-item">
      <div class="project-item-cover">
        <div class="project-item-cover-inner">
          <img :src="imageUrl" :alt="imageAlt">
        </div>
      </div>
      <div class="project-item-text">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Description from './Description.vue';

defineProps({
  imageUrl: {
    image: String,
  },

  imageAlt: {
    image: String,
  },

  title:{
    title: String,
  },

  description: {
    description: String,
  },
})
</script>

<style lang="scss" scoped>
@use "@/assets/css/project-item.scss";
</style>
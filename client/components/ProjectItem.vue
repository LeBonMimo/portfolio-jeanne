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
        <a v-if="link != null" :href="link" target="_blank">Lien vers le site marchand</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Description from './Description.vue';

defineProps({
  imageUrl: {
    imageUrl: String,
  },

  imageAlt: {
    imageAlt: String,
    default: 'Dessin de Jeanne',
  },

  title:{
    title: String,
  },

  description: {
    description: String,
  },

  link: {
    link: String,
  },

  isSalable: {
    isSalable: Boolean,
  },
})
</script>

<style lang="scss" scoped>
@use "@/assets/css/project-item.scss";
</style>
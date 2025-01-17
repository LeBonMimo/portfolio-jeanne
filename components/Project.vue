<template>
  <NuxtLink :to="'/' + job.id" class="project">
    <div class="project-img">
      <img src="@/assets/images/Family_Trip.png" alt="cover 1">
    </div>
    <div class="project-description">
      <h3>Family Trip</h3>
      <p>Dessin, 2024</p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  job: {
    id: String,
    default: 'album1',
  }
})
</script>

<style lang="scss" scoped>
  @use "@/assets/css/projects.scss";
</style>
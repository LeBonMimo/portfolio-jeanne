<template>
  <div class="project-items">
    <div class="project-items-container">
      <div class="project-items-grid">
        <!-- <ProjectItem v-for="item in items" :key="item.id" :item="item" /> -->
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "@/assets/css/project-items.scss";
</style>
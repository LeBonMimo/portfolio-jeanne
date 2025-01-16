<template>
  <Navbar />

  <!-- output page content -->
  <div class="page-content">
    <slot />
  </div>
  
  <Footer />
</template>

<script setup>

</script>

<style lang="scss" scoped>
  @use "@/assets/css/layout.scss";
</style>
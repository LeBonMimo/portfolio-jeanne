<template>
  <footer>
    <NuxtLink to="/">
      <img src="@/assets/images/logo.svg" />
    </NuxtLink>
    <div class="social-links">
      <NuxtLink to="#">
        <Icon class="insta-icon" icon="ph:instagram-logo" width="32" color="#FFFFFF"/>
      </NuxtLink>
      <NuxtLink to="#">
        <Icon icon="ph:linkedin-logo" width="32" color="#FFFFFF"/>
      </NuxtLink>
    </div>
    <p>© 2025 - Tous droits réservés</p>
  </footer>
</template>

<script setup>
  import { Icon } from '@iconify/vue'
</script>

<style lang="scss" scoped>
  @use "@/assets/css/footer.scss";
</style>
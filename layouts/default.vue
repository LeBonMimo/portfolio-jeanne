<template>
  <div>
    <header class="nav-container">
      <nav class="navbar">
        <NuxtLink class="logo" to="/">
          <img src="@/assets/images/logo.svg" />
        </NuxtLink>
        <div class="menu">
          <button v-if="menuOpen" @click="showMobileMenu">
            <Icon  icon="ph:x" width="32" color="#FFFFFF"/>
          </button>
          <button v-else @click="showMobileMenu">
            <Icon icon="ph:list" width="32" color="#FFFFFF"/>
          </button>
          <ul :class="['menu-items', menuOpen ? 'menu-open' : ''] ">  
            <li><NuxtLink class="menu-link" to="/">Accueil</NuxtLink></li>
            <li><NuxtLink class="menu-link" to="#projects">Mes projets</NuxtLink></li>
            <li><NuxtLink class="menu-link" to="/about">Présentation</NuxtLink></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>

  <!-- output page content -->
  <div class="page-content">
    <slot />
  </div>
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

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const menuOpen = ref(false)

const showMobileMenu = () =>  {
  menuOpen.value = !menuOpen.value
}
</script>

<style lang="scss" scoped>
  @use "../assets/css/layout.scss";
</style>
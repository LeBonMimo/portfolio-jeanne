<template>
  <header class="nav-container">
    <nav class="navbar">
      <NuxtLink class="logo" to="/">
        <img src="@/assets/images/logo.svg" alt="logo Olalao Jeanne" />
      </NuxtLink>
      <div class="menu">
        <button v-if="menuOpen" @click="showMobileMenu">
          <Icon icon="ph:x" width="32" color="#FFFFFF" />
        </button>
        <button v-else @click="showMobileMenu">
          <Icon icon="ph:list" width="32" color="#FFFFFF" />
        </button>
        <ul :class="['menu-items', menuOpen ? 'menu-open' : ''] " @click="showMobileMenu">
          <li>
            <NuxtLink class="menu-link" to="/">Accueil</NuxtLink>
          </li>
          <li>
            <NuxtLink class="menu-link" to="#projects">Mes projets</NuxtLink>
          </li>
          <li>
            <NuxtLink class="menu-link" to="/about">Présentation</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const menuOpen = ref(false)

const showMobileMenu = () =>  {
  menuOpen.value = !menuOpen.value
}
</script>

<style lang="scss" scoped>
  @use "@/assets/css/navbar.scss";
</style>
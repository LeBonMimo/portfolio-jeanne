<template>
  <header class="header" role="banner">
    <nav id="nav" :class="['nav', menuOpen ? 'nav-open' : '']">
      <NuxtLink class="nav-logo" to="/">
        <img src="@/assets/images/logo.svg" alt="logo Olalao Jeanne" />
      </NuxtLink>
      <!-- ACTUAL NAVIGATION MENU -->

      <ul class="nav-menu" id="menu" tabindex="-1" aria-label="main navigation" hidden>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/" @click="toggleMenu"><span>Accueil</span></NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/#projects" @click="toggleMenu"><span>Mes projets</span></NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/about" @click="toggleMenu"><span>Présentation</span></NuxtLink>
        </li>
      </ul>

      <a href="#nav" class="nav-toggle" role="button" aria-expanded="false" aria-controls="menu">
        <svg class="menuicon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" @click="toggleMenu">
          <title>Toggle Menu</title>
          <g>
            <line class="menuicon-bar" x1="13" y1="16.5" x2="37" y2="16.5"/>
            <line class="menuicon-bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
            <line class="menuicon-bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
            <line class="menuicon-bar" x1="13" y1="32.5" x2="37" y2="32.5"/>
            <circle class="menuicon-circle" r="23" cx="25" cy="25" />
          </g>
        </svg>
      </a>
      
      <!-- ANIMATED BACKGROUND ELEMENT -->
      <div class="splash"></div>
      

      <!-- <div class="menu">
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
      </div> -->
    </nav>
  </header>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const menuOpen = ref(false)

const toggleMenu = () =>  {
  menuOpen.value = !menuOpen.value
}
</script>

<style lang="scss" scoped>
  @use "@/assets/css/navbar.scss";
</style>
<template>
  <header class="header" role="banner">
    <nav id="nav" :class="['nav', menuOpen ? 'nav-open' : '']">
      <NuxtLink class="nav-logo" to="/">
        <img :src="getImageUrl(navbar?.data.navbar.logo)" alt="logo Olalao Jeanne" />
      </NuxtLink>
      <!-- ACTUAL NAVIGATION MENU -->

      <ul class="nav-menu" id="menu" tabindex="-1" aria-label="main navigation" hidden>
        <li v-for="navLinks in navbar?.data.navbar.navItems" :key="navLinks.id" class="nav-item">
          <NuxtLink class="nav-link" :to="navLinks.url" @click="toggleMenu"><span>{{ navLinks.label }}</span></NuxtLink>
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
    </nav>
  </header>
</template>

<script setup>
import { Icon } from '@iconify/vue'


//Toggle menu
const menuOpen = ref(false)

const toggleMenu = () =>  {
  menuOpen.value = !menuOpen.value
}

//fetch data from strapi

import { useUtils } from '~/composables/utils'

const { find } = useStrapi();
const { getImageUrl } = useUtils();
const navbar = ref([]);
const loading = ref(true);
const error = ref(null);

const { data, pending, error: fetchError } = await useAsyncData('navbar', () => find('layout-page', { 
  populate: {
    "navbar":{
      populate: {
        "navItems":{
          populate: "*",
        },
        "logo":{
          fields: ["url", "alternativeText"],
        }
      }
    }
  },
}));

if (fetchError.value) {
  console.error('Erreur lors de la récupération de la navbar:', fetchError.value);
} else {
  navbar.value = data.value;
  loading.value = pending.value;
  error.value = fetchError.value;
}

</script>

<style lang="scss" scoped>
  @use "@/assets/css/navbar.scss";
</style>
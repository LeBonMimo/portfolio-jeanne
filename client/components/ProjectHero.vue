<template>
  <div class="project-hero">
    <div class="project-cover">
      <div class="project-cover-inner">
        <img :src="getImageUrl(project?.data.cover)" alt="cover 1">
      </div>
    </div>
    <div class="project-title-container">
    <NuxtLink v-if="project?.data.isSalable === true" class="return-link" to="/#news">
      <Icon icon="ph:arrow-left" width="32" color="#FFFFFF"/>
    </NuxtLink>
    <NuxtLink v-else class="return-link" to="/#projects">
      <Icon icon="ph:arrow-left" width="32" color="#FFFFFF"/>
    </NuxtLink>

      <div class="project-title">
        <h1>
          <span>{{ project?.data.title }}</span>
          <svg width="45" height="43" viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.9544 21.2011C10.1844 19.3487 11.3706 17.2095 12.0361 15.8889C12.9335 14.1082 13.7957 12.0718 14.767 10.5027C15.8026 8.82976 16.8217 6.9484 17.9114 5.47721C18.4138 4.79892 19.129 3.32239 19.6214 2.90422"
              stroke="currentColor" stroke-width="5" stroke-linecap="round" />
            <path
              d="M21.7385 33.1558C22.9539 31.4207 25.3899 29.9831 26.8188 29.0546C28.7456 27.8025 30.765 26.2698 32.6654 25.2775C34.6914 24.2196 36.8068 22.9404 38.7892 22.1201C39.7032 21.7419 41.2685 20.6859 42.0369 20.5651"
              stroke="currentColor" stroke-width="5" stroke-linecap="round" />
            <path
              d="M3 17.6484C3.14208 16.504 3.28416 15.3597 3.42623 14.2153C3.55464 13.181 4.34703 12.2138 4.48413 11.1096"
              stroke="currentColor" stroke-width="5" stroke-linecap="round" />
            <path
              d="M16.622 25.5457C17.5001 24.2637 18.3782 22.9817 19.2563 21.6997C20.05 20.541 21.2601 19.6429 22.1075 18.4058"
              stroke="currentColor" stroke-width="5" stroke-linecap="round" />
            <path
              d="M25.752 40.1879C26.1691 40.0717 26.6025 40.1971 27.0196 40.1099C27.3925 40.032 27.6788 39.7049 28.0648 39.6801C28.738 39.6369 29.3884 39.2785 30.0248 39.273"
              stroke="currentColor" stroke-width="5" stroke-linecap="round" />
          </svg>
        </h1>
        <p class="project-title-metadata">{{ project?.data.technique }}, <span>{{ project?.data.date }}</span></p>
        <p class="project-title-description">{{ project?.data.description }}</p>
      </div>
    </div>


  </div>
  <div class="project-banner">
    <div class="project-banner-content">
      <div>
        <p>{{ project?.data.title }}</p>
        <p>{{ project?.data.date }}</p>
        <p>{{ project?.data.technique }}</p>
        <p>{{ project?.data.title }}</p>
        <p>{{ project?.data.date }}</p>
        <p>{{ project?.data.technique }}</p>
        <p>{{ project?.data.title }}</p>
        <p>{{ project?.data.date }}</p>
        <p>{{ project?.data.technique }}</p>
        <p>{{ project?.data.title }}</p>
        <p>{{ project?.data.date }}</p>
        <p>{{ project?.data.technique }}</p>
        <p>{{ project?.data.title }}</p>
        <p>{{ project?.data.date }}</p>
        <p>{{ project?.data.technique }}</p>
      </div>
      <div>
        <p>{{ project?.data.title }}</p>
        <p>{{ project?.data.date }}</p>
        <p>{{ project?.data.technique }}</p>
        <p>{{ project?.data.title }}</p>
        <p>{{ project?.data.date }}</p>
        <p>{{ project?.data.technique }}</p>
        <p>{{ project?.data.title }}</p>
        <p>{{ project?.data.date }}</p>
        <p>{{ project?.data.technique }}</p>
        <p>{{ project?.data.title }}</p>
        <p>{{ project?.data.date }}</p>
        <p>{{ project?.data.technique }}</p>
        <p>{{ project?.data.title }}</p>
        <p>{{ project?.data.date }}</p>
        <p>{{ project?.data.technique }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { Icon } from '@iconify/vue'
  import { useUtils } from '~/composables/utils'

  const { getImageUrl } = useUtils();

  defineProps({
    project: {
      project: Object,
      required: true,
    }
  })
</script>

<style lang="scss" scoped>
  @use "@/assets/css/project-hero.scss";
</style>
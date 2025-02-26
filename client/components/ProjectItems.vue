<template>
  <div class="project-items">
    <div class="project-items-container">
      <div class="project-items-grid">
        <ProjectItem v-for="item in items?.data.project_items" :key="item.id" :title="item.title" :description="item.description" :imageUrl="getImageUrl(item.image)" :imageAlt="item.image.alternativeText" :isSalable="item.isSalable" :link="item.link"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUtils } from '~/composables/utils'

const { id } = useRoute().params;
const { findOne } = useStrapi();
const { getImageUrl } = useUtils();

const items = ref([]);
const loading = ref(true);
const error = ref(null);

const { data, pending, error: fetchError } = await useAsyncData(`project-items`, () => 
  findOne('projects', id, {
    populate: {
      project_items: { // Populer la relation projectItems
        populate: '*', // Récupérer toutes les caractéristiques des projectItems
      },
    },
  })
);

if (fetchError.value) {
  console.error('Erreur lors de la récupération du project:', fetchError.value);
} else {
  items.value = data.value;
  loading.value = pending.value;
  error.value = fetchError.value;
}
</script>

<style lang="scss" scoped>
@use "@/assets/css/project-items.scss";
</style>
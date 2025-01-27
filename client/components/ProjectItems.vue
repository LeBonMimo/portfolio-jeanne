<template>
  <div class="project-items">
    <div class="project-items-container">
      <div class="project-items-grid">
        <ProjectItem v-for="item in items?.data.project_items" :key="item.id" :title="item.title" :description="item.description" :imageUrl="getImageUrl(item)" :imageAlt="item.image.alternativeText" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const { findOne } = useStrapi();

const items = ref([]);
const loading = ref(true);
const error = ref(null);

const getImageUrl = (item) => {
  if (item.image?.url) {
    return useStrapiMedia(item.image.url);
  }
  return null;
};

const { data, pending, error: fetchError } = await useAsyncData(`project-${id}`, () => 
  findOne('projects', id, {
    populate: {
      project_items: { // Populer la relation projectItems
        populate: '*', // Récupérer toutes les caractéristiques des projectItems
      },
    },
  })
);

if (fetchError.value) {
  console.error('Erreur lors de la récupération des projects:', fetchError.value);
} else {
  items.value = data.value;
  loading.value = pending.value;
  error.value = fetchError.value;
}
</script>

<style lang="scss" scoped>
@use "@/assets/css/project-items.scss";
</style>
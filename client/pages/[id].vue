<template>
  <Head>
    <Title>Olalao Jeanne | {{ project?.data.title }}</Title>
  </Head>
  <ProjectHero/>
  <ProjectItems />
</template>

<script setup>
const { id } = useRoute().params;
const { findOne } = useStrapi();

const project = ref([]);
const loading = ref(true);
const error = ref(null);


const { data, pending, error: fetchError } = await useAsyncData
('projects', () => findOne('projects', id));

if (fetchError.value) {
  console.error('Erreur lors de la récupération des projects:', fetchError.value);
} else {
  project.value = data.value;
  loading.value = pending.value;
  error.value = fetchError.value;
}
</script>

<style lang="scss" scoped>
  // @use "~/assets/scss/main.scss";
</style>
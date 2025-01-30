<template>
  <div class="about">
    <Description :data="about?.data.blocks[0]"/>
    <ContactForm :data="about?.data.blocks[1]"/>
  </div>
</template>

<script setup>

const { find } = useStrapi();
const about = ref([]);
const loading = ref(true);
const error = ref(null);

const { data, pending, error: fetchError } = await useAsyncData('about', () => find('about-page', { 
  populate: {
    "blocks": {
      populate: "*",
    }
  }
}));

// const { data, pending, error: fetchError } = await useAsyncData('projects', () => find('projects', { populate: 'cover' }));

if (fetchError.value) {
  console.error('Erreur lors de la récupération des projects:', fetchError.value);
} else {
  about.value = data.value;
  loading.value = pending.value;
  error.value = fetchError.value;
}

const title = "Olalao Jeanne"

useHead({
  title: title.concat(' | ', about.value?.data.title),
})
</script>

<style scoped>

</style>
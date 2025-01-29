<template>
  <div class="about">
    <Description />
    <ContactForm />
  </div>
</template>

<script setup>
const { find } = useStrapi();
const about = ref([]);
const loading = ref(true);
const error = ref(null);

const { data, pending, error: fetchError } = await useAsyncData('about-page', () => find('about-page'));

if (fetchError.value) {
  console.error('Erreur lors de la récupération des projects:', fetchError.value);
} else {
  about.value = data.value;
  loading.value = pending.value;
  error.value = fetchError.value;
}

console.log(about.value?.data.title)

const title = "Olalao Jeanne";

useHead({
  title: title.concat(' | ', about.value?.data.title),
})
</script>

<style scoped>

</style>
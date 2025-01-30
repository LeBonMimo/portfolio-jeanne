<template>
  <footer>
    <NuxtLink to="/">
      <img :src="getImageUrl(footer?.data.footer.logo)" :alt="footer?.data.footer.logo.alternativeText"/>
    </NuxtLink>
    <div class="social-links">
      <NuxtLink target="_blank" v-for="footerLinks in footer?.data.footer.footerLinks" :key="footerLinks.id" :to="footerLinks.url" >
        <Icon :icon="'ph:' + footerLinks.label" width="32" color="#FFFFFF"/>
      </NuxtLink>
    </div>
    <p>{{ footer?.data.footer.copyright }}</p>
  </footer>
</template>

<script setup>
  import { Icon } from '@iconify/vue'
  import { useUtils } from '~/composables/utils'
  
  //fetch data from strapi

  const { find } = useStrapi();
  const { getImageUrl } = useUtils();
  const footer = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const { data, pending, error: fetchError } = await useAsyncData('footer', () => find('layout-page', { 
    populate: {
      "footer":{
        populate: {
          "footerLinks":{
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
    console.error('Erreur lors de la récupération du footer:', fetchError.value);
  } else {
    footer.value = data.value;
    loading.value = pending.value;
    error.value = fetchError.value;
  }
</script>

<style lang="scss" scoped>
  @use "@/assets/css/footer.scss";
</style>
<template>
  <div>
    <p>Album {{ id }}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, velit debitis? Incidunt, maiores doloremque quam beatae nihil iusto at? Odio.</p>
  </div>
</template>

<script setup>
   const { id } = useRoute().params
</script>

<style lang="scss" scoped>
  // @use "~/assets/scss/main.scss";
</style>
<template>
  <div class="album-items">
    <div class="album-items-container">
      <div class="album-items-grid">
        <!-- <AlbumItem v-for="item in items" :key="item.id" :item="item" /> -->
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "@/assets/css/album-items.scss";
</style>
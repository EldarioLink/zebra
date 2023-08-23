<script setup lang="ts">
import logo from '@/assets/img.jpg'
const image = logo
</script>

<template>
  <v-container class="pa-0 wallpaper" fluid>
    <v-img :src="image">
      <v-container class="h-100 pa-0 d-flex flex-column-reverse">
        <v-container class="pa-0 mb-4">
          <span class="wallpaper__title">Новости</span>
        </v-container>
      </v-container>
    </v-img>
  </v-container>
</template>

<style scoped lang="scss">
.wallpaper {
  color: #17171a;

  &__title {
    font-family: 'Nunito', sans-serif;
    font-size: 40px;
    margin-right: 0;
    margin: 40px 0 10px;
    letter-spacing: 2px;
    line-height: 48px;
    font-weight: 700;
    letter-spacing: -1%;
    opacity: 0.9;
  }
}
</style>

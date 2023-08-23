<script setup lang="ts">
import logo from '@/assets/logo.svg'
</script>

<template>
  <v-footer color="#F0F6FE" class="footer d-flex flex-column justify-center">
    <v-container class="pa-0">
      <v-img :src="logo" width="98" height="45"></v-img>
    </v-container>
    <v-container class="pa-0 d-flex justify-start footer__text mt-3">
      @ alpha, 2023
    </v-container>
  </v-footer>
</template>

<style scoped lang="scss">
.footer {
  font-family: 'Nunito', sans-serif;
  height: 200px;

  &__text {
    color: #81899d;
    font-size: 16px;
    font-weight: 400;
    opacity: 0.9;
    line-height: 22.4px;
  }
}
</style>

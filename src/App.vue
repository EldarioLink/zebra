<script setup lang="ts">
import appBar from '@/components/AppBar.vue'
import wallpaper from '@/components/MainWallpaper.vue'
import news from '@/components/NewsSection.vue'
import loadBtn from '@/components/CustomButton.vue'
import footerComponent from '@/components/CustomFooter.vue'
</script>

<template>
  <v-app>
    <appBar></appBar>
    <wallpaper></wallpaper>
    <news></news>
    <loadBtn></loadBtn>
    <footerComponent></footerComponent>
  </v-app>
</template>

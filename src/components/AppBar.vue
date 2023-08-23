<script setup lang="ts">
import logo from '@/assets/logo.svg'
const image = logo
</script>

<template>
  <v-toolbar color="white" height="100">
    <v-container class="pa-0">
      <v-img :src="image" width="98" height="45"></v-img>
    </v-container>
  </v-toolbar>
</template>

<script lang="ts" setup>
import { newsStore } from '@/store/cards'

//** */===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴Store
const store = newsStore()
</script>

<template>
  <v-container v-if="!store.loading" fluid class="pa-0 my-10 custom-btn">
    <v-row justify="center" class="ma-0">
      <v-btn
        @click="store.loadMoreNews()"
        variant="outlined"
        class="custom-btn__small"
      >
        Загрузить ещё
      </v-btn>
    </v-row>
  </v-container>
  <v-container v-else>
    <div class="text-center">
      <v-progress-circular
        :size="50"
        color="#002dbf"
        indeterminate
      ></v-progress-circular>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.custom-btn {
  color: #002dbf;

  &__small {
    font-family: 'Nunito', sans-serif;
    font-size: 10px;
    font-weight: 600;
    line-height: 160%;
    line-height: 24px;
    letter-spacing: -1%;
  }
}
</style>

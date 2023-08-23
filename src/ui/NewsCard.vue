<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(['card'])
</script>

<template>
  <v-card
    class="rounded-lg card mt-6"
    max-width="385"
    variant="outlined"
    color="#0F62FE"
  >
    <v-layout v-if="props.card.image">
      <v-img :src="props.card.image" aspect-ratio="2.5" cover></v-img>
    </v-layout>

    <v-container>
      <v-row no-gutters class="d-flex justify-start">
        <span class="card__date">{{ props.card.date.split(' ')[1] }}</span>

        <span class="card__subdate ml-1 d-flex flex-column justify-center">
          <span>{{ props.card.date.split(' ')[0] }}</span>
          <span>{{ props.card.date.split(' ')[2] }}</span>
        </span>
      </v-row>
      <v-row no-gutters class="card__title mt-2">
        {{ props.card.name }}
      </v-row>
      <v-row no-gutters class="card__small mt-3">
        {{ props.card.previewText }}
      </v-row>
    </v-container>
    <v-container class="card__actions">
      <v-btn class="card__btn" rounded="xl" size="x-small" variant="tonal">
        Новости
      </v-btn>
    </v-container>
  </v-card>
</template>

<style scoped lang="scss">
.card {
  font-family: 'Nunito', sans-serif;
  position: relative;
  padding-bottom: 50px;

  &__small {
    color: #17171a;
    font-size: 15px;
    font-weight: 400;
    opacity: 0.9;
    text-align: justify;
    line-height: 1.1rem;
  }
  &__title {
    color: #0f62fe;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.2rem;
  }

  &__date {
    color: #a1a7b5;
    font-weight: 400;
    font-size: 30px;
  }

  &__subdate {
    color: #a1a7b5;
    font-weight: 700;
    font-size: 12px;
    line-height: 16.5px;
    letter-spacing: -2%;
  }
  &__btn {
    background-color: #f0f6fe;
    color: #00133a;
    font-size: 10px;
    letter-spacing: 0.1em;
  }
  &__actions {
    position: absolute;
    bottom: 0;
  }
}
</style>

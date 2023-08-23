<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import newscard from '@/ui/NewsCard.vue'
import toast from '@/components/customToast.vue'
import { newsStore } from '@/store/cards'

import { useDisplay } from 'vuetify'

//*===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴Store
const store = newsStore()

//*===🌐===🌐===🌐===🌐===🌐===🌐===🌐===🌐===🌐===🌐===🌐===🌐Options

const { name } = useDisplay()

// added class for centeralize
const displayView = computed(() => {
  switch (name.value) {
    case 'xs':
      return false
    case 'md':
      return true
    case 'lg':
      return true
    case 'xl':
      return true
    case 'xxl':
      return true
  }

  return undefined
})

//*===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴Data
const snackbarText = ref(`Загрузка не удалась.Возможно нет данных!`)

//*===🦌===🦌===🦌===🦌===🦌===🦌===🦌===🦌===🦌===🦌===🦌===🦌Hooks
onMounted(async () => {
  store.loadNews(1)
})
</script>

<template>
  <v-container>
    <v-row
      class="d-flex"
      :class="[displayView ? 'justify-space-between ' : 'justify-center']"
    >
      <newscard
        v-for="item in store.allNews"
        :key="item.id"
        :card="item"
      ></newscard>
    </v-row>
    <toast v-model:snack="store.err" :text="snackbarText"></toast>
  </v-container>
</template>

<style></style>

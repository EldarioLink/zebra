<script setup lang="ts">
import { computed } from 'vue'

//*===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴===🌴Props

const props = defineProps(['snack', 'text'])

const emit = defineEmits(['update:snack'])

//*===🦌===🦌===🦌===🦌===🦌===🦌===🦌===🦌===🦌===🦌===🦌===🦌Data
const toastFlag = computed({
  get() {
    return props.snack
  },
  set() {
    emit('update:snack', false)
  }
})
</script>

<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="toastFlag">
      {{ props.text }}
      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="toastFlag = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

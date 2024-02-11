<script setup lang="ts">
import Personaje from '@/components/Personaje.vue';

defineProps({
  list: Object
})
const emit = defineEmits(['isMe'])

function isMe(personaje:Object){
  emit('isMe', personaje)
}
</script>

<template>
  <div class="grid flex align-items-center justify-content-start">
    <Personaje v-for="personaje in list" key="personaje.title">
      <img :src="personaje.image" alt="Image" width="250" height="250" @click="isMe(personaje)"/>
    </Personaje>
  </div>
</template>

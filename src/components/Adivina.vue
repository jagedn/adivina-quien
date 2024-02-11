<template>
    <Card>
      <template #title>{{current?.title}}</template>
      <template #content>
        <p class="m-0">
          {{current?.body}}
        </p>
      </template>
    </Card>
</template>

<style scoped>
</style>

<script setup lang="ts">
import Card from 'primevue/card';

defineProps({
  current:Object
})
</script>
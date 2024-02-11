<script setup lang="ts">
import Juego from '@/components/Juego.vue';
</script>

<template>
  <main>
      <div class="text-center p-3 border-round-sm bg-primary font-bold ">
        <Suspense>
          <template #fallback>
            <div>loading</div>
          </template>
          <Juego></Juego>
        </Suspense>
      </div>
  </main>
</template>

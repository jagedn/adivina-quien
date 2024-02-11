<script lang="ts" setup>
import {storeToRefs} from 'pinia'
import {useEfemeridesStore} from '@/stores/efemerides';
import { juegoStore } from '@/stores/juego';
import Adivina from '@/components/Adivina.vue';
import ListaPersonajes from '@/components/ListaPersonajes.vue';
import Marcador from '@/components/Marcador.vue';
import Flags from '@/components/Flags.vue';

const store = useEfemeridesStore()
const {current, efemerides} = storeToRefs(store)
const {fetchTodos} = store;

const juego = juegoStore();
const {aciertos, fallos} = storeToRefs(juego)
const {addCounter, reset} = juego;

function check(personaje:Object){
  addCounter(personaje.title == current?.value.title)
  if( aciertos.value + fallos.value > 5){
    if( aciertos.value > fallos.value){
      alert("Congratulations")
    }else{
      alert("Oooooo")
    }
    reset()
  }
  fetchTodos(3)
}

await fetchTodos(3)
</script>

<template>
  <main>
    <div class="text-center p-3 border-round-sm bg-primary font-bold ">
      <Flags></Flags>
      <Marcador :aciertos="aciertos" :fallos="fallos"></Marcador>
    </div>
    <div class="text-center p-3 border-round-sm bg-primary font-bold ">
      <Adivina :current="current">
      </Adivina>
    </div>
    <div class="text-center p-3 border-round-sm bg-primary font-bold ">
      <ListaPersonajes :list="efemerides" @is-me="check"></ListaPersonajes>
    </div>
  </main>
</template>
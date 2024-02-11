<template>

    <Panel>
      <SelectButton v-model="lang" :options="languages" option-label="icon" option-value="lang" aria-labelledby="basic" @change="langSelected"/>
    </Panel>

</template>
<script setup>
import {storeToRefs} from 'pinia'
import {useEfemeridesStore} from '@/stores/efemerides';

import Panel from 'primevue/panel';
import SelectButton from 'primevue/selectbutton';

const store = useEfemeridesStore()
const {languages, lang} = storeToRefs(store)
const {fetchTodos} = store;

async function langSelected(selected){
  await fetchTodos(3)
}

</script>
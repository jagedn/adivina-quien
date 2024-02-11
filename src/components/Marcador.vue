<template>
  <div class="card">
    <Toolbar>
      <template #center>
        <div class="flex flex-column md:flex-row">
          <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
            <div class="flex flex-wrap justify-content-center align-items-center gap-2">
              <Rating v-model="aciertos" :cancel="false" :stars="5" readonly>
                <template #onicon>
                  <img height="24" src="/images/happy.png" width="24"/>
                </template>
              </Rating>
            </div>
          </div>
          <div class="w-full md:w-2">
            <Divider layout="vertical" class="hidden md:flex"><b>VS</b></Divider>
            <Divider layout="horizontal" class="flex md:hidden" align="center"><b>VS</b></Divider>
          </div>
          <div class="w-full md:w-5 flex align-items-center justify-content-center py-5">
            <Rating v-model="fallos" :cancel="false" :stars="5" readonly>
              <template #onicon>
                <img height="24" src="/images/fail.png" width="24"/>
              </template>
            </Rating>
          </div>
        </div>
      </template>
    </Toolbar>
  </div>
</template>

<script setup>
import Toolbar from 'primevue/toolbar';
import Divider from 'primevue/divider';
import Rating from 'primevue/rating';

const aciertos = defineModel('aciertos')
const fallos = defineModel('fallos')

</script>

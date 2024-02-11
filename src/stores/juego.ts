import {defineStore} from 'pinia'
import {ref} from 'vue';

export const juegoStore =
    defineStore('juegoStore', () => {
        const aciertos = ref(0);
        const fallos = ref(0);

        const addCounter = (acierto : boolean)=> {
            if( acierto){
                aciertos.value++
            }else{
                fallos.value++
            }
        }

        const reset = ()=>{
            aciertos.value = fallos.value = 0;
        }

        return { aciertos, fallos, addCounter, reset}
    });

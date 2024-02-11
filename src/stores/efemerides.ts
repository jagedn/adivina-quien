import {defineStore} from 'pinia'
import type {Ref, UnwrapRef} from 'vue';
import {ref} from 'vue';

interface EfemerideItem {
    body: string
    title: string,
    image: string,
    year: number,
    month: number,
    date: number
}
export const useEfemeridesStore =
    defineStore('efemerideStore', () => {

        const current:Ref<UnwrapRef<EfemerideItem | null>> = ref(null as EfemerideItem | null);

        const efemerides:Ref<UnwrapRef<EfemerideItem>[]> = ref([] as EfemerideItem[])

        const languages = ref([
            {lang:'es', icon:'🇪🇸 es'},
            {lang:'en', icon:'🏴󠁧󠁢󠁥󠁮󠁧󠁿 en'},
            {lang:'arab', icon:'🇸🇦 arb'},
            {lang:'pt', icon:'🇵🇹 port'},
            {lang:'gal', icon:'🐙 gall'},
            {lang:'astu', icon:'🐮 astu'},
            {lang:'eus', icon:'🪨 eusk'},
            {lang:'cat', icon:'🌊 cat'},
            {lang:'arag', icon:'⛰️ arag'}
        ])

        const lang = ref('es')

        const fetchTodos = async (pick : number)=> {
            current.value = null
            efemerides.value = []
            const useLang = (lang.value || 'es').toString().toLowerCase()
            const promises = []
            for(let year=2021; year < 2025; year++) {
                const month = Math.floor(Math.random() * (12 - 1 + 1) + 1)
                let date = Math.floor(Math.random() * (31 - 1 + 1) + 1)
                const validate = Date.parse(`${year}-${month}-${date}`);
                if (!isNaN(validate)) {
                   date-=1
                }
                if( date < 1){
                    date = 1
                }
                if( promises.length < pick) {
                    promises.push(
                        fetch(`https://calendario-cientifico-escolar.gitlab.io/api/${useLang}/${year}/${month}/${date}.json`)
                            .then(response => response.json())
                            .then(data => efemerides.value.push(data))
                            //.catch(()=>fetchTodos(pick))
                    )
                }
            }
            await Promise.all(promises).then(()=>{
                current.value = efemerides.value[Math.floor(Math.random() * efemerides.value.length)]
            })
        };

        return {current, efemerides, fetchTodos, languages, lang}
    })
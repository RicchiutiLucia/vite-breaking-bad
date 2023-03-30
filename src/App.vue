<script>
import axios from 'axios';

import { store } from './store.js';


import AppHeader from './components/AppHeader.vue';
import CharactersList from './components/CharactersList.vue';
import Loading from './components/Loading.vue';
import AppSearch from './components/AppSearch.vue';
import CounterCard from './components/CounterCard.vue';


export default {
    components:{
     AppHeader,
     AppSearch,
     CounterCard,
     CharactersList,
     Loading
    },
    data(){
      return{
        store
      }
    },
    methods:{
      GetCard(){
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0')
        .then(response =>{
          this.store.charactersList = response.data.data;
          this.store.loading=false;
        })
      },
      GetCardArchetype(){
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
        .then(response =>{
          this.store.CardArchetype = response.data;
        })
      },
      SelectedArchetype(){
        if(store.search ==''){
          this.GetCard();
        }else{
          let urlApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
          
          urlApi +=`?archetype=${this.store.search}`;
          axios.get(urlApi)
          .then(response =>{
            this.store.charactersList = response.data.data;
        })
        }
      }
    },
    created(){
      this.GetCard();
      this.GetCardArchetype();
    }
  }
</script>

<template>
     <AppHeader></AppHeader>


     <AppSearch @doSearch="SelectedArchetype"></AppSearch>
     <main>

      <CounterCard></CounterCard>

      <CharactersList></CharactersList>

     </main>

     <Loading />
    
</template>

<style lang="scss">
  @use './styles/general.scss';
</style>

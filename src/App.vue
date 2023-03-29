<script>
 import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import CharactersList from './components/CharactersList.vue';
import Loading from './components/Loading.vue';
export default {
    components: {
      AppHeader,
      CharactersList,
      Loading
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getCharacters() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        .then(response => {
          this.store.charactersList = response.data.data;
          this.store.loading = false;
        });
      }
    },
    created() {
      this.getCharacters();
    }
  }
</script>

<template>
     <AppHeader></AppHeader>

     <main>
      <CharactersList></CharactersList>

     </main>

     <Loading />
    
</template>

<style lang="scss">
  @use './styles/general.scss';
</style>

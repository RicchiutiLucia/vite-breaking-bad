<script>
 import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import CharactersList from './components/CharactersList.vue';
export default {
    components: {
      AppHeader,
      CharactersList
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
    
</template>

<style lang="scss">
  @use './styles/general.scss';
</style>

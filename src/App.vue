<script>
 import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';


export default {
    components: {
      AppHeader,
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getCharacters() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician')
        .then(response => {
          this.store.charactersList = response.data.results;
        });
      }
    },
    created() {
      this.getCharacters();
    }
  }

</script>

<template>
     <AppHeader title="Yu-Gi-Oh Api"></AppHeader>
</template>

<style lang="scss">
  @use './styles/general.scss';
</style>

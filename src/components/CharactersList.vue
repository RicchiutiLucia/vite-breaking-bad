<script>
import {store} from '../store.js';
import OneCard from './OneCard.vue';
export default {
    name:'CharactersList',
    components:{
        OneCard
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
<div class="box" v-for="(card,index) in store.charactersList" :key="index">

    <OneCard 
        :image="card.card_images[0].image_url"
        :name="card.name"
        :spacies="card.archetype"
    />
</div>
</template>

<style lang="scss" scoped>
</style>
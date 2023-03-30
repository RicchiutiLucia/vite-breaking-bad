<script>
import { store } from '../store.js';

export default {
        name:'AppSearch',
        data(){
            return{
                store
            }
        }
    }

</script>


<template>

<div class="container">
    <select id="archetype" @change="$emit('doSearch')" v-model="store.search">
        <option v-for="(name,i) in store.CardArchetype" :key="i" :value="name.archetype_name">{{name.archetype_name}}</option>
    </select>

    </div>

</template>


<style lang="scss" scoped>

.container{
    width: 1300px;
    margin: 20px auto;
    
    #archetype{
        font-size: 20px;
    }
}
</style>
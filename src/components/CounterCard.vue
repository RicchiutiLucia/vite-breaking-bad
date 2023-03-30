<template>
    <div class="content">
        <span>{{message}}</span>
    </div>

</template>

<script>
import {store} from '../store.js';
    export default {
        name: 'CounterCard',
        data() {
            return {
                store
            }
        },
        computed: {
            message() {
                return `Hai trovato ${store.charactersList.length} risultati!`
            }
        }
    }
</script>


<style lang="scss" scoped>
.content{
    background-color: black;
    width: 100%;
    height: 50px;
    color: white;
    line-height: 50px;
    padding-left: 30px;
    span{
        font-weight: bolder;
    }
}

</style>
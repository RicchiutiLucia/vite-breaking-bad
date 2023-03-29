<script>
    export default {
        name:'OneCard',
        props:{
            image:String,
            name:String,
            spacies:String
        }
    }
</script>

<template>
  <div class="singleCard">
    <img :src="image" :alt="name">
    <h3>{{ name }}</h3>
    <h4>{{ spacies }}</h4>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.singleCard{
    width: 250px;
    background-color: $primary-color;
    height: 450px;
    text-align: center;
    margin: 20px;
    h3{
        color: $secondary-color;
    }
    img{
        width: 100%;
    }
}
</style>
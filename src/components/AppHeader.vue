<script>
    export default {
        name:'AppHeader'
    }
</script>

<template>
    <div>
        <img id="logo" src="logo.jpg" alt="">
        <h1>Yu-Gi-Oh Api</h1>
    </div>
</template>

<style lang="scss" scoped>
div{
    height: 80px;
    widows: 100vw;
    display: flex;
    align-items: center;
    background-color: white;
    
    #logo{
        height: 50px;
        padding: 0 10px;
    }
}
</style>
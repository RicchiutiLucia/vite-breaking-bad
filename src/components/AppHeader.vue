<template>
    <header>
    <div class="d-flex">
        <a>
            <img src="../../public/logo.png" width="70" alt="Yu-Gi-Oh">{{title}}
        </a>
    </div>
       
</header>

</template>

<script>
    export default {
        name: 'AppHeader',
        props: {
            title: String
        }
    }
</script>

<style scoped lang="scss">
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/general.scss' as *;
    .logo{
        color: $white;
        padding: 20px;
        font-size: 30px;
    }
    header{
    padding: 20px;
    height: 70px;
        a{
            font-size: 30px;
            text-decoration: none;
            vertical-align: middle;
        }
  }
</style>
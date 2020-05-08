<template>
    <div class="container">
        <Header></Header>
        <div class="blog">
            <p>Nothing to show!</p>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/partials/Header.vue'
import Footer from '@/components/partials/Footer.vue'
    export default {
        name: 'blog',
        components: {
            Header,
            Footer
        }
        
    }
</script>

<style scoped>

</style>
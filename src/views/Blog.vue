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
        name: 'Blog',
        components: {
            Header,
            Footer
        }
        
    }
</script>

<style scoped>
/* blog */
.blog {
    min-height: 100vh;
}
</style>
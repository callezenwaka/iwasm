<template>
    <div class="header">
        <header>
            <nav id="nav">
                <ul class="menu">
                    <!-- <del style="text-decoration-style: double;">Text with double strike through</del> -->
                    <!-- <li class="list_item main_logo"><a class="link_item" href="#">Quiz Center</a></li> -->
                    <li class="list_item"><router-link class="link_item logo" :to="{ name: 'Home' }"><span class="">&euro;</span></router-link></li>
                    <li class="list_item"><router-link class="link_item" :to="{ name: 'Home' }">Home</router-link></li>
                    <li class="list_item"><router-link class="link_item" :to="{ name: 'Research' }">Research</router-link></li>
                    <li class="list_item"><router-link class="link_item" :to="{ name: 'Contact' }">Contact</router-link></li>
                    <li class="list_item"><router-link class="link_item" :to="{ name: 'Blog' }">Blog</router-link></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="css" scoped>
header {
    background-color: #f2e9d2;
    /* position: relative; */
    text-align: center;
}
header.active {
    /* background-color: #834147; */
}
.logo {
    transform: rotate(180deg);
    
}
nav {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    /* transition: all 500ms linear; */
}
nav.active {
    /* transition: all 500ms linear; */
}
.list_item {
    display: inline-block;
    padding: 0;
    margin: 0;
}
.link_item {
    /* font-size: 0.7rem; */
    font-weight: 700;
    display: block;
    padding: 1.5rem 0.7rem;
    margin: 0;
    color: #000000;
    -webkit-transition: all 1s ease-out;
    transition: all 1s ease-out;
}
.link_item:hover {
    color: #000000;
    /*   opacity: 0.5; */
    background-color: #f5efdf;
    transition: all 0.6s ease-in;
}

@media only screen and (min-width: 540px) {
.list_item {
    display: inline-block;
    padding: 0;
    margin: 0;
}
.link_item {
    /* font-size: 1.5rem; */
    font-weight: 700;
    display: block;
    padding: 3rem 1.5rem;
    margin: 0;
    color: #000000;
    -webkit-transition: all 1s ease-out;
    transition: all 1s ease-out;
}
.link_item:hover {
    color: #000000;
    /*   opacity: 0.5; */
    background-color: #f5efdf;
    transition: all 0.6s ease-in;
}
}
@media only screen and (min-width: 964px) {
.link_item {
    font-size: 2rem;
    font-weight: 700;
    display: block;
    padding: 3rem 1.5rem;
    margin: 0;
    color: #000000;
    -webkit-transition: all 1s ease-out;
    transition: all 1s ease-out;
}
}
</style>
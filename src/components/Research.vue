<template>
    <div class="container">
        <Header></Header>
        <section class="research">
            <h2 class="heading">Research Portfolio</h2>
            <ul>
                <li class="research_list">
                    <a href="https://www.youtube.com/embed/efu4Cp0V5qA">
                        <img class="image" src="../assets/Bioinformatics.png" alt="Bioinformatics.png" srcset="">
                    </a>
                    <h3>Bioinformatics - Translating RNA into Protein. (<a href="https://colab.research.google.com/drive/1jfOoaMquTYq9pj5Br5Py2b-b17mL33yP">code</a>)</h3>
                </li>
                <li class="research_list">
                    <a href="https://www.youtube.com/embed/efu4Cp0V5qA">
                        <img class="image" src="../assets/nlp_with_python.png" alt="Bioinformatics.png" srcset="">
                    </a>
                    <h3>NLP - Introduction with Python. (<a href="https://colab.research.google.com/drive/1U7CoYqprSX7ePCg7vdltbGFr90mcpvp6#scrollTo=Qbb6RPdfidpq">code</a>)</h3>
                </li>
            </ul>
        </section>
        <section class="Publications">
            <h2 class="heading">Publications</h2>
            <ul>
                <li class="publication_list">
                    <p>No publication yet!</p>
                </li>
            </ul>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/partials/Header.vue'
import Footer from '@/components/partials/Footer.vue'
    export default {
        name: 'Research',
        components: {
            Header,
            Footer
        }
    }
</script>

<style scoped>
.research {
    /* padding: 4rem 0; */
}
.heading {
    text-align: center;
    margin: 2rem 0;
}
.research_list {
    background-color: #f8f4e8;
    padding: 1rem;
    margin: 2rem 0;
}
.image {
    width: 100%;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
}
.image:hover {
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
}
.Publications {
    /* padding: 4rem 0; */
}
.publication_list {
    text-align: center;
}
@media only screen and (min-width: 540px) and (max-width: 964px) {
.research_list {
    padding: 4rem 2rem;
    /* padding-left: 25%; */
}
}
@media only screen and (min-width: 964px) {
.research_list {
    padding: 4rem 20rem;
    /* padding-left: 25%; */
}
}
</style>
<template>
    <div class="container">
        <Header></Header>
        <section class="home">
            <div class="profile">
                <div class="card">
                    <img class="responsive" src="../assets/callis_ezenwaka_profile_pic.jpg" alt="Callis Ezenwaka Profile Pic">
                </div>
                <div class="details">
                    <h4>I have interest in optimising service delivery by advancing products that are <strong class="text">accessible</strong>,
                        <strong class="text">affordable</strong>, <strong class="text">reliable</strong>, and 
                        <strong class="text">user-friendly</strong> to improve user experience, minimise cost, and automate processes.</h4>
                    <!-- <h4>Applies machine learning techniques to train, evaluate, and deploy models that solve business problems.</h4> -->
                </div>
            </div>
        </section>
        <section class="work">
            <h2>
                <svg class="icons" xmlns="http://www.w3.org/2000/svg" version="1.1" width="544.316px" height="544.316px" viewBox="0 0 100 100">
                    <g transform="translate(10,70) scale(0.05,-0.05)">
                        <path glyph-name="bank" unicode="&#xe975;" d="M536 850l535-214v-72h-71q0-14-11-25t-28-10h-851q-16 0-27 10t-12 25h-71v72z 
                        m-393-357h143v-429h71v429h143v-429h71v429h143v-429h72v429h143v-429h32q16 0 28-10t11-25v-36h-929v36q0 14 12 25t27 10h33v429z 
                        m890-536q16 0 27-11t11-25v-71h-1071v71q0 15 11 25t28 11h994z" horiz-adv-x="1142.9" />
                    </g>
                </svg>
                <span>Work Experience</span>
            </h2>
            <div class="content">
                <div class="tip" v-for="experience in experiences" :key="experience.id">
                    <span><em>{{ experience.role }}</em>, {{ experience.company }}, </span>
                    <span>{{ experience.starttime }} - {{ experience.endtime || 'Present' }}.</span>
                </div>
                <!-- <p class="tip"><em>Project Specialist</em>, GE Healthcare, 2018 - 2019</p> -->
            </div>
        </section>
        <section class="interest">
            <h2 class="">
                <svg class="icons" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16.057 16.057" style="enable-background:new 0 0 16.057 16.057;" xml:space="preserve">
                    <g>
                    <path d="M9.194,8.744c0.461,0,0.835,0.374,0.835,0.835s-0.374,0.835-0.835,0.835S8.359,10.04,8.359,9.579
                    C8.359,9.118,8.733,8.744,9.194,8.744z M6.807,8.315c-0.449,0-0.813,0.364-0.813,0.813s0.364,0.813,0.813,0.813
                    c0.449,0,0.813-0.364,0.813-0.813S7.256,8.315,6.807,8.315z M9.098,7.695c0-0.329-0.267-0.596-0.596-0.596S7.906,7.366,7.906,7.695
                    c0,0.329,0.267,0.596,0.596,0.596S9.098,8.024,9.098,7.695z M13.771,16.057H2.285c-1.616,0-2.173-1.38-1.667-2.882
                    c0,0,1.991-3.712,5.237-9.04V1.05h-0.2C5.364,1.051,5.128,0.815,5.128,0.526C5.129,0.237,5.364,0.001,5.655,0l4.75,0.001
                    C10.694,0,10.93,0.236,10.93,0.526c0,0.289-0.236,0.524-0.525,0.524h-0.201v3.086c3.246,5.328,5.236,9.028,5.236,9.028
                    C15.945,14.666,15.389,16.057,13.771,16.057z M12.919,10.981c-0.527-0.954-2.886-5.041-3.648-6.289l-0.127-0.21H6.913l-0.127,0.21
                    c-0.828,1.36-3.32,5.714-3.658,6.289H12.919z"/>
                    </g>
                </svg>
                <span>Research Interest</span>
            </h2>
            <div class="content">
                <div class="tip" v-for="interest in interests" :key="interest.id">
                    <span>{{ interest.name }}</span>
                </div>
            </div>
        </section>
        <section class="education">
            <h2 class="">
                <svg class="icons" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="544.316px" height="544.316px" viewBox="0 0 544.316 544.316" style="enable-background:new 0 0 544.316 544.316;" xml:space="preserve">
                    <g>
                        <path d="M272.164,340.276L89.452,274.884l0.625,119.831c0,0,85.447,43.077,182.087,43.077
                        c100.907,0,182.718-50.808,182.718-50.808l-0.76-112.006L272.164,340.276z"/>
                        <polygon points="510.149,229.122 544.316,216.616 272.164,106.524 0,216.616 272.164,316.279 489.527,236.677 489.527,352.607 
                        475.795,352.607 475.795,408.354 521.312,408.354 521.312,352.607 510.149,352.607"/>
                    </g>
                </svg>
                <span>Education</span>
            </h2>
            <div class="content">
                <div class="tip" v-for="education in educations" :key="education.id">
                    <span>{{education.degree }}, {{ education.year }},</span>
                    <span>{{ education.school }}.</span>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/partials/Header.vue'
import Footer from '@/components/partials/Footer.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'Home',
    components: {
        Header,
        Footer
    },
	computed: {
        ...mapGetters(['educations', 'experiences', 'interests']),
    },
}
</script>

<style scoped>
.icons {
    height: 1em;
    width: 1em;
    margin-right: 1em
}
.home {
    background-color: #f8f4e8;
    padding: .1rem;
}
.profile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "card details";
    column-gap: 1rem;
    padding: 0;
} 
.profile .pic {
    width: 50%;
    height: auto;
}
.card {
    /* width: 100%; */
    height: auto;
    /* margin: 4% auto; */
    /* box-shadow: -3px 5px 15px #000; */
    cursor: pointer;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}
.responsive {
    display: block;
    max-width: 100%;
    height: auto;
}
.details {
    margin-top: 0.7rem;
    padding-top: 0;
    font-size: 0.8rem;
    /* line-height: 2; */
}
.details .text {
    border-bottom: 0.1rem solid #d9d1bd;
    font-family: fantasy;
}
.work {
    background-color: inherit;
    padding: 3rem 0.5rem;
}
.interest {
    background-color: #f8f4e8;
    padding: 3rem 0.5rem;
}
.education {
    background-color: inherit;
    padding: 3rem 0.5rem;
}
/*  */
.content {
    padding-left: 0;
}
.content {
    position: relative;
    /* padding: 35px 0; */
    max-width: 700px;
    /* margin: 0 auto; */
    padding-left: 1rem;
}
.content div.tip {
    border-left-color: #af9d6f;
}
.content div.tip, .content p.success {
    padding: 1rem;
    /*     margin: 2em 0; */
    border-left-width: 4px;
    border-left-style: solid;
    /* background-color: #f8f8f8; */
    position: relative;
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
}
.content div, .content ul, .content ol {
    line-height: 1.6em;
    margin: 1.2em 0 -1.2em;
    padding-bottom: 1.2em;
    position: relative;
    z-index: 1;
}
div {
    word-spacing: 0.05em;
}
.content div.tip {
    display: flex;
    flex-direction: column;
}
.content div.tip:before {
    content: "!";
    background-color: #af9d6f;
}
.content div.tip:before, .content p.success:before {
    position: absolute;
    top: 14px;
    left: -12px;
    color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    text-align: center;
    line-height: 20px;
    font-weight: bold;
    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}
.content div.tip:before {
    content: "\273A";
    background-color: #af9d6f;
}
.content div.tip:before, .content p.success:before {
    position: absolute;
    top: 14px;
    left: -12px;
    color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    text-align: center;
    line-height: 20px;
    font-weight: bold;
    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}

@media only screen and (min-width: 540px) and (max-width: 964px) {
.profile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "card details";
    column-gap: 2rem;
    padding: 0;
} 
.details {
    /* margin: 1.5rem; */
    font-size: 2rem;
    line-height: 1.5;
    padding-top: 5rem;
}
.details .text {
    border-bottom: 0.3rem solid #d9d1bd;
    font-family: fantasy;
}
.work {
    background-color: inherit;
    padding: 4rem 2rem;
    padding-left: 25%;
}
.interest {
    background-color: #f8f4e8;
    padding: 4rem 2rem;
    padding-left: 25%;
}
.education {
    background-color: inherit;
    padding: 4rem 2rem;
    padding-left: 25%;
}
}
@media only screen and (min-width: 964px) {
.profile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "card details";
    column-gap: 3rem;
    padding: 0;
} 
.details .text {
    border-bottom: 0.3rem solid #d9d1bd;
    font-family: fantasy;
    /* padding-top: 5rem; */
}
.details {
    /* margin: 1.5rem; */
    padding-top: 10rem;
    font-size: 3rem;
    line-height: 1.5;
}
.work {
    background-color: inherit;
    padding: 4rem 2rem;
    padding-left: 25%;
}
.interest {
    background-color: #f8f4e8;
    padding: 4rem 2rem;
    padding-left: 25%;
}
.education {
    background-color: inherit;
    padding: 4rem 2rem;
    padding-left: 25%;
}
}
</style>
<template>
  <div id="app">
    <button aria-label="back to top" class="back-to-top" style="display: block;"><span style="">&uarr;</span></button>
  <!-- <div id="app" :class="{ overlayApp: isOverlayActive, 'dark--theme': isDarkTheme }"> -->
    <!-- <button class="to__top__button" :class="{'dark--theme--to--top' : isDarkTheme, 'white--theme--to--top': isWhiteTheme}" v-scroll="handleScroll" @click.stop.prevent="toTop">
      <img src="./assets/up-chevron.svg" class="to__top__icon" alt="Top">
      <span style="display: none">Top</span>&uarr;
    </button>
    <Header :isOverlayActive="isOverlayActive" @toggleMenu="onToggleMenu($event)" @toggletheme="onToggleTheme"></Header>
    <div class="overlay" :class="[isOverlayActive ? 'overlayActive' : '']" id="overlay" @click.stop.prevent="isOverlayActive = !isOverlayActive"></div> -->
    <router-view/>
    <!-- <Footer :isDarkTheme="isDarkTheme"></Footer> -->
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
// import Header from '@/components/partials/Header.vue'
// import Footer from '@/components/partials/Footer.vue'
import { mapGetters } from "vuex";
export default {
  components: {
    // Header,
    // Footer
  },
  data () {
    return {
      isOverlayActive: false,
      // isDarkTheme: false
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('click', this.toggleNav)
    })
    // if (localStorage.getItem('isDarkTheme')) {
    //   this.isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'))
    // }
  },
  computed: {
    ...mapGetters(['isDarkTheme','isWhiteTheme'])
  },
  watch: {
    '$route' () {
      this.isOverlayActive = false;
    },
    // isDarkTheme: {
    //   handler() {
    //     localStorage.setItem('isDarkTheme', JSON.stringify(this.isDarkTheme))
    //   }
    // }
  },
  methods: {
    onToggleMenu (value) {
      this.isOverlayActive = value
    },
    onToggleTheme (value) {
      this.isDarkTheme = value
    },
    toggleNav () {
      this.isOverlayActive = false;
    },
    handleScroll: function(evt, el) {
      if (window.pageYOffset > 50) {
        el.classList.add("to__top__button__active");
      } else  {
        el.classList.remove("to__top__button__active")
      }
    },
    toTop () {
      setTimeout( () => {
        window.scrollTo(0, 0)
      },500);
    }
  }
}
</script>

<style>
/* @import './assets/styles/mobile.css'; */
html,body{
  margin: 0;
  padding: 0;
  /* font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif; */
  width: 100%;
  min-height: 100%;
  color: #000000;
  background-color: #fcfaf6;
  /* background-color: #15202b; */
  font-size: 1rem;
}
h1,h2,h3,h4,h5,h6,ul,li,p,hr, div, header, footer {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #000000;
}
ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}
button.back-to-top {
  width: 60px;
  height: 60px;
  position: fixed;
  z-index: 999;
  right: 20px;
  bottom: 20px;
  border: none;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  cursor: pointer;
  display: none;
  background: #918b7e;
}

.dark--theme {
  background-color: #10171e;
  color: #FFFFFF;
}
.overlayApp {
  position: fixed;
  width: 100%;
}
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  cursor: pointer;
  z-index: 1;
  transform: translate3d(-100%, 0px, 0px);
  transition: all .3s ease;
}
/************* displays overlay *************/
.overlayActive {
  transform: translate3d(0, 0px, 0px);
  transition: all .3s ease;
}
.page__head {
  text-align: center;
}
.page__button {
  width: 100%;
	padding: 5px;
	/* font-size: 1em; */
	font-weight: bold;
  line-height: 1em;
  font-style: normal;
	background: #00695c;
  color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
}
.to__top__button {
  content: "";
  box-sizing: border-box;
  position: fixed;
  bottom: 15px;
  right: 15px;
  height: 60px;
  width: 60px;
  margin-top: -30px;
  margin-left: -30px;
  padding: 12px 12px 15px 17px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  opacity: 0.6;
  background: #f0f0f0;
  z-index: 2;
  transform: translateY(200%);
  transition: transform 0.3s ease-out;
}
.to__top__button:hover { 
  background: #807979;
  /* border: 3px solid  #FFAAAA; */
}
/*********** dsplays page to the top styling **********/
.to__top__button__active {
  cursor: pointer;
  transform: translateX(0);
  transition: transform 0.3s ease-out;
}
.dark--theme--to--top {
  border: 3px solid #15202b;
}
.white--theme--to--top {
  border: 3px solid  #FFAAAA;
}
.to__top__icon {
  width: 60%;
}
button,
label,
input,
optgroup,
select,
textarea {
  /* display: inline-flex; */
  font-family: 'Open sans', sans-serif;
  /* font-size: 100%; */
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
.wrap {
  text-align: center;
  margin: 30px 0;
}
/* .heading {
  margin: 10px;
  text-align: center; 
}*/
.scotch-rule:first-child {
    margin: 0 0 6px;
}
.scotch-rule {
    border-left: none;
    border-right: none;
}
.scotch-rule {
    box-sizing: content-box;
    content: '';
    display: block;
    border-top: 2px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
    height: 1px;
    background-color: #fff;
    margin-top: 12px;
    margin-bottom: 12px;
}
@media only screen and (min-width: 540px) {
/* @media only screen and (min-width: 5400px) and (max-width: 964px) { */
body {
  font-size: 1.5rem;
}
.overlayActive {
  transform: translate3d(-100%, 0px, 0px);
}
}
@media only screen and (min-width: 964px) {
  body {
  font-size: 1.5rem;
}
.overlayActive {
  transform: translate3d(-100%, 0px, 0px);
}
}
</style>

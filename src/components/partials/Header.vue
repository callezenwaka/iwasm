<template>
  <div class="header__container">
		<header class=" header header_border" :class="[isChecked ? 'dark--theme--background--color ' : 'White--theme--background--color']">
      <div class="menu__nav">
        <div class="logo">
          <router-link class="nav_link_logo" :to="{ name: 'home' }">CALLIS EZENWAKA</router-link>
        </div> 
        <div class="nav_menu_toggle" :class="{ change: MenuActive}" id="nav_menu_toggle" @click.stop.prevent="isMenuActive = !isMenuActive" @click.stop="onMenuActive">
          <div class="nav_menu_bar1"></div>
          <div class="nav_menu_bar2"></div>
          <div class="nav_menu_bar3"></div>
          <div class="nav_menu_toggle_name" :class="[isMenuActive ? 'nav_menu_toggle_name_hide' : '']" id="nav_menu_toggle_name">menu</div>
        </div>
      </div>
			<nav class="nav" :class="{ navMenuActive: MenuActive}">
				<ul :class="[isChecked ? 'dark--theme--background--color ' : 'White--theme--background--color']" class="nav_menu" id="nav_menu">
					<li class="nav_item"><router-link class="nav_link" :to="{ name: 'home' }">Home</router-link></li>
					<li class="nav_item"><router-link class="nav_link" :to="{ name: 'about' }">About us</router-link></li>
					<li class="nav_item"><router-link class="nav_link" :to="{ name: 'contact' }">Contact</router-link></li>
					<li class="nav_item">
              <span class="nav_link_dark_theme modern-checkbox" data-label="Dark theme">
                <input type="checkbox" id="checkbox-1" v-model="isChecked" @change="onChecking">
                <label for="checkbox-1"></label>
              </span>
          </li>
				</ul>
        <!-- <div class="demo"><router-link class="nav_link" :to="{ name: 'contact' }">Contact</router-link> data-label="Dark theme"-->
          
        <!-- </div> -->
			</nav>
		</header>
    <!-- <h1>{{ msg }}</h1> -->
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['isOverlayActive'],
  data () {
    return {
      isMenuActive: false,
      isChecked: false
    }
  },
  watch: {
    isOverlayActive() {
      this.isMenuActive = this.isOverlayActive
    },
    isMenuActive(){
      this.isOverlayActive = this.isMenuActive
    }
  },
  mounted() {
    if (localStorage.getItem('isDarkTheme')) {
      this.isChecked = JSON.parse(localStorage.getItem('isDarkTheme'))
    }
  },
  computed: {
    MenuActive: function() {
      return this.isMenuActive && this.isOverlayActive;
    }
  },
  methods: {
    onMenuActive () {
      this.$emit('toggleMenu', this.isMenuActive);
    },
    onChecking () {
      this.$emit('toggletheme', this.isChecked);
      this.$store.dispatch('SET_DARK_THEME',{checked: this.isChecked})
    },
    toggleNavMenu () {
      if (this.isOverlayActive) {
        this.isMenuActive = true;
      } else {        
        this.isMenuActive = true;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  /* background-color: #330000; */
  /* background-color: #801515; */
  color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 1px 6px 0 rgba(32,33,36,1);
}
.dark--theme--background--color {
  background-color: #15202b;
}
.White--theme--background--color {
  background-color: #801515;
}
header.header_border {  
  border-bottom: 2px solid #FFFFFF;
}
ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}
nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  /* background-color: #801515; */
  text-align: center;
  text-transform: uppercase;
  height: 100%;
  width: 80%;
  margin: 0;
  padding: 0;
  /* top: 57.5px; */
  top: 0;
  right: 0;
  left: 0;
  transform: translate3d(-100%, 0px, 0px);
  transition: all .3s ease;
  z-index: 10;
}
.navMenuActive {
  transform: translate3d(0, 0px, 0px);
  transition: all .3s ease;
}
.menu__nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 55.5px;
}
.nav_menu {
  /* background-color: #801515; */
  height: 100%;
}
.nav_item {
  padding: 0;
  margin: 0;
  border-bottom: 2px solid #FFFFFF;
}
.nav_item_account {
  /* background-color: #00bf96; */
  background-color: #CC5200;
  /* padding: 5px; */
  border-radius: 5px;
}
.nav_link.router-link-exact-active {
  background-color: rgba(51, 51, 51, 0.5);
  cursor: pointer;
}
.nav_link {
  display: block;
  padding: 18px 0;
  margin: 0;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
}
.nav_link_dark_theme {
  padding: 17px;
  margin: 0;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
}
.nav_link_account {
  /* background-color: #47cf73; */
  color: #ff9101;
  /* color: #CC5200; */
  font-weight: 700;
}
.nav_link_logo {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
}
.logo {
  padding: 18px 10px;
}
.check {
  height: 2em;
  width: 2em;
  margin-right: 2em;
}
/*********** hamburger menu bar toggle *******************/
.nav_menu_toggle {
  display: inline-block;
  cursor: pointer;
  margin: 1.5px 20px 0 0;
  padding: 0;
}
.nav_menu_toggle_fixed {
  margin-left: 10px;
}
.nav_menu_bar1, .nav_menu_bar2, .nav_menu_bar3 {
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.2s;
}
.change {
  z-index: 10;
  padding: 8px 0 5px 0;
}
.change .nav_menu_bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
  transform: rotate(-45deg) translate(-9px, 6px) ;
}
.change .nav_menu_bar2 {opacity: 0;}
.change .nav_menu_bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
  transform: rotate(45deg) translate(-8px, -8px) ;
}
.nav_menu_toggle_name_hide {
  display: none;
}
/* Dark theme */
.demo {
  display: flex;
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modern-checkbox {
  display: flex;
  justify-content: center;
}
.modern-checkbox input {
  display: none;
}
.modern-checkbox label {
  position: relative;
  display: inline-flex;
  background: transparent;
  width: 40px;
}
.modern-checkbox label::before,
.modern-checkbox label::after {
  content: "";
  position: absolute;
  left: 0;
  border-radius: 20px;
  border: 1px solid #000;
  transition: all 0.2s ease;
  cursor: pointer;
}
.modern-checkbox label::before {
  width: 40px;
  height: 20px;
  border: 1px solid #000;
  background-color: #626262;
  border-color: #626262;
}
.modern-checkbox label::after {
  content: "";
  width: 20px;
  height: 20px;
  background: #fff;
  border: 0;
  top: 1px;
  left: 1px;
}
.modern-checkbox input:checked + label::after {
  left: calc(100% - 20px);
}
.modern-checkbox input:checked + label::before {
  background: #4ad964;
  border-color: #4ad964;
}
.modern-checkbox::after {
  content: attr(data-label);
  /* content: icon; */
  padding-left: 5px;
  padding-top: 3px;
  display: flex;
}
@media only screen and (min-width: 690px) and (max-width: 964px) {
header {
  display: flex;
  flex-direction: row;
  max-height: 55.5px;
}
header.header_border {  
  border-bottom: none;
}
.menu__nav {
  width: 30%;
}
.nav_menu_toggle {
  display: none;
}
nav {
  display: block;
  flex-direction: row;
  position: unset;
  /* background-color: #330000; */
  /* background-color: #801515; */
  text-transform: uppercase;
  width: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  right: 0;
  left: 200px;
  transform: translate3d(0, 0px, 0px);
  transition: all .3s ease;
}
.nav_menu {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* background-color: #801515; */
  margin: 0;
  padding: 0;
}
.nav_item {
  /* padding: 19px 10px; */
  padding: 0;
  margin: 0;
  border-bottom: none;
}
.nav_item:hover {
  background: rgba(51, 51, 51, 0.5);
}
.nav_link {
  padding: 19px 10px;
}
.nav_link:hover {
  /* padding: 18px 10px; */
  /* border-bottom: 2px solid rgba(255, 255, 255, 0.5); */
  color: rgba(255, 255, 255, 0.5);
  display: block;
}
}
@media only screen and (min-width: 964px) {
header {
  display: flex;
  flex-direction: row;
  max-height: 55.5px;
  padding: 0 0 0 14.5em;
}
header.header_border {  
  border-bottom: none;
}
.menu__nav {
  width: 30%;
}
.nav_menu_toggle {
  display: none;
}
.logo[data-v-0a5fdd6a] {
  padding: 18px 0;
}
nav {
  display: block;
  flex-direction: row;
  position: unset;
  /* background-color: #330000; */
  /* background-color: #801515; */
  text-transform: uppercase;
  width: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  right: 0;
  left: 200px;
  transform: translate3d(0, 0px, 0px);
  transition: all .3s ease;
}
.nav_menu {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #801515;
  margin: 0 9em 0 0;
  padding: 0;
}
.nav_item {
  /* padding: 19px 10px; */
  padding: 0;
  margin: 0;
  border-bottom: none;
}
.nav_item:hover {
  background: rgba(51, 51, 51, 0.5);
}
.nav_link {
  padding: 19px 10px;
}
.nav_link:hover {
  /* padding: 18px 10px; */
  /* border-bottom: 2px solid rgba(255, 255, 255, 0.5); */
  color: rgba(255, 255, 255, 0.5);
  display: block;
}
}
/* and (max-width: 964px) */
</style>
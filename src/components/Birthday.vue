<template>
    <div class="birthday">
        <Header></Header>
		<section class="container">
			<h1 class="name" style="text-align: center;">
				<span style="margin: 0 auto; width: 80%;">Happy Birthday</span><br><span> <em style="text-transform: capitalize; margin: 0 auto; width: 80%;">{{ celebrant }}</em> 🎂</span></h1>
			<h1 class="name"></h1>
			<div class="balloon"></div>
			<div class="balloon"></div>
			<div class="balloon"></div>
			<div class="balloon"></div>
			<div class="balloon"></div>
			<div class="balloon"></div>
			<div class="balloon"></div>
			<div class="balloon"></div>
			<div class="balloon"></div>
			<div class="balloon"></div>
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
	name: 'birthday',
	components: {
		Header,
		Footer,
	},
	computed: {
        ...mapGetters(['celebrant']),
    },
	methods: {
		
	}
    
}
</script>

<style scoped>
@charset "UTF-8";
html {
  font-size: 62.5%;
}

body {
  margin: 0;
  padding: 0;
  font-family: Roboto;
  overflow: hidden;
  font-size: 1.6rem;
}

.container {
  background-color: #15202B;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container h1 {
  position: relative;
  z-index: 3;
  font-size: 6rem;
}

.balloon {
  display: inline-block;
  width: 120px;
  height: 145px;
  background: #799ed2;
  border-radius: 80%;
  position: relative;
  box-shadow: inset -10px -10px 0 rgba(0, 0, 0, 0.07);
  margin: 20px 30px;
  transition: transform 0.5s ease;
  z-index: 10;
  transform-origin: bottom center;
  z-index: 2;
  position: absolute;
  top: 28vh;
  animation: move 2.5s ease-in-out infinite;
}
.balloon:nth-child(1) {
  background-color: yellow;
  color: yellow;
  left: 250px;
}
.balloon:nth-child(1):before {
  color: yellow;
}
.balloon:nth-child(2) {
  background-color: green;
  left: 50px;
  top: 60vh;
}
.balloon:nth-child(2):before {
  color: green;
}
.balloon:nth-child(3) {
  background-color: #F20505;
  right: 50px;
  top: 20vh;
}
.balloon:nth-child(3):before {
  color: #F20505;
}
.balloon:nth-child(4) {
  background-color: white;
  left: 20px;
  top: 20vh;
}
.balloon:nth-child(4):before {
  color: white;
}
.balloon:nth-child(5) {
  background-color: white;
  right: 50%;
  top: 5vh;
}
.balloon:nth-child(5):before {
  color: white;
}
.balloon:nth-child(6) {
  background-color: white;
  right: 250px;
  top: 70vh;
}
.balloon:nth-child(6):before {
  color: white;
}
.balloon:nth-child(7) {
  background-color: white;
  right: 40%;
  top: 90vh;
}
.balloon:nth-child(7):before {
  color: white;
}
.balloon:nth-child(8) {
  background-color: orange;
  left: 20%;
  top: 60vh;
}
.balloon:nth-child(8):before {
  color: orange;
}
.balloon:nth-child(9) {
  background-color: #AB05F2;
  right: 250px;
  top: 10vh;
}
.balloon:nth-child(9):before {
  color: #AB05F2;
}
.balloon:nth-child(10) {
  background-color: #A65221;
  right: 30%;
  top: 70vh;
}
.balloon:nth-child(10):before {
  color: #A65221;
}
.balloon:before {
  content: "▲";
  z-index: 1;
  font-size: 20px;
  display: block;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: -12px;
  z-index: -100;
  color: #799ed2;
}

@keyframes move {
  to {
    transform: translateY(-110vh);
  }
}

</style>>
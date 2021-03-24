<template>
	<div class="about">
		<div class="about__statement" :class="{dark__theme__content__background__color : isDarkTheme, white__theme__content__background__color : isWhiteTheme}">
			<h2 class="about_head" :class="{dark_about_head : isDarkTheme, white_about_head : isWhiteTheme}">Hi, this is Callis. Thank you for checking up</h2><hr class="scotch-rule">
			<p>
				I aim to optimize service delivery by advancing smart systems that are accessible, affordable, reliable and user friendly to improve customers experience. 
				I explore the potentials in deployment of data-based analytics and technology as a tool to minimize cost and automate processes. 
				I have experience in embedded and software engineering and their integration with intelligent systems.
				I persistently work towards short and long - term personal and institutional goals.
				I have excellent man-management and analytical skills with passion to see tasks to completion. 
				I have experience in project management and understand project lifecycle.
			</p>
		</div>
		<!-- EVENTS -->
		<div class="event__list" :class="{dark__theme__content__background__color : isDarkTheme, white__theme__content__background__color : isWhiteTheme}">
		<h2 class="heading">Events</h2><hr class="scotch-rule">
		<div class="content">
			<div class="iframe-container">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/M8TH7O7BQAI?start=120" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div><hr class="scotch-rule">
			<!-- <div class="iframe-container">
			<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/uWy1jkmjwGI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div><hr class="scotch-rule"> -->
		</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
  name: 'About',
  components: {
  },
  data() {
    return {
      // isWhiteTheme: false,
      // isDark: false
    }
  },
  // watch: {
  //   isDarkTheme() {
  //     this.isDark = this.isDarkTheme.checked
  //     this.isWhiteTheme = !this.isDarkTheme.checked
  //   }
  // },
  computed: {
    ...mapGetters(['isDarkTheme','isWhiteTheme'])
  },
  // mounted() {
  //   this.checkTheme()
  // },
  // created () {
  //   this.checkTheme()
  // },
  // methods: {
  //   checkTheme () {
  //     if (!this.isDarkTheme) {
  //       this.isWhiteTheme = true
  //     }
  //   }
  // }
}
</script>

<style scoped>
.dark_about_head {
  color: #000000;
  text-align: center;
  text-shadow: 0px 0px 5px #FFFFFF, 1px 1px 5px #FFFFFF, -1px -1px 5px #FFFFFF, 1px -1px 5px #FFFFFF, -1px 1px 5px #FFFFFF;
  font-family: 'Lobster Two', cursive;
}
.white_about_head {
  color: #fcfcfc;
  text-align: center;
  text-shadow: 0px 0px 5px #801515, 1px 1px 5px #801515, -1px -1px 5px #801515, 1px -1px 5px #801515, -1px 1px 5px #801515;
  font-family: 'Lobster Two', cursive;
}
.dark__theme__content__background__color {
  background-color: #15202b;
}
.white__theme__content__background__color {
  background-color: #FFFFFF;
}
.about_head {
  font-size: 1.2em;
}
.about__statement {
  margin: 20px 10px;
  padding: 10px;
  line-height: 2em;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  font-weight: 700;
}
.about__statement:hover {
  border-radius: 5px;
  box-shadow: 0px 2px 5px #666;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in-out;
}
.event__list {
  margin: 20px 10px;
  padding: 10px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  font-weight: 700;
  text-align: center;
}
.event__list:hover {
  border-radius: 5px;
  box-shadow: 0px 2px 5px #666;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in-out;
}
.iframe-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}
.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
@media only screen and (min-width: 690px) and (max-width: 964px) {

}
@media only screen and (min-width: 964px) {
.about {
  margin: 20px 14em;
}
}
</style>

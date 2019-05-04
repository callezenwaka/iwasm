<template>
  <div class="footer__container">
		<footer :class="[isDarkTheme ? 'dark--theme--background--color ' : 'White--theme--background--color']" class="footer">
			<span class="footer_content">All right reserved. &copy; {{ new Date().getFullYear() }}  <span><router-link class="nav_link_footer" to="https://twitter.com/callezenwaka">@callezenwaka</router-link> ♥</span></span>
		</footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: ['isDarkTheme'],
  data () {
    return {
      isChecked: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only ©-->
<style scoped>
.dark--theme--background--color {
  background-color: #15202b;
}
.White--theme--background--color {
  background-color: #801515;
}
footer {
  color: rgba(255, 255, 255, 0.9);
	min-height: 45px;
	padding-top: 15px;
	text-align: center;
	margin: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.footer_content {
	padding-top: 15px;
}
.nav_link_footer {
	color: rgba(255, 255, 255, 0.9);
}
</style>
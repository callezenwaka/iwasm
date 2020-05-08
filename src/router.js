import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Research from './views/Research.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Blog from './views/Blog.vue'
import Birthday from './components/Birthday.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/research', name: 'research', component: Research },
    { path: '/about', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/birthday/may08/vee', name: 'birthday', component: Birthday },
  ]
})

import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import VueCarousel from 'vue-carousel';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faPinterestSquare, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faFacebookSquare)
library.add(faInstagramSquare)
library.add(faPinterestSquare)
library.add(faTiktok)
library.add(faEnvelope)
library.add(faPhoneAlt)
library.add(faMapMarkerAlt)


Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueCarousel);


new Vue({
  render: h => h(App),
}).$mount('#app')

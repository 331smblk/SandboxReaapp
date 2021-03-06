// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import 'vue-material-design-icons/styles.css'

import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet'

import 'mapbox-gl/dist/mapbox-gl.css'

import Vue2Leaflet from 'vue2-leaflet';
Vue.component('v-map', Vue2Leaflet.Map);
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer);
Vue.component('v-marker', Vue2Leaflet.Marker);



Vue.config.productionTip = false

Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

  mounted() {
    axios.get("https://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz18pz554ttzf_7oq0o")
    .then(response => {this.results = response.data.results})
  }
})




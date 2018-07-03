import Vue from 'vue'
import App from './App.vue'
import router from './router'
// title mixin
import titleMixin from './util/title'
Vue.mixin(titleMixin);
//PWA
import './registerServiceWorker'
//HEAD META
import VueHead from 'vue-head'
Vue.use(VueHead);
//MAND UI
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

Vue.use(mandMobile)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store'
import filterDate from './filters/filter'
import '../src/API/axios.config'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'

Vue.use(VueTelInput)

Vue.filter('formatDate', filterDate)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  updated() {
    let tokenExist = localStorage.getItem('jwtToken');
    
    if (tokenExist && tokenExist !== undefined) {
      return store.dispatch('getEvents') && store.dispatch('getSuggestions')
    }
    store.state.EventList = null
  }
}).$mount('#app')

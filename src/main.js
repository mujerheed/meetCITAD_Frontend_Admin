import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store'
import filterDate from './filters/filter'
import filterTime from './filters/timeFilter'
import '../src/API/axios.config'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'

Vue.use(VueTelInput)

Vue.filter('formatDate', filterDate)
Vue.filter('formatTime', filterTime)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  created() {
    let tokenExist = localStorage.getItem('jwtToken');
    let tokenExpiration = localStorage.getItem('expiration')
    
    if (tokenExist && tokenExist !== undefined) {
      store.dispatch('getEvents')
      store.dispatch('getSuggestions')
    }else {
      return
    }
    
    let date = new Date()
    if (tokenExist && tokenExpiration < (date.getTime()/1000)) {
      store.dispatch('signAdminOut')
    }
  }
}).$mount('#app')

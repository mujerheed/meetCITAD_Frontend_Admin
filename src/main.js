import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store'
import filterDate from './filters/filter'
import '../src/API/axios.config'

Vue.filter('formatDate', filterDate)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  created() {
    this.$store.dispatch('getEvents')
  }
}).$mount('#app')

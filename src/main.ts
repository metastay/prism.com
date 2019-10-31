// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
// import router from './router'
//import './stylus/main.styl'
// import { store, backend } from './store'
import 'vuetify/dist/vuetify.min.css'
// import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css';


Vue.config.productionTip = false

// backend.init( appConfig)

/* eslint-disable no-new */
new Vue({
  // router,
  // store,
  render: h => h(App),
  template: '<App/>',
  vuetify
}).$mount('#app')
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import routes from './router'
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import axios from 'axios';
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://m.ciyigou.com:80';
// axios.defaults.baseURL = 'http://192.168.0.200:82';
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
/* eslint-disable no-new */
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'hash',
    // mode: 'history',
    base: '/rare/',
    scorllBehavior: () => ({
    y: 0
  }),
  routes
});
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

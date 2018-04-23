// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import MandMobile from 'mand-mobile'
import '../static/css/base.css'
import {request, response, Error} from './service/httpInterceptor';

Vue.use(MandMobile);

Vue.config.productionTip = false;


// 移动端改变Title
// router.beforeEach(function (to, from, next) {
//   if (to.meta && to.meta.title){
//     document.title = to.meta.title;
//   }
//   next();
// });

Axios.interceptors.request.use(request);

Axios.interceptors.response.use(response, Error);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

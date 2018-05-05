"use strict";
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rootPage',
      component: p => require(['@/pages/HomePage/rootPage'], p),
      children: [
        {
          path: '/HomePage/Home',
          name: 'HomePage.Home',
          component: p => require(['@/pages/HomePage/Home'], p),
          meta: {title: '首页'},
        },
        {
          path: '/HomePage/foreverLove',
          name: 'HomePage.foreverLove',
          component: p => require(['@/pages/ShowPhotoPage/foreverLove'], p),
          meta: {title: '永恒之爱'},
        }
      ],
      redirect: {name: 'HomePage.Home'}
    }
  ]
})

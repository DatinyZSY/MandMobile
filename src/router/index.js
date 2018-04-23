"use strict";
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rootPage',
      component: resolve => require(['@/pages/HomePage/rootPage'], resolve),
      children: [
        {
          path: '/HomePage/Home',
          name: 'HomePage.Home',
          component: resolve => require(['@/pages/HomePage/Home'], resolve),
          meta: {title: '首页'},
        }
      ],
      redirect: {name: 'HomePage.Home'}
    }
  ]
})

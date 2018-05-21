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
        },
        {
          path: '/categoryPage/category',
          name: 'categoryPage.category',
          component: resolve => require(['@/pages/categoryPage/category'], resolve),
          meta: {title: 'Demo'},
        }
      ],
      redirect: {name: 'HomePage.Home'}
    }
  ]
})

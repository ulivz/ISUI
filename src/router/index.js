import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import RouterFactory from './RouterFactory'
import { NAV_METADATA } from './nav'

let router = RouterFactory.create(NAV_METADATA)

console.log(router)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})

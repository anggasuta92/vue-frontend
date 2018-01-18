import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/pages/Welcome'
import PhonebookIndex from '@/components/pages/phonebook/PhonebookIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/phonebook',
      name: 'PhonebookIndex',
      component: PhonebookIndex
    }
  ]
})

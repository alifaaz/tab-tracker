import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/register.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {title: 'home'}
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: { title: 'register' }
    }
  ]
})

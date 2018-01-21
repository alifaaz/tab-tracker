import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/authComp/register.vue'
import login from '@/components/authComp/login.vue'
import Songs from '@/components/songs/songs.vue'
import Songaya from '@/components/songs/Songaya.vue'
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
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { title: 'login' }
    },
    {
      path: '/songs',
      name: 'songsAll',
      component: Songs,
      meta: { title: 'Songs' }
    },
    {
      path: '/songs/:songID',
      name: 'songaa',
      component: Songaya,
      meta: { title: 'Songaya' }
    },
  ],
  mode: 'history',
  scrollBehavior (to, from, savePosition) {
    if (savePosition) {
      return savePosition
    }
    if (to.hash) {
      return { selector: to.hash}
    }
    return {x: 0, y: 0}
  }

})

import { createRouter, createWebHashHistory } from 'vue-router'
import { profileService } from './services/ProfileService'
import { authGuard } from '@bcwdev/auth0provider-client'
import { AppState } from './AppState'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '',
    name: 'HomePage',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  }

]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router

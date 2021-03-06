import { createRouter, createWebHashHistory } from 'vue-router'

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
    name: 'AboutPage',
    component: loadPage('AboutPage')
  },
  {
    path: '/listings',
    name: 'ListingsPage',
    component: loadPage('ListingsPage')
  },
  {
    path: '/areas',
    name: 'AreasPage',
    component: loadPage('AreasPage')
  },
  {
    path: '/staff',
    name: 'StaffPage',
    component: loadPage('StaffPage')
  },
  {
    path: '/mlsPage',
    name: 'MlsPage',
    component: loadPage('MlsPage')
  }

]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router

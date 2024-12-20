import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

const routerHistory = createWebHashHistory()

import HomePage from './pages/home.vue'
import AboutPage from './pages/about.vue'
import Item from './pages/itemAlias.vue'
import NotFoundPage from './pages/notFound.vue'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/:itemAlias',
      name: 'itemAlias',
      component: Item
    },
    {
      path: '/:CatchAll(.*)*',
      name: '404',
      component: NotFoundPage
    }

  ]
})

export default routers

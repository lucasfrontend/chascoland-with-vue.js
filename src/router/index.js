import { createRouter, createWebHistory } from 'vue-router'
/*
import Lista1View from '@/views/lista1/Lista1View'
import ItemDetailView from '@/views/lista1/ItemDetailView'
import Lista2View from '@/views/Lista2View'
import ItemA from '@/components/items/ItemA'
import ItemB from '@/components/items/ItemB'
import ItemC from '@/components/items/ItemC'
import ItemD from '@/components/items/ItemD'
*/
import AboutView from '@/views/AboutView'
import HomeView from '@/views/HomeView'
import Page404 from '@/views/Page404View'
import StaffView from '@/views/StaffView'
import BeerView from '@/views/BeerView'
import Item1View from '@/views/Item1View'
import Item2View from '@/views/Item2View'

//import Ruta from '@/components/items/Ruta'


const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home'
  },
  {
    path: '/about',
    component: AboutView,
    name: 'about'
  },
  {
    path: '/staff',
    component: StaffView,
    name: 'staff'
  },
  {
    path: '/beer',
    component: BeerView,
    name: 'beer'
  },
  {
    path: '/item1',
    component: Item1View,
    name: 'item1'
  },
  {
    path: '/item2',
    component: Item2View,
    name: 'item2'
  },
  /*
  {
    path: '/item-detail/:id',
    component: ItemDetailView,
    name: 'item-detail'
  },
  {
    path: '/url3',
    component: ContactoView,
    name: 'lista-3'
  },
  {
    path: '/home',
    component: HomeView,
    children: [
      {
        path: '',
        component: ItemA,
        name: 'space'
      },
      {
        path: 'item-b',
        component: ItemB,
        name: 'item-b'
      },
      {
        path: 'item-c',
        component: ItemC,
        name: 'item-c'
      },
      {
        path: 'item-d/:id',
        component: ItemD,
        name: 'item-d',
        query: null
      }

    ] 
  },
  {
    path: '/ruta',
    component: Ruta,
    name: 'ruta'
  },*/
  {
    path: '/:pathMatch(.*)*',
    component: Page404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

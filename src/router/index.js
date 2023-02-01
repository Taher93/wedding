import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Locatie from "@/views/Locatie";
import UsefulInfo from "@/views/UsefulInfo";
import Overnachting from "@/views/Overnachting";
import Dresscode from "@/views/Dresscode";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/handigelinks',
    name: 'Handige links',
    component: UsefulInfo
  },
  {
    path: '/overnachting',
    name: 'Overnachting en vervoer',
    component: Overnachting
  },
  {
    path: '/locatie',
    name: 'Locatie',
    component: Locatie
  },
  {
    path: '/dresscode',
    name: 'Dresscode',
    component: Dresscode
  }
]

const router = new VueRouter({
  routes
})

export default router

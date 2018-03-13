import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BulmaTemplate from '@/components/BulmaTemplate'
import DashboardLayout from '@/views/DashboardLayout'

import Listings from '@/views/Listings/index'
import ListingsGrid from '@/views/Listings/ListingsGrid'
import Calendar from '@/views/Calendar/index'
import Maps from '@/views/Maps/index'
import MapsOptionOne from '@/views/Maps/OptionOne'
import MapsOptionTwo from '@/views/Maps/OptionTwo'
import SingleListing from '@/views/Listings/SingleListing'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   name: 'BulmaTemplate',
    //   component: BulmaTemplate
    // },
    {
      path: '/',
      name: 'Home',
      component: DashboardLayout
    },
    {
      path: '/home',
      name: 'Home',
      component: DashboardLayout
    },

    {
      path: '/listings',
      name: 'Listings',
      component: Listings
    },
    {
      path: '/listings-grid',
      name: 'ListingsGrid',
      component: ListingsGrid
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/maps',
      name: 'maps',
      component: Maps
    },
    {
      path: '/maps-1',
      name: 'maps-1',
      component: MapsOptionOne
    },
    {
      path: '/maps-2',
      name: 'maps-2',
      component: MapsOptionTwo
    },
    {
      path: '/single-listing',
      name: 'SingleListing',
      component: SingleListing
    }
  ]
})

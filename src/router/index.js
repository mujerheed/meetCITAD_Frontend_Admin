import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import SignInAdmin from '@/components/SubComponent/SignInAdmin'
import EventsList from '@/components/Events/EventsList'
import SingleEvent from '@/components/Events/SingleEvent'
import CreateEvent from '@/components/Events/CreateEvent'
import AttendeesUsers from '@/components/Attendees/AttendeesUsers'
import SuggestionInbox from '@/components/Attendees/SuggestionInbox'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/signIn',
    name: 'SignIn',
    component: SignInAdmin
  },

  {
    path: '/events',
    name: 'EventList',
    component: EventsList
  },

  {
    path: '/events/:_eventID',
    name: 'SingleEvent',
    props: true,
    component: SingleEvent
  },

  {
    path: '/events/:_eventID/attendees',
    name: 'Attendees',
    props: true,
    component: AttendeesUsers
  },

  {
    path: '/add-event',
    name: 'CreateEvent',
    component: CreateEvent
  },


  {
    path: '/suggestion-message',
    name: 'SuggestionInbox',
    component: SuggestionInbox
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

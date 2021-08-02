import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import SignInAdmin from '@/components/SubComponent/SignInAdmin'
import EventsList from '@/components/Events/EventsList'
import SingleEvent from '@/components/Events/SingleEvent'
import CreateEvent from '@/components/Events/CreateEvent'
import RegisteredUsers from '@/components/Users/RegisteredUsers'
import AttendedUsers from '@/components/Users/AttendeesList'
import SuggestionInbox from '@/components/Users/SuggestionInbox'
import Authenticated from './route-guard'

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
    component: EventsList,
    beforeEnter: Authenticated
  },

  {
    path: '/events/:_eventID',
    name: 'SingleEvent',
    props: true,
    component: SingleEvent,
    beforeEnter: Authenticated
  },

  {
    path: '/events/:_eventID/registration',
    name: 'Register',
    component: RegisteredUsers,
    beforeEnter: Authenticated
  },

  {
    path: '/events/:_eventID/attendees',
    name: 'Attendees',
    component: AttendedUsers,
    beforeEnter: Authenticated
  },


  {
    path: '/add-event',
    name: 'CreateEvent',
    component: CreateEvent,
    beforeEnter: Authenticated
  },


  {
    path: '/suggestion-message',
    name: 'SuggestionInbox',
    component: SuggestionInbox,
    beforeEnter: Authenticated
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

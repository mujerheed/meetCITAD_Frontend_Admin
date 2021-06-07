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
    path: '/events/:_eventID/registration',
    name: 'Register',
    component: RegisteredUsers
  },

  {
    path: '/events/:_eventID/attendees',
    name: 'Attendees',
    component: AttendedUsers
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

import axios from 'axios'
import router from '../router/index'

export const actions = {
  createEvent({ commit, dispatch }, payload){
    //POST NEW EVENT
    commit('loading', true)
    commit('clear')
    
    axios.post("event/events", payload)
      .then(data => {
        commit('loading', false)
        commit('successfulMessage', 'Success')
        dispatch('getEvents')
        console.log(data);
      })
      .catch(error => {
        commit('loading', false)
        commit('failedMessage', error)
        console.log(error);
      })
  
  },
    
  getEvents({ commit }) {
    //GET ALL EVENTS
    commit('loading', true)
    commit('clear')

    axios.get("event/events")
      .then(response => {
        commit('loading', false)
        const eventInfo = response.data
        commit('allEvents', eventInfo)
        commit('successfulMessage', 'Success')
      })
      .catch(error => {
        commit('loading', false)
        commit('failedMessage', error)
        console.log(error)
      })

  },

  updateEvent({ commit }, payload) {
    //UPDATE/EDIT SINGLE AN EVENT
    const updatedData = {
      title: payload.editedTitle,
      description: payload.editedDescription,
      venue: payload.editedLocation,
      hostBy: payload.editedHostBy,
      date: payload.editedDate,
      time: payload.editedTime
    }
    commit('loading', true)
    commit('clear')

    axios.patch(`event/events/${payload.id}`, updatedData)
    .then(response => {
      commit('loading', false)
      commit('updateEventData', payload)
      console.log(response)
    })
    .catch(error => {
      commit('loading', false)
      commit('failedMessage', error)
      console.log(error)
    })
  },

  deleteEvent({commit, dispatch}, payload) {
    let eventId = payload.id
    axios.delete(`event/events/${eventId}`).then(
      response => {
          commit('loading', false)
          dispatch('getEvents')
          console.log(response);
      }
    ).catch((error) => {
      commit('loading', false)
      commit('failedMessage', error)
      console.log(error)
    })
  },

  signAdminIn({ commit, dispatch }, adminData) {
    //GET ADMIN SIGN IN DATA
    commit('loading', true)
    commit('clear')

    axios.post('/admin/login', adminData)
      .then(response => {
        commit('loading', false)
        console.log(response);
        localStorage.setItem('jwtToken', response.data.adminToken) //SET TOKEN TO LOCAL_STORAGE
        commit('adminSignIn', true)
        commit('successfulMessage', response.data.message)
        dispatch('getEvents')
        router.push('/')
      })
      .catch(error => {
        commit('loading', false)
        commit('adminSignIn', false)
        commit('failedMessage', error)
       
        console.log(error);
      })
  },

  signAdminOut({commit, state}) {
    //ADMIN SIGNOUT
    commit('adminSignIn', false)
    localStorage.clear()
    state.AdminLogin = false
    state.EventList = null
    state.SuggestionMessage = null
    state.RegisteredUsers = null
    state.AttendedUsers = null

    router.push('/signin')
  },

  getSuggestions({ commit }) {
    //GET ALL SUGGESTION MESSAGES
    commit('loading', true)
    commit('clear')

    axios.get("admin/suggestions")
      .then(response => {
        commit('loading', false)
        commit('suggestions', response.data)
        console.log(response);
      })
      .catch(error => {
        commit('loading', false)
        commit('failedMessage', error)
       
        console.log(error);
      })
  },

  getRegisteredUsers({ commit }, payload) {
    //GET ALL SUGGESTION MESSAGES
    commit('loading', true)
    commit('clear')

    axios.get(`admin/registered-users/${payload}`)
      .then(response => {
        commit('loading', false)
        commit('successfulMessage', 'Success')
        commit('registeredUsers', response.data)
       
        console.log(response);
      })
      .catch(error => {
        commit('loading', false)
        commit('failedMessage', error)
        
        console.log(error);
      })
  },

  getAttendedUsers({ commit }, payload) {
    //GET ALL ATTENDEED MESSAGES
    commit('loading', true)
    commit('clear')

    axios.get(`admin/attended-users/${payload}`)
      .then(response => {
        commit('loading', false)
        commit('successfulMessage', 'Success')
        commit('attendedUsers', response.data)
        
        console.log(response);
      })
      .catch(error => {
        commit('loading', false)
        commit('failedMessage', error)
        
        console.log(error)
      })
  },

}

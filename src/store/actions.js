import axios from 'axios'
import router from '../router/index'

export const actions = {
  createEvent({ commit, dispatch }, payload){
    //POST NEW EVENT
    commit('loading', true)
    commit('clear')
    
    axios.post("event/events", payload)
      .then(response => {
        commit('loading', false)
        commit('successfulMessage', response.data.message)
        dispatch('getEvents')
      })
      .catch(error => {
        let bug = error.response.data.error
        commit('loading', true)
        commit('failedMessage', bug)
      })
  
  },
    
  getEvents({ commit }) {
    //GET ALL EVENTS
    commit('loading', true)
    commit('clear')

    axios.get("event/events")
      .then(response => {
        commit('loading', false)
        const eventInfo = response.data.Events
        localStorage.setItem('expiration', response.data.tokenExpiration)
        commit('allEvents', eventInfo)
        commit('successfulMessage', response.data.message)
      })
      .catch(error => {
        let bug = error.response.data.error
        commit('loading', true)
        commit('failedMessage', bug)
      })

  },

  updateEvent({ commit }, payload) {
    //UPDATE/EDIT SINGLE AN EVENT
    const updatedData = {
      title: payload.title,
      description: payload.description,
      venue: payload.venue,
      hostBy: payload.hostBy,
      date: payload.date,
      time: payload.time,
      availableSeat: payload.availableSeat
    }
    commit('loading', true)
    commit('clear')
    
    axios.patch(`event/events/${payload.id}`, updatedData)
    .then(response => {
      commit('loading', false)
      commit('updateEventData', payload)
      commit('successfulMessage', response.data.message)
    })
    .catch(error => {
      let bug = error.response.data.error
        commit('loading', true)
        commit('failedMessage', bug)
    })
  },

  deleteEvent({commit, dispatch}, payload) {
    let eventId = payload.id
    axios.delete(`event/events/${eventId}`).then(
      response => {
          commit('loading', false)
          commit('successfulMessage', response.data.message)
          dispatch('getEvents')
      }
    ).catch((error) => {
      let bug = error.response.data.error
        commit('loading', true)
        commit('failedMessage', bug)
    })
  },

  signAdminIn({ commit, dispatch }, adminData) {
    //GET ADMIN SIGN IN DATA
    commit('loading', true)
    commit('clear')

    axios.post('/admin/login', adminData)
      .then(response => {
        commit('loading', false)
        localStorage.setItem('jwtToken', response.data.adminToken) //SET TOKEN TO LOCAL_STORAGE
        commit('adminSignIn', true)
        commit('successfulMessage', response.data.message)
        dispatch('getEvents')
        router.push('/')
      })
      .catch(error => {
        let bug = error.response.data.error
        commit('loading', true)
        commit('adminSignIn', false)
        commit('failedMessage', bug)
      })
  },

  signAdminOut({commit, state}) {
    //ADMIN SIGNOUT
    commit('adminSignIn', false)
    localStorage.clear()
    state.AdminLogin = false
    state.EventList = []
    state.SuggestionMessage = []
    state.RegisteredUsers = []
    state.AttendedUsers = []

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
        commit('successfulMessage', response.data.message)
      })
      .catch(error => {
        let bug = error.response.data.error
        commit('loading', true)
        commit('failedMessage', bug)
      })
  },

  replySuggestions ({ commit }, payload) {
    commit('loading', true)
    commit('clear')
    
    axios.post('admin/reply-message', payload)
      .then(response => {
        commit('loading', false)
        commit('successfulMessage', response.data.message)
      })
      .catch(error => {
        let bug = error.response.data.error
        commit('loading', true)
        commit('failedMessage', bug)
      })

  }, 

  getRegisteredUsers({ commit }, payload) {
    //GET ALL SUGGESTION MESSAGES
    commit('loading', true)
    commit('clear')

    axios.get(`admin/registered-users/${payload}`)
      .then(response => {
        commit('loading', false)
        commit('successfulMessage', response.data.message)
        commit('registeredUsers', response.data)
      })
      .catch(error => {
        let bug = error.response.data.error
        commit('loading', true)
        commit('failedMessage', bug)
      })
  },

  getAttendedUsers({ commit }, payload) {
    //GET ALL ATTENDEED MESSAGES
    commit('loading', true)
    commit('clear')
    
    axios.get(`admin/attended-users/${payload}`)
      .then(response => {
        commit('loading', false)
        commit('successfulMessage', response.data.message)
        commit('attendees', response.data)
      })
      .catch(error => {
        let bug = error.response.data.error
        commit('loading', true)
        commit('failedMessage', bug)
      })
  },

  remindUsers ({ commit }, payload) {
    commit('loading', true)
    commit('clear')
    let eventID = payload

    axios.post(`admin/reminder/${eventID}`)
      .then(response => {
        commit('loading', false)
        commit('successfulMessage', response.data.message)
      })
      .catch(error => {
        let bug = error.response.data.error
        commit('loading', true)
        commit('failedMessage', bug)
      })
  }

}

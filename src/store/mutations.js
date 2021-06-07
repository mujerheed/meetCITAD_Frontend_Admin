export const mutations = {
  allEvents(state, payload){
    state.EventList = payload
  },

  updateEventData(state, payload) {
    let event = state.EventList.find(evt => {
      return evt._id == payload.id
    })

    event.title = payload.title
    event.description = payload.description
    event.venue = payload.venue
    event.hostBy = payload.hostBy
    event.date = payload.date
    event.time = payload.time
  },

  adminSignIn (state, payload) {
    state.AdminLogin = payload
  },
  
  suggestions (state, payload) {
    state.SuggestionMessage = payload
  },

  registeredUsers (state, payload) {
    state.RegisteredUsers = payload
  },

  attendedUsers (state, payload) {
    state.AttendedUsers = payload
  },

  successfulMessage(state, payload){
    state.Success = payload
  },

  failedMessage(state, payload){
    state.Failed = payload
  },

  clear(state) {
    state.Failed = null
  },

  loading (state, payload) {
    state.Loading = payload
  }
}

export const mutations = {
  allEvents(state, payload){
    console.log('all events set');
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

  attendees(state, payload) {
    state.AttendedUsers = payload
  },

  attendedUser (state, payload) {
    if (state.AttendedUsers.attendedUsers.findIndex(user => user._id === payload.userId ) >= 0) {
      return
    }else {
      state.AttendedUsers.attendedUsers.push(payload)
    }
    console.log("FROM ATTENDEES");
  },

  unAttendedUser (state, payload) {
    let AttendedUser = state.AttendedUsers.attendedUsers
    AttendedUser.splice(AttendedUser.findIndex(user => user._id === payload.userId ), 1)
    console.log("FROM UNATTENDEES");
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

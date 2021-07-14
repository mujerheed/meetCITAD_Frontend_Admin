export const getters = {
  loadEvents(state) {
    return state.EventList.sort((firstEvent, secondEvent) => {
      return firstEvent.date > secondEvent.date
    })
  },

  singleEvent(state) {
    return (eventId) => {
      return state.EventList.find((event) => {
        return event._id === eventId
      })
    }
  },

  adminAuth(state) {
    return state.AdminLogin
  },

  loadRegisteredUsers(state) {
    return state.RegisteredUsers
  },

  loadAttendedUsers(state) {
    return state.AttendedUsers
  },

  loadSuggestion(state) {
    return state.SuggestionMessage
  },

  successMessage(state) {
    return state.Success
  },
  
  errorMessage(state) {
    return state.Failed
  }

}

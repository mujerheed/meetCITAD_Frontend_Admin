import moment from "moment"

export const getters = {
  loadEvents(state) {
    if (state.EventList.length > 0) {
      return state.EventList.sort((firstEvent, secondEvent) => {
        return new moment(secondEvent.date) - new moment(firstEvent.date)
      }) 
    }
  },

  singleEvent(state) {
    return (eventId) => {
      return state.EventList.find((event) => {
        return event._id === eventId
      })
    }
  },

  suggestion(state) {
    return (comId) => {
      return state.SuggestionMessage.find((comment) => {
        return comment._id === comId
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

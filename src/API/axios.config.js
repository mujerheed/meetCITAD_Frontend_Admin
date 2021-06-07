import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3030/"

axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('jwtToken')
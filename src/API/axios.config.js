import axios from 'axios'

axios.defaults.baseURL = "https://meetcitad.herokuapp.com/" || process.env.SERVER

axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('jwtToken')
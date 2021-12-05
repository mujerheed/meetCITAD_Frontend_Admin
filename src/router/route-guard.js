export default (to, from, next) => {
  let token = localStorage.getItem('jwtToken')
  if(token) {
    next()
  }else {
    next('/signIn')
  }
}
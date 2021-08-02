export default (time) => {
  let s = time.split(':')
  let g = [...s]
  if (g[0] >= 0 && g[0] <=12) {
      g.push('am');
      g.splice(1,0,":")
      let tim = g.join('')
      return tim
  }else {
      let my = g[0] - 12
      g.splice(1,1,my)
      g.push('pm')
      g.splice(1,0,":")
      let tim = g.join('')
      return tim
  }
}
import moment from "moment"

export default (value) => {
  return value ? moment(value).format("MMMM, dddd Do YYYY") : ''
}
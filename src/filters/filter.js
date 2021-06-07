import { format, parseISO } from 'date-fns'

export default (value) => {
  return value ? format(parseISO(value), 'EEEE, MMMM do yyyy') : ''
}
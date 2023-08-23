import moment from 'moment'

export default {
  getUniqNumber() {
    return String(Date.now().toString(32) + Math.random().toString(16)).replace(
      /\./g,
      ''
    )
  },
  getDate(date: number) {
    return moment(date).format('MMMM D YYYY')
  }
}

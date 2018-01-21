import api from '../services/api'

export default {
  getSongs () {
    return api().get('/songs')
  }
}

import api from './api'

export default {
  register (credintial) {
    return api().post('users', credintial)
  }
}

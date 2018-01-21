import api from './api'

const newLocal = 'users/login'

export default {
  register (credintial) {
    return api().post('users', credintial)
  },
  login(credintial) {
    return api().post(newLocal, credintial)
  }
}

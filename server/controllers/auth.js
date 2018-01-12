import users from '../models/users'
import assert from 'assert'
export default {
  register (req, res) {
    users.findOne({email: 'ali'})
      .then(data => {
        if (data) {
          res.status(400).send({errors: 'email found here '})
        }else{
          res.status(200).send({msg: 'successs hahahah'})
        }
      })
      .then(err => res.send(err))
  }
}

import users from '../models/users'
import assert from 'assert'
export default {
  // هنا يتم تسجل النستخدمسن
  register (req, res) {
    const userData = req.body
    users.findOne({email: userData.email})
      .then(data => {
        if (data) {
          res.status(400).send({error: 'email found here '})
        } else{
          const newUser = new users(userData)
        //   هنا ةمزت الباسورد 
          newUser.password = newUser.hashPassword(userData.password)
          newUser.save().then(re => {
            if (re) { res.status(200).send({msg: 'success'}) } else{
              res.status(402).send({error: 'error happen at database levecall yr  developer'})
            }
          }).catch(er => res.status(400).send({error:"somthin happen at save functinality in register function check it"}))
        }
      })
      .catch(err => res.status(402).send({error: ' There is proplem in register function call the developer to solve it '}))
  }
}

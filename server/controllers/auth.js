import Users from '../models/users'
import assert from 'assert'
import jwt from 'jsonwebtoken'
import conf from '../conf/config.json'
function signToken (user, time) {
  let exp = 60 * 60
  switch (time) {
    case 'WEEK': exp = 60 * 60 * 24 * 7

      break

    case 'MONTH': exp = 60 * 60 * 24 * 30

      break

    default: exp
      break
  }
  return jwt.sign(user, conf.auth.SECRET_kEY, { expiresIn: exp})
}

export default {
  // هنا يتم تسجل النستخدمسن
  register (req, res) {
    const userData = req.body
    Users.findOne({email: userData.email})
      .then(data => {
        if (data) {
          res.status(400).send({error: 'email found here '})
        } else {
          const newUser = new Users(userData)
          //   هنا ةمزت الباسورد
          newUser.password = newUser.hashPassword(userData.password)
          newUser.save().then(re => {
            if (re) {
              res.status(200).send({ token: signToken(re.toJSON(), 'WEEK'), user: re})
            } else {
              res.status(402).send({error: 'شوف انحزنت الداتا بس اكو مشكله بالريسبوتس'})
            }
          }).catch(er => {
            res.status(400).send({
              error: 'somthin happen at save functinality in register function check it'
            })
            console.log(er)
          })
        }
      }).catch(err => res.status(402).send({error: ' There is proplem in register function call the developer to solve it '}))
  },
  login (req, res) {
    const {email, password} = req.body
    Users.findOne({email})
      .then(result => {
        if (result) {
          const isvalidPass = result.verifyPassword(password, result.password)
          if (isvalidPass) {
            res.status(200).send({user: result, token: signToken(result.toJSON(), 'WEEK')})
          }else{
            res.status(401).send({error:"password  is wrong check again "})
          }
        } else {
          res.status(402).send({error: 'no email like this found Register you moron -_-'})
        }
      })
      .catch(err => console.log(err))
  }
}

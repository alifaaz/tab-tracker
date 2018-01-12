import mongo, {Schema} from 'mongoose'
import bcrypt from 'bcrypt-nodejs';
const Users = new Schema({
  name: {type: String},
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  bookmarks: {type: Array},
  songs: {type: Array}
})

Users.methods.hashPassword = (pass) => {
  return bcrypt.hashSync(pass)
}
Users.methods.verifyPassword = (pass) => {
  return bcrypt.compareSync(pass, this.password)
}
export default mongo.model('user', Users)

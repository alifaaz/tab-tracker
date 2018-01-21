var jwt = require('jsonwebtoken')
var assert = require('assert')
var bycript= require('bcrypt-nodejs');
// var token = jwt.sign({ pay: 'sami' }, 'secret')
// var token_test_one = jwt.sign({ pay: 'ali' }, 'secret', { expiresIn: 60 * 5})

// console.log(token, token_test_one)

// if (token.length > 0) {
//   jwt.verify(token, 'secret', function (err, data) {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.pay,(Date.now()-data.iat)/1000)
//   })
// }

// console.log(jwt.decode(token_test_one))

var hashPass = bycript.hashSync("12345678")
var testCompare = bycript.compareSync("12345678", "$2a$10$HjzX7XlZkCpg2Tu4DHga6ubL6s36K9hDMxMZJqOsLvl2BPT/uF27q")
console.log(hashPass,testCompare)
import Express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongo, { Promise } from 'mongoose'
import config from '../conf/config.json'
import assert from 'assert'
import routers from '../routres';
// هنا بديت بالمشروغ
const app = Express()
// عبمود اليرل وعلمود الجيسةن
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// علمود اسجل الداحلسن للموثع سجل الدحول للموثع هذا يفيد من اريد اجمع معلومات هن اليوزر
app.use(morgan('combined'))
// هنا اصير عوائل اسمح للكل يجون للموقع ماتي وهذا خطر عالموقع
app.use(cors())

// هنا كل الاي بي اي هنا الراةترس
app.use('/api', routers)

mongo.Promise = global.Promise
mongo.connect(config.URI_DB, {useMongoClient: true}, (err) => {
  assert.equal(null, err)
}).then(() => {
  app.listen(process.env.port || 3000)

  console.log('you have successfuly conected')
}).catch(err => asser.equal(null, err))

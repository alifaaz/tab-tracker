import Express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
// هنا بديت بالمشروغ
const app = Express()
// عبمود اليرل وعلمود الجيسةن
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// علمود اسجل الداحلسن للموثع سجل الدحول للموثع هذا يفيد من اريد اجمع معلومات هن اليوزر
app.use(morgan('combined'))
// هنا اصير عوائل اسمح للكل يجون للموقع ماتي وهذا خطر عالموقع
app.use(cors())

// test ai jwt
let cats = [{name: 'kity', color: 'black'}, {name: 'dodo', color: 'black&white'}]

app.get('/cats', (req, res) => {
  res.json(cats)
})

app.post('/cats', (req, res) => {
  let cat = { 'name': req.body.name,
    'color': req.body.color}
  cats.push(cat);
  res.send(cats)
})

app.post('/register', (req, res) => {
  res.send({
    message: `hahaah this sound good you ${req.body.name}`
  })
})

app.listen(process.env.port || 3000)

import Express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = Express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'))
app.use(cors())


console.log(process.env.PORT);

app.listen(process.env.port || 3000)

import joi from 'joi'

export default {

  validate (req, res, next) {
    const validateSchema = {
      title: joi.string(),
      tab: joi.string()
    }
    const songForm = {
      title: req.body.title,
      tab: req.body.tab
    }

    const { error, value } = joi.validate(songForm, validateSchema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'title': res.status(403).send({error: 'you miss title add it please'})

          break
        case 'tab': res.status(403).send({error: 'you miss tab added it'})

          break

        default: res.status(400).send({error: 'baba seee what ypu miss validation error'})
          break
      }
    }else {
      next()
    }
  }
}

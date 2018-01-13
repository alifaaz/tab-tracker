import joi from 'joi'
export default {
  // هاي علمو اجسك الداتا لي اجتني من الفؤونت ايند حاف صاير سمير هنا اوكفه عند حدخ
  // او مجر د تجيك هادري للداتا ماتس
  registerValidate (req, res, next) {
    const validateSchema = {
      name: joi.string(),
      email: joi.string().email(),
      password: joi.string().min(8).max(32)
    }
    const formData = {
      name: req.body.name,
      email: req.body.email,
      password:req.body.password,
    }

    const { error, value } = joi.validate(formData, validateSchema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email': res.status(400).send({error: 'the email invalid try another one '})
          break
        case 'name': res.status(400).send({error: 'the name invalid try another one '})
          break
        case 'password': res.status(400).send({ error: 'الياسورد يجب ان يكون بين 8 او 23 رمز ' })
        default: res.status(400).send({error: 'invalid creditial lease try it out ! '})
          break
      }
    } else {
      next()
    }
  }
}

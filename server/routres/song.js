import { Router} from 'express'
import song from '../controllers/songs'
import songValidate from '../pliecies/songValidate';
const router = Router()

router.post('/insert', songValidate.validate, song.insert)
router.get('/', song.sendSongs)

export default router

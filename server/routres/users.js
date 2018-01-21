import { Router} from 'express'
import auth from '../controllers/auth'
// منا جيب الفالدجيشن مال فورمه
import ploicyAuth from '../pliecies/authPolicy'
const router = Router()
// هنا استخدمت مدل وير لاول مره علمود اجيك اذا اوكي لو لاع
router.post('/', ploicyAuth.registerValidate, auth.register)
router.post('/login', auth.login)
export default router

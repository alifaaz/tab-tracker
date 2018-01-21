import {Router } from 'express'
import users from './users'
import songs from './song'
const router = Router()

router.use('/users', users)
router.use('/songs', songs)

export default router

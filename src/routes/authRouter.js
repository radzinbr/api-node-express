import express from 'express'

const router = express.Router()

import postauth_log from '../controllers/auth/POSTauth-login.js'
import postauth_logout from '../controllers/auth/POSTlauth-logout.js'



router.post('/login',postauth_log)
router.post('/logout',postauth_logout)

export default router
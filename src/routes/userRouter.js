import express from 'express'
// imports do controller 
import getUser from '../controllers/user/GETusers.js'
import delUser from '../controllers/user/DELuser.js'
import postUser from '../controllers/user/POSTuser.js'
import putUser from '../controllers/user/PUTuser.js'
// fim dos imports 
const router = express.Router()

router.get('/',getUser)
router.post('/',postUser)
router.delete('/',delUser)
router.put('/',putUser)

export default router;
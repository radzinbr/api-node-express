import express from 'express'
// imports do controller 
import getUser from '../controllers/user/GETusers.js'
import delUser from '../controllers/user/DELuser.js'
import postUser from '../controllers/user/insertUser.js'
import putUser from '../controllers/user/updateUser.js'
import listUser from '../controllers/user/Listuser.js'
// fim dos imports 
const router = express.Router()

router.get('/',getUser)
router.post('/',postUser)
router.delete('/',delUser)
router.put('/',putUser)
router.put('/list',listUser)

export default router;
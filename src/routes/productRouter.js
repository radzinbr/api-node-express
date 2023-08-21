import express from 'express'
const router = express.Router()
import delproduct from '../controllers/product/DELproduct.js'
import getproduct from '../controllers/product/GETproduct.js'
import postproduct from '../controllers/product/POSTproduct.js'
import updateproduct from  '../controllers/product/PUTproduct.js'



router.delete('/',delproduct)
router.get('/',getproduct)
router.post('/',postproduct)
router.put('/',updateproduct)

export default router;
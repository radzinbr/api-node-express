import express from 'express'
const router = express.Router()
import delproduct from '../controllers/product/DELproduct.js'
import getproduct from '../controllers/product/GETproduct.js'
import Updateproduct from '../controllers/product/insertProduct.js'
import updateproduct from  '../controllers/product/updateProduct.js'



router.delete('/',delproduct)
router.get('/',getproduct)
router.post('/', Updateproduct)
router.put('/',updateproduct)

export default router;
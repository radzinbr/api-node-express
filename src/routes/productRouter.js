import express from 'express'
const router = express.Router()
import delproduct from '../controllers/product/DELproduct.js'
import getproduct from '../controllers/product/GETproduct.js'
import Updateproduct from '../controllers/product/insertproduct.js'
import updateproduct from  '../controllers/product/updateProduct.js'
import ListallP from '../controllers/product/listProduct.js'



router.delete('/',delproduct)
router.get('/',getproduct)
router.post('/', Updateproduct)
router.put('/',updateproduct)
router.get('/List',ListallP)

export default router;
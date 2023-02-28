const router = require('express').Router()
const {
    CreateProduct,
    getData
} = require('../Controllers/product')



router.post('/create',CreateProduct)
router.get('/getdata/:id', getData)

module.exports= router
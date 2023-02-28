const router = require('express').Router()
const { 
    Create_Category,
    getData
 } = require('../Controllers/category');

router.post('/create',    Create_Category  );



module.exports= router


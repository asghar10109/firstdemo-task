const router = require('express').Router()
const { 
    CreateUser,
 } = require('../Controllers/users');

router.post('/create',CreateUser);



module.exports= router
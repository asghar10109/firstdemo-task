const router = require('express').Router()
const { 
    orderConfirmation,
    getOrders
  
 } = require('../Controllers/order');

router.post('/order',    orderConfirmation  );
router.get('/getorder',getOrders)


module.exports= router

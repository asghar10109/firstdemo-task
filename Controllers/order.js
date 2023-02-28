const Order = require('../Models/order');

const orderConfirmation = async(req,res,next) => {
    const orderData = new Order({
        product :req.body.product,
        user: req.body.user    
    }) 
    
    const data = await orderData.save()
    res.send({
        message:"order create successfully",
        status:201,
        data:{data}
    })
}

const getOrders = async(req,res,next)=>{
    try{
        const data = await 
        Order
        .find()
        .populate({path:'product',populate:{path:'category_id',select:'_id'}})
        .populate('user')
res.send({
    message:"order confirmed ",
    status: 200,
    data:data
})
    }
    catch(err){
        res.send({
            message:"order not confirmed ",
            status:404
            
        })
    }
}


module.exports = {
    orderConfirmation,
    getOrders
}
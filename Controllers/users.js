const User = require('../Models/users');

const CreateUser = async(req,res,next) => {
    const userData = new User({
        username: req.body.username,
        avator: req.body.avator,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password,
        phone: req.body.phone,
      
    }) 
    console.log(userData)
    const data = await userData.save()
    res.send({
        message:"user create sucessfully",
        status:201,
        data:data
    })
}




module.exports = {
    CreateUser
}
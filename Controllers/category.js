const Category = require('../Models/category');

const Create_Category = async(req,res,next) => {
    const categoryData = new Category({
        name: req.body.name,
      
    }) 
    const data = await categoryData.save()
    res.send({
        message:"category create sucessfully",
        status:201,
        data:data
    })
}




module.exports = {
    Create_Category
}
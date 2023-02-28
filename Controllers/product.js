const productModels= require('../Models/product')

const CreateProduct = async(req,res,next)=>{

    const productData = new productModels({
        name: req.body.name,
        color: req.body.color,
        size: req.body.size,
        price: req.body.price,
        category_id:req.body.category_id

    }) 
    const data = await productData.save()
res.send({
    message:'product create successfully',
    status:201,
    data:data
})
}


const getData = async(req,res,next)=>{
    const id = req.params.id
    try{
        const data = await productModels.findById(id).populate({path:'category_id' , select:'_id name'});
        res.send({
            message:"get data successfully",
            status:200,
            data:data
        })

    }
    catch(err){
        res.send({
            message:"error occurs",
            status:404
            
        })

    }

}


module.exports={
    CreateProduct,
    getData
}
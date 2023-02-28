const mongoose = require('mongoose')
const productschema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    color:{
        type:String,
        required: true
        
    },
    size:{
        type:String,
        required: true
        
    },
    price:{
        type:Number,
        required: true
        
    },
    category_id:{
        type: mongoose.Schema.Types.ObjectId   ,
        ref:'Category'
    },
},
{timestamps:true}
)

module.exports = mongoose.model("Product", productschema);
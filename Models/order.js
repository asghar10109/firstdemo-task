const mongoose = require('mongoose')
const orderschema = new mongoose.Schema({
   product:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Product'
   },
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
   }

},
{timestamps:true}
)

module.exports = mongoose.model("Order", orderschema);
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

// routes import start here 
const product_router = require('./Routes/product')
const category_router = require('./Routes/category')
const user_router = require('./Routes/users')
const order_router = require('./Routes/order')
// routes import end here 

app.use(express.json())
app.use(cors());

// router usage start here 
app.use('/category/', category_router)
app.use('/product/', product_router)
app.use('/users/', user_router)
app.use('/order/', order_router)
// router usage end here


// database connection start here 
let db=`mongodb+srv://asghar:xhXrFumePmEz2Bj0@cluster0.p4kolfq.mongodb.net/ECOMMERCE?retryWrites=true&w=majority`
mongoose.set('strictQuery', true);
mongoose.connect(db)
.then((res)=>{
    console.log(`database connect successfully`)
})
.catch(err=>{
    console.log(`database is not connected `)
})
// database connection end here

const Port = 3000
app.listen(Port,()=>{
    console.log(`server is running is on ${Port}`)
})
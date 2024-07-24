import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({

    userId : { type : String , requrired: true },
    items : { type : Array , requrired: true },
    amount : { type : Number , requrired: true },
    address : { type : Object , requrired: true },
    status : { type : String , default : "Food Processing" },
    date : { type : Date , default : Date.now() },
    payment : { type : Boolean , default : false }
})
const orderModel = mongoose.models.order || mongoose.model("order",orderSchema)
export default orderModel
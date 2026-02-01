const mongoose=require('mongoose')

const menutItemSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:String,
    category:{
        type:String,
        enum:['Appetizer','Main Course', 'Dessert','Beverage'],
        required:true
    },
    price:{type:Number,required:true},
    preparationTime:Number,
    isAvailable:{type:Boolean,default:true},
    ingredients:[String],
    imageUrl:String

},{timestamps:true})

menutItemSchema.index({name:'text',ingredients:'text'})
module.exports=mongoose.model('MenuItem',menutItemSchema)
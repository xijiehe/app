const ProductModel = require("../../models/ProductModel")
const ProductService = {
    getList:async({_id})=>{
        return _id?ProductModel.find({_id}).sort({editTime:-1}):ProductModel.find({}).sort({editTime:-1})
    },   
 
}
module.exports = ProductService
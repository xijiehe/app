const ProductModel = require("../../models/ProductModel")
const ProductService = {
    add: async ({
        title,
        introduction,
        detail,
        cover,
        editTime
    }) => {
      return  ProductModel.create({
        title,
        introduction,
        detail,
        cover,
        editTime
    })
    },
    getList:async({_id})=>{
        return _id ? ProductModel.find({_id}) : ProductModel.find({})
    },
    // publish:async({_id,isPublish,editTime})=>{
    //     console.log(_id);
    //     return NewsModel.updateOne({
    //         _id
    //     },{
    //        isPublish,editTime
    //     })
    // },
    delList:async({_id})=>{
        return ProductModel.deleteOne({_id})
    },
    updateList:async({
        title,
        introduction,
        detail,
        _id,
        cover,
        editTime
    })=>{
       if(cover){
        return await ProductModel.updateOne({_id},{
            title,
            introduction,
            detail,
            cover,
            editTime
        })
       }else{
        return await ProductModel.updateOne({_id},{
            title,
            introduction,
            detail,
            editTime
        })
       }
    }
}
module.exports = ProductService
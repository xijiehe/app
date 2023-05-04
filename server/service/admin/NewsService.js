const NewsModel = require("../../models/NewsModel")
const NewsService = {
    add: async ({
        title,
        content,
        category,
        isPublish,
        cover,
        editTime
    }) => {
      return await NewsModel.create({
        title,
        content,
        category,
        isPublish,
        cover,
        editTime
    })
    },
    getList:async({_id})=>{
        return _id?NewsModel.find({_id}):NewsModel.find({})
    },
    publish:async({_id,isPublish,editTime})=>{
        console.log(_id);
        return NewsModel.updateOne({
            _id
        },{
           isPublish,editTime
        })
    },
    delList:async({_id})=>{
        return NewsModel.deleteOne({_id})
    },
    updateList:async({
        title,
        content,
        category,
        isPublish,
        cover,
        editTime,
        _id
    })=>{
       if(cover){
        return await NewsModel.updateOne({_id},{
            title,
            content,
            category,
            isPublish,
            cover,
            editTime
        })
       }else{
        return await NewsModel.updateOne({_id},{
            title,
            content,
            category,
            isPublish,
            editTime
        })
       }
    }
}
module.exports = NewsService
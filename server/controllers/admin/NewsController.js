const NewsService = require("../../service/admin/NewsService");
const NewsController = {
    add: async (req,res) => {
        const cover=req.file?`/newsuploads/${req.file.filename}`:''
        const {title,content,category,isPublish}=req.body
       await NewsService.add({
           title,
           content,
           category:Number(category),
           isPublish:Number(isPublish),
           cover,
           editTime:new Date()
        })
        console.log();
       res.send({
           ActionType:"ok"
       })
    },
    getList:async(req,res)=>{
        const result=await NewsService.getList({_id:req.params.id})
        res.send({
            ActionType:"ok",
            data:result
        })
    },
    publish:async(req,res)=>{
        const result=await NewsService.publish({
            ...req.body,
            editTime:new Date()
        })
        res.send({
            ActionType:"ok",
        })
    },
    delList:async(req,res)=>{
        await NewsService.delList({_id:req.params.id})
        res.send({
            ActionType:"ok",
        })
    },
    updateList:async(req,res)=>{
        const cover=req.file?`/newsuploads/${req.file.filename}`:''
        const {title,content,category,isPublish,_id}=req.body
        await NewsService.updateList({
            _id,
            title,
            content,
            category:Number(category),
            isPublish:Number(isPublish),
            cover,
            editTime:new Date()
         })
         console.log();
        res.send({
            ActionType:"ok"
        })
    }
}
module.exports = NewsController
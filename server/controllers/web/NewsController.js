const NewsService = require("../../service/web/NewsService");
const NewsController = {

    getList:async(req,res)=>{
        const result=await NewsService.getList({_id:req.params.id})
        res.send({
            ActionType:"ok",
            data:result
        })
    },
    getTopList:async(req,res)=>{
        const result=await NewsService.getTopList({limit:req.query.limit})
        res.send({
            ActionType:"ok",
            data:result
        })
    },

}
module.exports = NewsController
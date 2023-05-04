const ProductService = require("../../service/admin/ProductService");
const ProductController = {
    add: async (req,res) => {
        const cover=req.file?`/productuploads/${req.file.filename}`:''
        const {title,introduction,detail}=req.body
       await ProductService.add({
        title,
        introduction,
        detail,
        cover,
        editTime:new Date()
        })
       res.send({
           ActionType:"ok"
       })
    },
    getList:async(req,res)=>{
        const result=await ProductService.getList({_id:req.params.id})
        res.send({
            ActionType:"ok",
            data:result
        })
    },
    // publish:async(req,res)=>{
    //     const result=await NewsService.publish({
    //         ...req.body,
    //         editTime:new Date()
    //     })
    //     res.send({
    //         ActionType:"ok",
    //     })
    // },
    delList:async(req,res)=>{
        await ProductService.delList({_id:req.params.id})
        res.send({
            ActionType:"ok",
        })
    },
    updateList:async(req,res)=>{
        const cover=req.file?`/productuploads/${req.file.filename}`:''
        const {title,introduction,detail,_id}=req.body
        await ProductService.updateList({
            title,
            introduction,
            detail,
            _id,
            cover,
            editTime:new Date()
         })
        res.send({
            ActionType:"ok"
        })
    }
}
module.exports = ProductController
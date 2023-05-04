const UserModel = require("../../models/UserModel")
const crypto=require("crypto")
const UserService={
    login:async({username,password})=>{
      const pwd=crypto.createHash("md5").update(password).digest("hex")
           return UserModel.find({
               username,
               password:pwd
           })
    },
    upload:async({_id,username,introduction,gender,avatar})=>{
      if(avatar){
        return UserModel.updateOne({_id},{
            username,introduction,gender,avatar
        })
      }else{
        return UserModel.updateOne({_id},{
            username,introduction,gender
        })
      }
    },
    add:async({username,password,gender,role,introduction,avatar})=>{
      const pwd=crypto.createHash("md5").update(password).digest("hex")
        return UserModel.create({
            username,
            password:pwd,
            gender,
            role,
            introduction,
            avatar
        })
 },
   getList:async({id})=>{
       return id?UserModel.find({_id:id},{avatar:0,gender:0}):UserModel.find({},{password:0})//不传密码
   },
   delList:async({_id})=>{
       return UserModel.deleteOne({_id})
   },
   putList:async(id,body)=>{
       const cryptoPassword=crypto.createHash("md5").update(body.password).digest("hex")
       const newBody={...body,password:cryptoPassword}
       return UserModel.updateOne({_id:id},newBody)
   }
}

module.exports=UserService
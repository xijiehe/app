const mongoose=require("mongoose")
const Schema=mongoose.Schema

const UserType={
    username:String,
    password:String,
    gender:Number, //性别 0，1，2
    introduction:String,//简介
    avatar:String,
    role:Number  //1超级管理员 2管理员 3员工
}
const UserModel=mongoose.model("user",new Schema(UserType))
module.exports=UserModel
const constants = require('../utils/constants');
// const constant = require('../utils/constants');
const bcrypt = require('bcryptjs');
// const jwt = require("jsonwebtoken");
// const config =  require("../configs/auth.config");
// const dbConfig = require('../configs/db.config');
const Users = require('../models/user.model');
// here we make user registration--- controller for resgistration

exports.signup = async (req,res)=>{
   console.log("Port is running");
// How  the userSignup will happen
let userStatus = req.body.userStatus;
if(!userStatus){
    if(!req.body.userType||req.body.userType==constants.userTypes.customer)
    userStatus = constants.userStatus.approved
}else{
    userstatus = constants.userStatus.pending;
}
const userObjStoredInDb = {
    name:req.body.name,
    userId:req.body.userId,
    email:req.body.email,
    createAt:req.body.createdAt,
    updateAt:req.body.updateAt,
    userType:req.body.userType,
    password:bcrypt.hashSync(req.body.password,8),
    userstatus:userstatus
    }
    // Insert this new user to the db;
    try{
var userObj = await Users.create(userObjStoredInDb).save();
// var userCreated =  userObj.save();
console.log("user Created",userObj);
// }
const userCreationResponse = {

name:userObj.name,
userId:userObj.userId,
email:userObj.email,
userType:userObj.userType,
userStatus:userObj.userStatus,
createdAt:userCreated.createdAt,
updateAt:userCreated.updatedAt,
 }
res.status(201).send(userCreationResponse);

    }catch(err){
        console.log("error while creating anew user");
        res.status(500).send({
            message:"Some internal error  while inseritng new user"
        })
    } 

}

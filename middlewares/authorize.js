const User= require('../models/user');
const Role = require('../models/role');

module.exports.authorize = (req,res,next,roles)=>{
    const userId = req.params.id;
    const user = new User().getUserById(userId);
    const roleOfUser=user.role;

    if(!roles.includes(roleOfUser)){
        return res.status(403).json({
            flag:false,
            message:"Forbidden"
        });
    }

    const permissions = new Role().getPermissionsByName(roleOfUser);
    const typeOfPermission = req.method;
    
    if(!permissions.includes(typeOfPermission)){
        return res.status(403).json({
            flag:false,
            message:"You dont have access to it"
        });
    }
    console.log('Authorized');
    next();
}
const User = require('../models/user');

module.exports.authenticate = (req,res,next)=>{
    console.log(`Authenticating user: ${req.params.id}`);
    const user = new User().getUserById(req.params.id);
    if(user==undefined){
        return res.status(401).json({
            flag:false,
            message:"User not found",
        })
    }
    // token based authentication to be done late

    console.log('Authenticated');
    next();
}
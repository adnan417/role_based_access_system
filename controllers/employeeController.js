module.exports.getDashboard = (req,res)=>{
    res.status(200).json({
        flag:true,
        message:"Employee dashboard"
    })
}

module.exports.createAccount = (req,res)=>{
    res.json(201).json({
        flag:true,
        message:"Account created"
    })
}

module.exports.getDashboard = (req,res)=>{
    res.status(200).json({
        flag:true,
        message:"Admin dashboard"
    })
}
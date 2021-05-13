
const jwt=require('jsonwebtoken');


const User =require('../models/User');

const isAuth = async (req,res,next)=>{
    try {
        const token = req.headers['x-auth-token'];
    //check for token
    if(!token)
        return res.status(401).json({msg:"No Token authorization denied"});
        const decoded= await jwt.verify(token,process.env.secretOrkey);
    //Add User from payload
        const user = await User.findById(decoded.id);

    //check for User
    if(!user){
    return res.status(401).json({msg:" authorization denied"});
    }
  
    req.user=user;
    next();

    } catch (error) {
        res.status(400).json({msg:'Token is not valid'});
        
    }
}
module.exports=isAuth;

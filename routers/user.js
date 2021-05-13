
const express=require("express");
const router=express.Router("");
const jwt=require('jsonwebtoken')
const bcrypt=require("bcrypt");
const User =require('../models/User');
const isAdmin=require('../Middlewares/isAdmin');
const isAuth=require('../Middlewares/isAuth');
const {registerRules,loginRules,validator}=require('../Middlewares/validator')

//---------------------------------------------register user--------------------------------------------------
router.post('/register', registerRules(),validator, async (req,res)=>{
    
    const {name,phone,email,password,imgUser }=req.body;
    try {
        
        //check for existing User
        let user=await User.findOne({email})
        if(user){
            return res.status(400).json({msg:'User already exists'})
        }
        
        //create new User
        user=new User({name,phone,email,password,imgUser});
        //create salt & hash
        const salt=10;
        const hashedpassword=await bcrypt.hash(password,salt);
        user.password=hashedpassword;

        //Save the Use 
        await user.save();

        //sing User
        const payload ={
            id: user.id,
        };

        const token=await jwt.sign(payload,process.env.secretOrkey)

        res.status(200).json({msg:'User registre with success ',user , token})

        }catch(error) {
            console.error(error);
        res.status(500).json({msg:'Server error' });
        }
});
// ---------------------------------------------------loginuser-----------------------------------------------------------

router.post('/login', loginRules(),validator,async (req,res)=>{
    const {email,password}=req.body;
    try {
        //Simple Validation 
        if(!email || !password)  {
            return res.status(400).json({msg:'empty fields' });
        }
        //check for existing User 
        let user= await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:'incorrect email'});
        }
        //check Password
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:'incorrect password'});
        }
        //sing User
        const payload ={
            id: user.id,
        };

        const token=await jwt.sign(payload,process.env.secretOrkey)

        res.json({msg:'Logged in with success',user ,token});
    } catch (error) {
        res.status(500).json({msg:'Server error' });
    }
});
//----------------------------------------------------------getcurrentUser-----------------------------------------------------------

router.get('/user',isAuth,(req,res)=>{
    res.status(200).json({user:req.user})
})

//---------------------------------------------getalluser--------------------------------------------------

router.get('/alluser',isAdmin, async (req,res)=>{

    try {
        const users = await User.find({role:"user"}).select('-password');
        res.json({msg:"User",users});
    } catch (error) {
        res.json({msg:"error"});
    }
    
})
//---------------------------------------------deleteuser--------------------------------------------------

router.delete('/delete/:id',isAdmin, async (req,res)=>{
    const {id} =req.params;  
    try {
        const user = await User.findByIdAndDelete(id);
        res.json({msg:"User deleted",user});
    } catch (error) {
        res.json({msg:"error"});
    }
    
})

//---------------------------------------------updateuser--------------------------------------------------

router.put('/edit/:_id',  async (req, res) => {
    const { _id } = req.params;
    try {
        const user = await User.findByIdAndUpdate(_id, { $set: req.body }, { new: true, $upsert: true });
        res.json({ msg: "user edited", user });
    } catch (error) {
        res.json({ msg: "error" });
    }

})

//--------------------------------- filter user------------------------------------------
router.get('/filter/:subid', async (req, res) => {
    try {
        const user = await User.find({ _id : req.params.userid });
        res.json({ msg: "data fetched", user});
    } catch (error) {
        res.json({ msg: "error delete user" });
    }

})



module.exports=router;

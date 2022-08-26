const express=require('express')
const router=express.Router()

require('../db/conn')

const User=require("../model/userSchema")

router.get('/',(req,res)=>{
    res.send("Hello from the server router")
    
})

router.post('/register', async(req, res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    if(!name||!email||!phone||!work||!password||!cpassword)
    {
    return res.status(422).json({error:'Please fill all fields'})
    }
    try {
    const userExist=await User.findOne({email:email})
    if(userExist){
        return res.status(422).json({error:'Email already exists'})
    }
    const user=new User({name,email,phone,work,password,cpassword});
    const userRegister=await user.save()
    if(userRegister){
        res.status(201).json({message:'User registered successfully'})
    }
    else res.status(500).json({error:'Failed to register'
    })
    }catch(err){console.log(err)}
    
})

router.post('/signin',async(req,res)=>{
    // console.log(req.body);
    // res.json({message:"awesome"})
    try{
        const {email,password}=req.body
        if(!email||!password)
        return res.status(400).json({error:"Please fill both fields"})
        
        const userLogin=await User.findOne({email:email})
        console.log(userLogin)
        if(!userLogin)
        res.status(400).json({error:"User not found"})
        else
        res.json({message:"User sign in successful"})
    }catch(err){console.log(error)}
})

module.exports=router;
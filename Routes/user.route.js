const express = require('express');
const { Usermodel } = require('../Models/user.model');

const UserRouter = express.Router()
UserRouter.use(express.json())


UserRouter.post('/register',async (req,res)=>{
    const {name,email,password} = req.body;

    try{
        let user = new Usermodel({name,email,password})
        await user.save()
        res.send('Successfully registered please login !')
    }catch(err){
        res.send(err)
    }
})

UserRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body;

    try{
        const User = await Usermodel.find({email:email})
        if(User.length>0){
                    res.send("Logged in !")
        }else{
            res.send("Authentication Failed !")
        }
    }catch(err){
        res.send(err)
    }
})

module.exports={
    UserRouter
}
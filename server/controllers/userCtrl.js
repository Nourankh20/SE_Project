
import express from 'express';
const router = express.Router();
import Users from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import passport from 'passport'
export {register ,login, changePassword, logout};

//const auth = require('../middleware/auth')

//const { auth } = require('googleapis/build/src/apis/abusiveexperiencereport')
//const sendMail = require('./sendMail')


//const {CLIENT_URL} = process.env

router.post('/login' , passport.authenticate("local" , {session: false}), (req , res) => {
    if(req.isAuthenticated()) {
        const {name , password , role} = req.user;
        const token = signtoken(name);
        res.cookie("access_token" , token , {httpOnly:true , sameSite: true});
        res.status(200).json({isAuthenticated:true , user: {name , role}});
    }
});


module.exports = router;

router.post('/register', (req , res) => {    
 const {name ,  password , Faculty , role } = req.body;
            
 Users.findOne({name},(err,user) => {
    if(err) 
     res.status(500).json({message: {msgBody:"An error has occured",msgError: true},});
    if(user)
     res.status(400).json({message: {msgBody:"username has been taken",msgError: true},});
    else{
     const newUser = new Users({name , password , Faculty , role});
    newUser.save((err) => {
        if(err) 
           res.status(500).json({message: {msgBody:"An error has occured",msgError: true},});
        else{
           res.status(201).json({message: {msgBody:"account successfuly created",msgError: false},});
        }  
           })
    }    
 })
});

module.exports = router;


    
router.put('/changePassword' , passport.authenticate("jwt" , {session: false}), async (req , res) => {
    console.log(req.body);
    const salt = await bcrypt.genSalt();
    const hashpass = await bcrypt.hash(req.body.password , salt);
    Users.findOneAndUpdate({name: req.user.name} , {password: hashpass} , (req , res) => {
        if(error){ 
          console.log(error); 
          return next(error);
        }  
        else{
            res.json(data);
        }
    }
  );
}
);
module.exports = router; 
router.get('/logout' , passport.authenticate("jwt" , {session: false}),  (req , res) => {

    res.clearCookie("access_token");
    res.json({Users: {name: "" , role: ""} , success:true});

});


module.exports = router;


//module.exports = router;
//export default router;
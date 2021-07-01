
import express from 'express'
const router = express.Router();
import Users from '../models/Users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import passport from 'passport'

//import userCtrl from '../controllers/userCtrl.js'
//import {register ,login, changePassword, logout} from '../controllers/userCtrl.js'
router.post('/login' , passport.authenticate("local" , {session: false}), (req , res) => {
    if(req.isAuthenticated()) {
        const {name , password , role} = req.user;
        const token = signtoken(name);
        res.cookie("access_token" , token , {httpOnly:true , sameSite: true});
        res.status(200).json({isAuthenticated:true , Users: {name , password, role}});
    }
});



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

router.get('/logout' , passport.authenticate("jwt" , {session: false}),  (req , res) => {

    res.clearCookie("access_token");
    res.json({Users: {name: "" , role: ""} , success:true});

});

router.get("/forgot", function (req, res) {
    if (req.isAuthenticated()) {
        //user is alreay logged in
        return res.redirect("/");
    }

    //UI with one input for email
    res.render("forgot");
});

router.post("/forgot", function (req, res) {
    if (req.isAuthenticated()) {
        //user is alreay logged in
        return res.redirect("/");
    }
    Users.forgot(req, res, function (err) {
        if (err) {
            req.flash('error', err);
        }
        else {
            req.flash('success', 'Please check your email for further instructions.');
        }
        res.redirect("/");
    });
});

router.get("/reset/:token", function (req, res) {
    if (req.isAuthenticated()) {
        //user is alreay logged in
        return res.redirect("/");
    }
    var token = req.params.token;
    Users.checkReset(token, req, res, function (err, data) {
        if (err)
            req.flash('error', err);

        //show the UI with new password entry
        res.render("reset");
    });
});

router.post("/reset", function (req, res) {
    if (req.isAuthenticated()) {
        //user is alreay logged in
        return res.redirect("/");
    }
    Users.reset(req, res, function (err) {
        if (err) {
            req.flash('error', err);
            return res.redirect("/reset");
        }
        else {
            req.flash('success', 'Password successfully reset.  Please login using new password.');
            return res.redirect("/login");
        }
    });
});


export default router;
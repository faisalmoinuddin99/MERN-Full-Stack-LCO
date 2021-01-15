const User = require("../models/user")
const { check, validationResult } = require('express-validator');

exports.signUp = (req, res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json({
            error : errors.array()[0].msg
        })
    }
    // saving into the database
    const user = new User(req.body)
    user.save((error, user) => {
        if(error){
            return res.status(400).json({
                error: "Not able to save user in DB"
            })
        }
        res.json({
            name : user.name,
            email : user.email,
            id : user._id
        })
    })
}
exports.signOut = (req,res)=>{
    res.json({
        message : "User SignOut"
    })
}
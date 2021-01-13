
var express = require('express')
var router = express.Router()

const signOut = (req,res)=>{
    res.send("user signout")
}
 
router.get("/signout", signOut)

// sending json response message

const signIn = (req, res)=>{
    res.json({
        message : "User SignIn"
    })
}
router.get("/signin", signIn)

module.exports = router
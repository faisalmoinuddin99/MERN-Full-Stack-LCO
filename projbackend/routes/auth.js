
var express = require('express')
var router = express.Router()
const { check, validationResult } = require('express-validator');

const { signOut, signUp, signIn, isSignedIn } = require("../controllers/auth")


router.post("/signup",[
    // express.validator
    check("name","must be at least 5 chars long").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password","password should be at least 3 char").isLength({ min : 3 })
], signUp)

router.post("/signin",
[
    check("email", "email is required").isEmail(),
    check("password","password field is required").isLength({ min : 3 })
], signIn)


router.get("/signout", signOut)





module.exports = router
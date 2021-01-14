
exports.signUp = (req, res) => {
    console.log("REQ BODY", req.body);
    res.json({
        message : "Signup route works!"
    })
}
exports.signOut = (req,res)=>{
    res.json({
        message : "User SignOut"
    })
}
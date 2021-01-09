const express = require('express')

const app = express()



const port = 8000

const admin = (req,res)=>{
    return res.send("this is admin dashboard")
}
app.get('/',(req,res) => {
    return res.send("Home Page")
})


const isAdmin = (req, res, next) => {
    console.log("isAdmin is running")
    next()
}

// custom MiddleWare
const isLoggedIn = (req,res,next)=>{
console.log("isLogged is running");
next()
}
app.get("/admin", isLoggedIn ,isAdmin, admin)


app.get('/login',(req,res) => {
    return res.send("Login Page")
})

app.get('/signup',(req,res) => {
    return res.send("signup Page")
})

app.get('/signout',(req,res) => res.send('Sign Out'))

app.get('/hitesh',(req,res) => res.send('He uses instagram'))

app.listen(port, ()=> {
    console.log(`Server is up and running.... `);
})




// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })


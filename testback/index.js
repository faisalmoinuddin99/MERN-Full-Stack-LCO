const express = require('express')

const app = express()



const port = 8000


app.get('/',(req,res) => {
    return res.send("Home Page")
})

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


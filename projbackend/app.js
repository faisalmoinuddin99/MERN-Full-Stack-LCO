require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express')
const app = express()

// Connecting to the Database
// mongoose.connect('mongodb://localhost:27017/test',
// {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true  
}).then(()=>{
    console.log("DB CONNECTED");
})



const port = process.env.PORT || 8000

app.listen(port,()=> {
    console.log(`app is running at ${port}`);
})


const dotenv=require('dotenv')
const mongoose=require('mongoose')
const { application } = require('express');
const express=require('express');
const App=express();

dotenv.config({path:'./config.env'})
require('./db/conn')


//middlewar
const middleware=(req,res,next)=>{
    console.log('hello my middleware');
    next();
}


App.get('/',(req,res)=>{
    res.send("Hello from the server")
})
App.get('/about',middleware,(req,res)=>{
    console.log('about')
    res.send("Hello about from the server")
})
App.get('/contact',(req,res)=>{
    res.send("Hello contact from the server")
})
App.get('/work',(req,res)=>{
    res.send("Hello work from the server")
})
App.listen(3000,()=>{
    console.log('server running on port 3000')
})
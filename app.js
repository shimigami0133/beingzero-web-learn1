const express=require('express')
const app=express()
const pin=process.env.PORT
app.get('/',(req,res)=>
{
    res.send("hi");
})
app.listen(pin,'127.0.0.1',()=>
{
    console.log("server is listening")
})
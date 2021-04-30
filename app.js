const express=require('express')
const app=express()
app.get('/',(req,res)=>
{
    res.send("hi");
})
app.listen(8000,'127.0.0.1',()=>
{
    console.log("server is listening")
})
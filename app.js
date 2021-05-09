const express=require('express')
const app=express()
const pin=process.env.PORT || 8000
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/static/login.html")
})
app.get('/signup',(req,res)=>{
    res.sendFile(__dirname+"/static/signup.html")
})
app.get('/index',(req,res)=>{
    res.sendFile(__dirname+"/static/index.html")
})
app.get('/color',(req,res)=>{
    res.sendFile(__dirname+"/static/color.html")
})
app.get('/google',(req,res)=>{
    res.sendFile(__dirname+"/static/google.html")
})
app.get('/apple',(req,res)=>{
    res.sendFile(__dirname+"/static/aapple.html")
})
app.get('/resume',(req,res)=>
{
    res.sendFile(__dirname+"/static/resume.html")
})
app.use(express.static(__dirname+"/static"))
app.listen(pin,()=>
{
    console.log("server is listening"+pin)

})
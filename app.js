const express=require('express')
const app=express()
const pin=process.env.PORT || 8000
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/static/index.html")
})
app.get('/google',(req,res)=>{
    res.sendFile(__dirname+"/static/google.html")
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
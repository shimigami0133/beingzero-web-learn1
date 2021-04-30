const express=require('express')
const app=express()
const pin=process.env.PORT || 3000
app.use(express.static(__dirname+"/static"))
app.get('/resume',(req,res)=>
{
    res.sendFile(__dirname+"/static/index.html")
})
app.listen(pin,'127.0.0.1',()=>
{
    console.log("server is listening"+pin)

})
const express=require('express');
const app=express();
app.get('/',(req,res,next)=>{
    res.send("yadav test");
})
app.get('/user',(req,res,next)=>{
    res.send("yadav test");
})
app.listen(80,()=>{
 console.log("seerver start")
})

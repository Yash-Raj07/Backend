require('dotenv').config()

const express= require('express')


const app =express()
// import express from "express"
const port = 4000
app.get('/',(req, res)=>{
  res.send('Hello World')
})
app.get('/twitter',(req,res)=>{
  res.send('How are you')

})

app.listen(process.env.PORT,() =>{
console.log(`Example app listening on port ${port}`)
})

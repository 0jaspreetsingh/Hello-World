const express = require('express')

const app= express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.get('/',async (req,res)=>{
    res.send("Hello World");
})

var PORT =  process.env.PORT ||2345

app.listen(PORT);
var express = require("express");
var app = express();
var conect = require('./connect.js')

app.get("/tasks",function(req,res){

    conect.getTasks(res)

})
app.get("/family",function(req,res){
   // res.send("fuck the world")
   conect.getFamily(res)

    })



 app.listen(8080, function(){
     console.log("u r connected!")
 })   
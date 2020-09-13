const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.use(bodyParser.urlencoded({extended: true}));

app.post("/bmicalculator", function(req, res){
    let wt = req.body.wt;
    let ht = req.body.ht;

    res.send("BMI is " +  wt/(ht*ht));
})

app.listen(3000, ()=>{
  console.log("Server at port 3000");
});

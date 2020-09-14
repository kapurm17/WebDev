const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function(req, res){
  const query = req.body.loc;

  let url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=b575d8b6e4fd077063f535ff4de34882";

  https.get(url, function(response) {
    console.log(response.statusCode);
  //  console.log(response);
    response.on("data", function(data) {
  //      console.log(data);
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/" + icon;


      res.write('<h1>'+"Temp in " +query+ " : " + temp + '</h1>');
      res.write('<p>' + "Described as : " + desc + '</p>');
      res.write('<img alt= "image" src='+imageURL+'>');
      res.send();
    });
  });
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, ()=>{
  console.log("Server at port 3000");
});

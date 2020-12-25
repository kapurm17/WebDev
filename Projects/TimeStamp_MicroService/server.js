// server.js

// init project
var express = require('express');
var app = express();

// Middleware
app.use(express.static('public'));

// Handlers

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello Timestamp API'});
});

app.get("/api/timestamp/", function(req, res){
  let dt = req.params.date;

   //console.log("    currr");
    let curr_date = new Date();
    let unx = curr_date.getTime();
    let ts = curr_date.toUTCString();
    let obj = {'unix': unx, 'utc': ts};
    //console.log(obj);
    res.json(obj);

});


app.get("/api/timestamp/:date", function(req, res) {
  let dt = req.params.date;
  
    //console.log("    givendat");
    let x =  new Date(dt);
    if(x.getTime()>0) {
      let given_date = new Date(dt);
      let unx = given_date.getTime();
      let ts = given_date.toUTCString();

      if(isNaN(unx)) {
        //console.log("Hi invalid1");
        res.json({error : "Invalid Date" });
      } else {

        let obj = {'unix': unx, 'utc': ts};
        //console.log(obj);
        res.json(obj);
      }
    } else {
      //console.log("    timestamp");
      let given_date = new Date(parseInt(dt));
      let unx = given_date.getTime();
      let ts = given_date.toUTCString();

      
      if(unx<=0 || dt.length !==13) {
        //console.log("Hi invalid2");
        res.json({error : "Invalid Date" });
      } else {

        let obj = {'unix': given_date.valueOf(), 'utc': ts};
        //console.log(obj);
        res.json(obj);
      }
    
  }

  //if(dt[2] == '-') {
  //  let date = new Date(dt);
  //}
});



// listener
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

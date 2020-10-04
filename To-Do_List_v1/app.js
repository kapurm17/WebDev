const express = require("express");
const bodyPareser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  var today = new Date();
  var currentDay = today.getDay();

  var dayList = {0: "Sunday", 1:"Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday"};
  // Render a particular page with the currentDay value
  // renser looks in the folder views in the current dir for list.ejs file
  res.render("list", {dayName: dayList[currentDay]});
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

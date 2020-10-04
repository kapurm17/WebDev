const express = require("express");
const bodyParser = require("body-parser");
const requests = require("request");

const app = express();

// express.static to add static file dependencies in the html page i.e styles.css here, images
// argument is the folder where all thestatic files are kept and html linking is done relative
// to this folder and not the current dir
app.use(express.static("styles"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  let fname = req.body.fname;
  let lname = req.body.lname;
  let email = req.body.email;

  console.log(fname + lname + email);
});

app.listen(3000, ()=> {
  console.log("Server set up at port 3000");
});




// d14218a89a6b56d6f1cf4f6154f98d5d-us2

// 7206299cdf

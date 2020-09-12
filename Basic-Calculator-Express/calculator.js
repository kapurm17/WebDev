// Calculator using node

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Use sendFile instead of send
app.get("/", (req, res)=> {
	// res.sendFile("index.html"); WORKS BUT BETTER TO USE FULL PATH
	res.sendFile(__dirname + "/index.html");
})

app.use(bodyParser.urlencoded({extende: true}));

app.post("/", function(req, res) {
	let num1 = Number(req.body.num1);
	let num2 = Number(req.body.num2);

	res.send("Result is: " + (num1+num2));
})

app.listen(3000, function() {
	console.log("Server is running on port 3000");
});

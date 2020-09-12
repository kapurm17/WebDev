//First express server

const express = require('express');

const app = express();

// request to "/", with response
// 1st param: ROUTE to which we respond: "/" => homepage
// 2nd Callback with (req, res)
app.get("/", function(request, response) {

	// Send a response
	response.send("Hello");

	// print console log
	console.log(request);
})

app.get("/contact", function(req, res) {
	res.send("Contact me at kapurm17@gmail.com");
})

app.get("/about", (req, res)=>{
	res.send("Programmer, Chess Player");
})

// Start the server
app.listen(3000, function() {
	console.log("Server started on port 3000");
});


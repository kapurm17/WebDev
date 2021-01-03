var fs= require('fs');
var http = require('http');
var url = require('url')

http.createServer((req, res) => {
  let addr = url.parse(req.url, true);
  file_name = addr.pathname.substr(1,);

  if(file_name.length == 0) {
    fs.readFile('view/index.html', function(err, data) {
      if(err) {
        console.log(err);
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      }
    });
  } else if(file_name == 'about') {
    console.log("about");
    fs.readFile('view/about.html', function(err, data) {
      if(err) {
        console.log(err);
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      }
    });
  } else if(file_name == 'contact-me') {
    console.log("contact");
    fs.readFile('view/contact_me.html', function(err, data) {
      if(err) {
        console.log(err);
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      }
    });
  } else {
    console.log("inappropriate url");
    fs.readFile('view/404.html', function(err, data) {
      if(err) {
        console.log(err);
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      }
    });

  }

}).listen(8080);

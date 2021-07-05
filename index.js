//Task 1
const http = require("http");
const os = require("os");
const path = require("path");

http
  .createServer(function (request, response) {
    response.writeHead(200, {
      "content-type": "text/html",
    });

    response.write("<h1>System information</h1>");
    response.write("Current user name: " + os.hostname() + "<br>");
    response.write("OS type: " + os.type() + "<br>");
    response.write(
      "System work time: " + os.uptime() / 60 + " minutes" + "<br>"
    );
    response.write(
      "Current work directory: " +
        path.dirname("Users/APT/Desktop/T_11/Task1.js") +
        "<br>"
    );
    response.write(
      "Server file name: " +
        path.basename("Users/APT/Desktop/T_11/Task1.js")
    );
    response.end("");
  })
  .listen(5000);

console.log("server running");

//Task 2

const http = require("http");
const os = require("os");
const pm = require("./personalmodule");

http
  .createServer(function (request, response) {
    response.writeHead(200, {
      "content-type": "text/html",
    });

    response.write("Date of request: " + pm.showDate() + "<br>");
    response.write(pm.Greeting() + ", " + os.hostname());

    response.end();
  })
  .listen(8000);

console.log("server running");


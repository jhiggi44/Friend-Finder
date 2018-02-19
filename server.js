
// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// EXPRESS
// creates an "express" server
var app = express();

// Sets initial port.
var PORT = process.env.PORT || 8080;

// Expose the public directory to access other files
app.use(express.static(path.join(__dirname, './app/public')));

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require(path.join(__dirname, '/app/routing/apiroutes.js'))(app);
require(path.join(__dirname, '/app/routing/htmlRoutes.js'))(app);

// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
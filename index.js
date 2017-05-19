//array for storing all greeted names
//call the express app
var greetedRoutes = require('./greetedRoutes');
var greetedRoutes = greetedRoutes();
var express = require('express');
var app =  express();

// code to display hello + name entered in path
app.get('/greet/:username', greetedRoutes.greet);

//code to display list of greeted users
app.get('/greeted', greetedRoutes.greeted);

//code t display amount of greeted names
app.get('/greeted/counter', greetedRoutes.counter);




//initialize the server
var server = app.listen(3001, function (){
  var host = server.address().address;
  var port = server.address().port;
});

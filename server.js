//jshint esversion:6
const express = require("express");

const app = express();

app.use("*/css", express.static("css/"));
app.use("*/images", express.static("images/"));
app.use(express.static("andy-favicon.ico"));//-----this line of code does not work!

app.get("/", function(req, res){//-------client requests a resource, located in quotation marks
  console.log("Homepage accessed.");
  res.sendFile(__dirname + "/index.html");//---------server responds with a resource
});

app.get("/paintings", function(req, res){
  console.log("Paintings Gallery accessed.");
  res.sendFile(__dirname + "/paintings.html");
});

app.get("/drawings", function(req, res){
  console.log("Drawings Gallery accessed.");
  res.sendFile(__dirname + "/drawings.html");
});

app.get("/contact", function(req, res){
  console.log("Contact page accessed.");
  res.sendFile(__dirname + "/contact.html");
});

app.get("/shop", function(req, res){
  console.log("Shop page accessed.")
  res.sendFile(__dirname + "/shop.html");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});

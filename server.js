//jshint esversion:6
const express = require("express");

const app = express();

app.use("*/css", express.static("css/"));
app.use("*/images", express.static("images/"));
app.use(express.static("andy-favicon.ico"));//-----this line of code does not work!

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/paintings", function(req, res){
  res.sendFile(__dirname + "/paintings.html");
});

app.get("/deaths-procession", function(req, res){
  res.sendFile(__dirname + "/drawings/deaths-procession.html");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});

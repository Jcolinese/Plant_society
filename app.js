//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/JamesWebsite", {useNewUrlParser: true, useUnifiedTopology: true});

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/about", function(req, res){
  res.render("about");
});
app.get("/contact", function(req, res){
  res.render("contact");
});

app.listen(3000, function() {
  console.log("Server Started on Port 3000 ;)");
});

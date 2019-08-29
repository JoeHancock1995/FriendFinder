var path = require("path");
var express = require("express");
//=====================================================//
//======================ROUTING========================//
//====================================================//

module.exports = function(app) {

//===================GET requests=====================//
app.get("/home", function(req, res) {
  res.sendFile("/home.html");
});
  app.get("/public/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
  });
  //if no match defaults to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};

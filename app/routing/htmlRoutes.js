var path = require("path");

//=====================================================//
//======================ROUTING========================//
//====================================================//

module.exports = function(app) {

//===================GET requests=====================//
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  //if no match defaults to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};

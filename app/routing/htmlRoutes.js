var path = require("path");

//=====================================================//
//======================ROUTING========================//
//====================================================//

module.exports = function(app) {

//===================GET requests=====================//
app.GET("/home.html", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});
  app.GET("/public/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
  });
  //if no match defaults to home
  app.GET("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
  });
};

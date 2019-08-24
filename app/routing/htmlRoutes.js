//create a get route to /survey which should display the survey page
var path = require("path");
// create a default catch all route that leads to home.html
module.exports = function(app) {
    // HTML GET requests. This handles when a users visit a page. They are then shown an html page

      app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/public/survey.html"));
      });
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/public/home.html"));
      });
};

var friends = require("../data/friends");

//=====================================================//
//======================ROUTING========================//
//====================================================//
module.exports = function(app) {

//===================GET requests=====================//
// create GET route with url /api/friends  this will display a JSON of all possible friends
app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

//==================POST requests====================//
// create a POST routes with /api/friends this will handle incoming survey results. also handles compatibility logic
app.post("/api/friends", function(req, res) {
    
  var bestMatch = {
    name: "",
    photo: "",
    difference: Infinity
  };

  var friendData = req.body;
  var total = friendData.scores;
  var totalDifference;

  for (var i = 0; i < friends.length; i++) {
    var currentUser = friends[i];
    totalDifference = 0;

    console.log(currentUser.name);

    for (var j= 0; j = currentUser.name);
  }

}) 
};
var friendsData = require("../data/friends");

//=====================================================//
//======================ROUTING========================//
//====================================================//
module.exports = function(app) {

//===================GET requests=====================//
// create GET route with url /api/friends  this will display a JSON of all possible friends
app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

//==================POSt requests====================//
// create a POST routes with /api/friends this will handle incoming survey results. also handles compatibility logic
app.post("/api/friends", function(req, res) {
    
}) 
};
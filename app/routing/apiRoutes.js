// create GET route with url /api/friends  this will display a JSON of all possible friends
var friendsData = require("../data/tableData");
module.exports = function(app)
// create a POST routes with /api/friends      this will handle incoming survey results. also handles compatibility logic
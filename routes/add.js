var data = require("../data.json");
var newFriend;

exports.addFriend = function(req, res) {   
	//create JSON object 
	var newFriend = 
	{
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://lorempixel.com/400/400/people"
	}

	data.friends.push(newFriend);


	res.render('index', data);
	
	//Check if friend's JSON object works
	console.log();

	
 };
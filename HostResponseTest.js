/* 
Small script written to test host connection.
Returns Header response including final Destination url is Host provided is Mask.
also logs to console to keep eye on progress in real time.  
*/

var http = require('http');
var fs = require('fs');

var	host = '*'; //add host url you would like to test here
var Time = 60; //takes time in seconds (must be whole number) (set to 1 min by default)
var runNum = 60;  //number of times script will run in amount of time given (Must be whole number) (set to once a second dy default)
var runTime = Time * 1000;
var interval = runTime / runNum;


var run = setInterval(function(){

	http.get(host, function(res){  //Http GET request (anonymous function returns result from request, code prits result parts needed)
			//var result = res    //for debugging purposes(run debug inspector to see full result returned from GET request. use if you want tochange returned result)
			console.log("response Status Code: " + res.statusCode);
			console.log("response Headers: " + JSON.stringify(res.headers, null, 4));

			fs.appendFile('ResponseTest.json', JSON.stringify(res.headers, null, 4), function(err){ //Created the appends log of results (file created in same location of script)
		if (err) throw err;
	})
		}).on('error', function(err){
		console.log(err);
	});
}, interval); 


setTimeout(function(){clearInterval(run)}, runTime);

// Add the express framework
const app = require('express');
const path = require('path');

//Create Database Connection
// ****
//db config
// ****

// home page
app.get('/', function(req, resp){
	resp.sendFile(path.join(__dirname, 'views', 'home.html'));
});

var port = 2048;
app.listen(port);
console.log('listening on port ' + port);
const express = require('express'); // Add the express framework
const path = require('path');
let app = express();

//Create Database Connection
// ****
//db config
// ****

// home page
app.get('/' function(req, resp){
	resp.sendFile('home.html', {root: path.join(__dirname, './views')})
})

var port = 2048;
app.listen(port);
console.log('listening on port ' + port);
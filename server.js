// Add the express framework
const app = require('express');
const path = require('path');

//Create Database Connection
// ****
//db config
// ****

// home page
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

var port = 2048;
app.listen(port);
console.log('listening on port ' + port);
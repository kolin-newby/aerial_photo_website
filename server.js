// Add the express framework
const express = require('express');
const path = require('path');

const app = express();

//Create Database Connection
// ****
//db config
// ****

//set static folder
// app.use(express.static(path.join(__dirname + 'app_data')));


// home page
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'events.html'));
});

const port = 2048;
app.listen(port);
console.log('listening on port ' + port);
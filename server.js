// Add the express framework
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser');

var app = express();
app.use(helmet());

//Create Database Connection
// ****
//db config
// ****

console.log(__dirname)

//set static folder
app.use(express.static('public/views'));
app.use(express.static('public/resources'));
// app.use(bodyParser());


// home page
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname,'home.html'));
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname,'events.html'));
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'views', 'realty_comm.html'));
});

const port = 2048;
app.listen(port);
console.log('listening on port ' + port);
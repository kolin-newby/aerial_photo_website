const express = require('express'); // Add the express framework

const helmet = require('helmet'); //add helmet for some security

const fs = require('fs');

const https = require('https');

const app = express();


app.use(helmet());


app.use(express.static(__dirname + '/public', { dotfiles: 'allow'} ));

// home page

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/views/home.html')
})

app.get('/home.html', (req, res) => {
	res.sendFile(__dirname + '/public/views/home.html')
})

app.get('/events.html', (req, res) => {
	res.sendFile(__dirname + '/public/views/events.html')
})

app.get('/realty_comm.html', (req, res) => {
	res.sendFile(__dirname + '/public/views/realty_comm.html')
})
// console.log(__dirname);

app.get('/about_me.html', (req, res) => {
	res.sendFile(__dirname + '/public/views/about_me.html')
})

app.get('/gallery.html', (req, res) => {
	res.sendFile(__dirname + '/public/views/gallery.html')
})

var port = 2048;
app.listen(port, () => {
	console.log('listening on port ' + port);
});
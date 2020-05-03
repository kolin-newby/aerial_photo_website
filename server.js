const express = require('express'); // Add the express framework

const helmet = require('helmet'); //add helmet for some safety

const fs = require('fs');

const https = require('https');

const app = express();


app.use(helmet());


app.use(express.static(__dirname + '/public'));

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

var port = 80;

https.createServer({
	key: fs.readFileSync('/etc/letsencrypt/live/newbyap.com/privkey.pem'),

	cert: fs.readFileSync('/etc/letsencrypt/live/newbyap.com/cert.pem'),

	ca: fs.readFileSync('/etc/letsencrypt/live/newbyap.com/chain.pem')
}, app).listen(port, () => {
	console.log('Listening...')
})

// app.listen(port, () => {
// 	console.log('listening on port ' + port);
// });
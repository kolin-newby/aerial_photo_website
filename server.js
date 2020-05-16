const express = require('express'); // Add the express framework

const helmet = require('helmet'); //add helmet for some safety

const fs = require('fs');

const path = require('path');

const https = require('https');
const http = require('http');

const app = express();
const redi = express();


app.use(helmet());
redi.use(helmet());


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

var port = 443;
var http_port = 80;

// app.use(function(req, res, next) {
//       if ((req.get('X-Forwarded-Proto') !== 'https')) {
//         res.redirect('https://' + req.get('Host') + req.url);
//       } else
//         next();
// 	});


redi.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/redirect.html'))
});


http.createServer(redi).listen(http_port, () => {
	console.log('redirecting')
})



https.createServer({
	key: fs.readFileSync('/etc/letsencrypt/live/newbyap.com/privkey.pem'),

	cert: fs.readFileSync('/etc/letsencrypt/live/newbyap.com/cert.pem'),

	ca: fs.readFileSync('/etc/letsencrypt/live/newbyap.com/chain.pem')
}, app).listen(port, () => {
	console.log('Listening on port ' + port)
})
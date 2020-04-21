const express = require('express'); // Add the express framework

const helmet = require('helmet'); //add helmet for some security

const fs = require('fs');
const http = require('http');
const https = require('https');

const app = express();

 //certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/newbyap.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/newbyap.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/newbyap.com/chain.pem', 'utf8');


const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};
//---------------------------


app.use(helmet());


//starting both http and https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});



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

var port = 80;
app.listen(port, () => {
	console.log('listening on port ' + port);
});
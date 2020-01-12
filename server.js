const express = require('express'); // Add the express framework
let app = express();

app.use(express.static(__dirname + '/public'));

// home page

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/views/home.html')
})

app.get('/home.html', (req, res) => {
	res.sendFile(__dirname + '/public/views/home.html')
})

app.get('/about_me.html', (req, res) => {
	res.sendFile(__dirname + '/public/views/about_me.html')
})

app.get('/events.html', (req, res) => {
	res.sendFile(__dirname + '/public/views/events.html')
})

app.get('/realty_commercial', (req, res) => {
	res.sendFile(__dirname + '/public/views/realty_comm.html')
})
// console.log(__dirname);

var port = 2048;
app.listen(port, () => {
	console.log('listening on port ' + port);
});
const express = require('express'); // Add the express framework
let app = express();

const bodyParser = require('body-parser'); // Add the body-parser tool
app.use(bodyParser.json());              // Add support for JSON encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Add support for URL encoded bodies

app.use(express.static(__dirname + '/public'));

// home page
// app.get('/home', (req, res) => {
// 	response.render('home.html')
// })

var port = 2048;
app.listen(port, => {
	console.log('listening on port ' + port);
};